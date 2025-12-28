import React from 'react';
import { Head, Link } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';

export default function Welcome({ recentPosts }) {
    return (
        <FrontLayout>
            <Head title="Welcome" />

            {/* Hero Section */}
            <div className="relative bg-gray-900 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">We build digital</span>{' '}
                                    <span className="block text-red-600 xl:inline">experiences</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Transforming ideas into reality with cutting-edge technology and innovative design. Your partner in digital excellence.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            href={route('blog.index')}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                        >
                                            Read Our Blog
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                                            Contact Us
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    {/* Decorative pattern or placeholder image */}
                    <div className="h-56 w-full bg-gray-800 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
                        <svg className="w-1/3 h-1/3 text-gray-600 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Services</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to innovate
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We provide comprehensive solutions tailored to your business needs, ensuring scalability and performance.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {/* Service 1 */}
                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <div className="ml-16">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Web Development</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Custom web applications built with the latest technologies like React and Laravel.
                                    </p>
                                </div>
                            </div>
                            {/* Service 2 */}
                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-16">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Mobile Solutions</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Cross-platform mobile apps that provide seamless user experiences.
                                    </p>
                                </div>
                            </div>
                            {/* Service 3 */}
                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-16">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Quality Assurance</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Rigorous testing strategies to ensure your software is bug-free and reliable.
                                    </p>
                                </div>
                            </div>
                            {/* Service 4 */}
                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <div className="ml-16">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Consultancy</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Expert advice to help you navigate complex digital transformations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent News Section */}
            {recentPosts.length > 0 && (
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                Latest News from Blog
                            </h2>
                            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                                Stay updated with our latest insights and company announcements.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                            {recentPosts.map((post) => (
                                <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                                    {post.featured_image && (
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover" src={`/storage/${post.featured_image}`} alt={post.title} />
                                        </div>
                                    )}
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <div className="text-sm font-medium text-red-600">
                                                {post.categories && post.categories.map(c => c.name).join(', ')}
                                            </div>
                                            <Link href={route('blog.show', post.slug)} className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900 hover:text-red-600 transition-colors">
                                                    {post.title}
                                                </p>
                                                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="mt-6 flex items-center">
                                            <div className="flex-shrink-0">
                                                <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold">
                                                    {post.author?.name?.charAt(0)}
                                                </div>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    {post.author?.name}
                                                </p>
                                                <div className="flex space-x-1 text-sm text-gray-500">
                                                    <time dateTime={post.published_at}>
                                                        {new Date(post.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <Link href={route('blog.index')} className="text-red-600 font-semibold hover:text-red-500">
                                View all posts &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </FrontLayout>
    );
}
