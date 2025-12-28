import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        status: 'draft',
        categories: [],
        featured_image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    const handleCategoryChange = (e) => {
        const id = parseInt(e.target.value);
        if (e.target.checked) {
            setData('categories', [...data.categories, id]);
        } else {
            setData('categories', data.categories.filter(c => c !== id));
        }
    };

    return (
        <MainLayout header="Create Post">
            <Head title="Create New Post" />
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-100">
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="title" value="Post Title" />
                        <TextInput
                            id="title"
                            type="text"
                            className="mt-1 block w-full text-lg"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                            isFocused
                            placeholder="Enter a catchy title..."
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="content" value="Content" />
                        <textarea
                            id="content"
                            className="mt-1 block w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm h-80 text-base"
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            placeholder="Write your story here..."
                            required
                        />
                        <InputError message={errors.content} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="featured_image" value="Featured Image" />
                        <input
                            type="file"
                            id="featured_image"
                            className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-red-50 file:text-red-700
                                hover:file:bg-red-100"
                            onChange={(e) => setData('featured_image', e.target.files[0])}
                        />
                        <InputError message={errors.featured_image} className="mt-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <div>
                            <InputLabel htmlFor="status" value="Publishing Status" />
                            <select
                                id="status"
                                className="mt-2 block w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm"
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                            >
                                <option value="draft">Draft (Unpublished)</option>
                                <option value="published">Published (Visible to public)</option>
                            </select>
                            <InputError message={errors.status} className="mt-2" />
                            <p className="text-sm text-gray-500 mt-2">Drafts are only visible to authors.</p>
                        </div>

                        <div>
                            <InputLabel value="Categories" />
                            <div className="mt-2 space-y-2 max-h-48 overflow-y-auto border border-gray-200 p-4 rounded-md bg-white">
                                {categories.map((category) => (
                                    <div key={category.id} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`category-${category.id}`}
                                            value={category.id}
                                            onChange={handleCategoryChange}
                                            className="rounded border-gray-300 text-red-600 shadow-sm focus:ring-red-500"
                                        />
                                        <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700 cursor-pointer select-none">
                                            {category.name}
                                        </label>
                                    </div>
                                ))}
                                {categories.length === 0 && <p className="text-sm text-gray-400 italic">No categories found. Create one first!</p>}
                            </div>
                            <InputError message={errors.categories} className="mt-2" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4 border-t border-gray-100 pt-6">
                        <Link href={route('posts.index')} className="text-gray-600 hover:text-gray-900 font-medium text-sm px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Cancel</Link>
                        <PrimaryButton disabled={processing} className="bg-red-600 hover:bg-red-700 text-base px-6 py-2 h-11">
                            {processing ? 'Saving...' : 'Create Post'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
