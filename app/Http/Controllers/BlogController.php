<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::with('author', 'categories')
            ->where('status', 'published')
            ->orderBy('published_at', 'desc')
            ->paginate(9); // Grid of 3x3

        return Inertia::render('Blog/Index', [
            'posts' => $posts
        ]);
    }

    public function show($slug)
    {
        $post = Post::with('author', 'categories')
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return Inertia::render('Blog/Show', [
            'post' => $post,
            'recent_posts' => Post::where('status', 'published')
                ->where('id', '!=', $post->id)
                ->orderBy('published_at', 'desc')
                ->take(3)
                ->get()
        ]);
    }
}
