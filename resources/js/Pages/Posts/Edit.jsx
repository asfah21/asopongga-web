import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Edit({ post, categories }) {
    const initialCategories = post.categories ? post.categories.map(c => c.id) : [];

    const { data, setData, put, processing, errors, delete: destroy } = useForm({
        title: post.title || '',
        content: post.content || '',
        status: post.status || 'draft',
        categories: initialCategories
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('posts.update', post.id));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
            destroy(route('posts.destroy', post.id));
        }
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
        <MainLayout header="Edit Post">
            <Head title={`Edit ${post.title}`} />
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-100">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-bold text-gray-800">Edit Details</h2>
                    <button
                        onClick={handleDelete}
                        type="button"
                        className="text-red-600 hover:text-red-900 font-medium text-sm flex items-center hover:bg-red-50 px-3 py-2 rounded-md transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete Post
                    </button>
                </div>

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
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="content" value="Content" />
                        <textarea
                            id="content"
                            className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm h-80 text-base font-sans"
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            required
                        />
                        <InputError message={errors.content} className="mt-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <div>
                            <InputLabel htmlFor="status" value="Publishing Status" />
                            <select
                                id="status"
                                className="mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                            >
                                <option value="draft">Draft (Unpublished)</option>
                                <option value="published">Published (Visible to public)</option>
                            </select>
                            <InputError message={errors.status} className="mt-2" />
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
                                            checked={data.categories.includes(category.id)}
                                            onChange={handleCategoryChange}
                                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                                        />
                                        <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700 cursor-pointer select-none">
                                            {category.name}
                                        </label>
                                    </div>
                                ))}
                                {categories.length === 0 && <p className="text-sm text-gray-400 italic">No categories available.</p>}
                            </div>
                            <InputError message={errors.categories} className="mt-2" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4 border-t border-gray-100 pt-6">
                        <Link href={route('posts.index')} className="text-gray-600 hover:text-gray-900 font-medium text-sm px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Cancel</Link>
                        <PrimaryButton disabled={processing} className="bg-indigo-600 hover:bg-indigo-700 text-base px-6 py-2 h-11">
                            {processing ? 'Saving...' : 'Update Post'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
