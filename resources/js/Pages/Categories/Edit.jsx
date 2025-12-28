import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Edit({ category }) {
    const { data, setData, put, delete: destroy, processing, errors } = useForm({
        name: category.name || '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('categories.update', category.id));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this category?')) {
            destroy(route('categories.destroy', category.id));
        }
    };

    return (
        <MainLayout header="Edit Category">
            <Head title="Edit Category" />
            <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-100">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-bold text-gray-800">Edit Category</h2>
                    <button
                        onClick={handleDelete}
                        type="button"
                        className="text-red-600 hover:text-red-900 font-medium text-sm flex items-center hover:bg-red-50 px-3 py-2 rounded-md transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                    </button>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="name" value="Category Name" />
                        <TextInput
                            id="name"
                            type="text"
                            className="mt-1 block w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end gap-4 border-t border-gray-100 pt-6">
                        <Link href={route('categories.index')} className="text-gray-600 hover:text-gray-900 font-medium text-sm px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Cancel</Link>
                        <PrimaryButton disabled={processing} className="bg-red-600 hover:bg-red-700 text-base px-6 py-2 h-11">
                            {processing ? 'Saving...' : 'Update Category'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
