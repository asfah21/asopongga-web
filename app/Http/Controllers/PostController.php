<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('author', 'categories')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Posts/Index', [
            'posts' => $posts
        ]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create', [
            'categories' => Category::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|array',
            'title.en' => 'required|string|max:255',
            'title.id' => 'nullable|string|max:255',
            'title.zh' => 'nullable|string|max:255',
            'content' => 'required|array',
            'status' => 'required|in:draft,published',
            'categories' => 'array',
            'categories.*' => 'exists:categories,id',
            'featured_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('featured_image')) {
            $imagePath = $request->file('featured_image')->store('posts', 'public');
        }

        // Generate slug from English title or Indonesian title
        $slugSource = $validated['title']['en'] ?? $validated['title']['id'] ?? reset($validated['title']);
        
        $excerpts = [];
        foreach($validated['content'] as $lang => $text) {
             if($text) $excerpts[$lang] = Str::limit(strip_tags($text), 150);
        }

        $post = Post::create([
            'title' => $validated['title'],
            'slug' => Str::slug($slugSource),
            'content' => $validated['content'],
            'excerpt' => $excerpts,
            'status' => $validated['status'],
            'published_at' => $validated['status'] === 'published' ? now() : null,
            'author_id' => auth()->id(),
            'featured_image' => $imagePath,
        ]);

        if ($request->has('categories')) {
            $post->categories()->sync($request->categories);
        }

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    public function edit(Post $post)
    {
        $post->load('categories');
        return Inertia::render('Posts/Edit', [
            'post' => $post,
            'categories' => Category::all()
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|array',
            'title.en' => 'required|string|max:255',
            'title.id' => 'nullable|string|max:255',
            'title.zh' => 'nullable|string|max:255',
            'content' => 'required|array',
            'status' => 'required|in:draft,published',
            'categories' => 'array',
            'categories.*' => 'exists:categories,id',
            'featured_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Generate slug from English title or Indonesian title
        $slugSource = $validated['title']['en'] ?? $validated['title']['id'] ?? reset($validated['title']);

        $excerpts = [];
        foreach($validated['content'] as $lang => $text) {
             if($text) $excerpts[$lang] = Str::limit(strip_tags($text), 150);
        }

        $data = [
            'title' => $validated['title'],
            'slug' => Str::slug($slugSource),
            'content' => $validated['content'],
            'excerpt' => $excerpts,
            'status' => $validated['status'],
            'published_at' => $validated['status'] === 'published' ? now() : null,
        ];

        if ($request->hasFile('featured_image')) {
            // Delete old image if exists
            if ($post->featured_image) {
                Storage::disk('public')->delete($post->featured_image);
            }
            $data['featured_image'] = $request->file('featured_image')->store('posts', 'public');
        }

        $post->update($data);

        if ($request->has('categories')) {
            $post->categories()->sync($request->categories);
        }

        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
    }

    public function uploadImage(Request $request)
    {
        \Log::info('Upload attempt', ['hasFile' => $request->hasFile('upload')]);
        if ($request->hasFile('upload')) {
            $file = $request->file('upload');
            \Log::info('File info', [
                'name' => $file->getClientOriginalName(),
                'size' => $file->getSize(),
                'mime' => $file->getMimeType()
            ]);
            $path = $file->store('editor', 'public');
            $url = asset(Storage::url($path));
            \Log::info('Upload success', ['path' => $path, 'url' => $url]);
            return response()->json([
                'url' => $url
            ]);
        }
        \Log::error('Upload failed - No file');
        return response()->json(['error' => 'No image uploaded'], 400);
    }
}
