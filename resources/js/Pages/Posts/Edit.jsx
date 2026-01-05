import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import RichTextEditor from '@/Components/RichTextEditor';

export default function Edit({ post, categories }) {
    const [currentLang, setCurrentLang] = React.useState('en');

    // Helper to ensure we have an object structure
    const parseMultilingual = (field) => {
        if (typeof field === 'string') return { en: field, id: '', zh: '' };
        return { en: '', id: '', zh: '', ...field };
    };

    const { data, setData, post: submitForm, delete: destroy, processing, errors } = useForm({
        _method: 'put',
        title: parseMultilingual(post.title),
        content: parseMultilingual(post.content),
        status: post.status || 'draft',
        categories: post.categories ? post.categories.map(c => c.id) : [],
        featured_image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        submitForm(route('posts.update', post.id));
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

    const languages = [
        { code: 'en', label: 'English (EN)' },
        { code: 'id', label: 'Indonesian (ID)' },
        { code: 'zh', label: 'Chinese (ZH)' },
    ];

    return (
        <MainLayout header="Edit Post">
            <Head title={`Edit ${typeof data.title === 'string' ? data.title : data.title.en}`} />
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

                    {/* Language Tabs */}
                    <div className="flex space-x-2 border-b border-gray-200 mb-4">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                type="button"
                                onClick={() => setCurrentLang(lang.code)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${currentLang === lang.code
                                    ? 'bg-red-50 text-red-700 border-b-2 border-red-500'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    <div>
                        <InputLabel htmlFor="title" value={`Post Title (${languages.find(l => l.code === currentLang).label})`} />
                        <TextInput
                            id="title"
                            type="text"
                            className="mt-1 block w-full text-lg"
                            value={data.title[currentLang]}
                            onChange={(e) => setData('title', { ...data.title, [currentLang]: e.target.value })}
                            required={currentLang === 'en'}
                        />
                        <InputError message={errors[`title.${currentLang}`] || errors.title} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="content" value={`Content (${languages.find(l => l.code === currentLang).label})`} />
                        <RichTextEditor
                            key={currentLang}
                            value={data.content[currentLang]}
                            onChange={(content) => setData('content', { ...data.content, [currentLang]: content })}
                            placeholder="Write your story here..."
                        />
                        <InputError message={errors[`content.${currentLang}`] || errors.content} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="featured_image" value="Featured Image" />
                        {post.featured_image && (
                            <div className="mb-2">
                                <img src={`/storage/${post.featured_image}`} alt="Current" className="h-32 w-auto object-cover rounded-md" />
                            </div>
                        )}
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
                                            className="rounded border-gray-300 text-red-600 shadow-sm focus:ring-red-500"
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
                        <PrimaryButton disabled={processing} className="bg-red-600 hover:bg-red-700 text-base px-6 py-2 h-11">
                            {processing ? 'Saving...' : 'Update Post'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
