import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('categories.store'));
    };

    return (
        <MainLayout header="Create Category">
            <Head title="Create New Category" />
            <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-100">
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
                            isFocused
                            placeholder="e.g. Technology"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end gap-4 border-t border-gray-100 pt-6">
                        <Link href={route('categories.index')} className="text-gray-600 hover:text-gray-900 font-medium text-sm px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">Cancel</Link>
                        <PrimaryButton disabled={processing} className="bg-red-600 hover:bg-red-700 text-base px-6 py-2 h-11">
                            {processing ? 'Saving...' : 'Create Category'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
