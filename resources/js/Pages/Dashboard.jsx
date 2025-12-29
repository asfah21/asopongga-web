import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <MainLayout header="Dashboard">
            <Head title="Dashboard" />

            <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100">
                <div className="p-6 md:p-10 text-center">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Welcome Back!</h1>
                    <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-500 mb-8">
                        Manage your company profile website content from this dashboard. Create new blog posts, organize categories, and more.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href={route('posts.create')} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                            <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                            Write New Post
                        </Link>
                        <Link href={route('posts.index')} className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                            View All Posts
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href={route('posts.index')} className="group bg-white overflow-hidden shadow-sm rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
                    <div className="p-4 rounded-full bg-red-50 text-red-600 group-hover:bg-red-100 transition-colors mr-5">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">Blog Posts</h3>
                        <p className="text-sm text-gray-500 mt-1">Manage articles and news</p>
                    </div>
                </Link>
                <Link href={route('categories.index')} className="group bg-white overflow-hidden shadow-sm rounded-lg p-6 flex items-center hover:shadow-md transition-shadow">
                    <div className="p-4 rounded-full bg-amber-50 text-amber-600 group-hover:bg-amber-100 transition-colors mr-5">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">Categories</h3>
                        <p className="text-sm text-gray-500 mt-1">Organize your content tags</p>
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
}
