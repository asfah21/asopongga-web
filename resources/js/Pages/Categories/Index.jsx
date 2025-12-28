import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index({ categories }) {
    return (
        <MainLayout header="Categories">
            <Head title="Categories" />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Categories</h3>
                    <div className="mt-4">
                        <ul role="list" className="divide-y divide-gray-100">
                            {categories.map((category) => (
                                <li key={category.id} className="flex justify-between gap-x-6 py-5">
                                    <div className="flex gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">{category.name}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            {categories.length === 0 && <p className="text-gray-500">No categories found.</p>}
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
