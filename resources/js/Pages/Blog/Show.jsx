import React from 'react';
import { Link, Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';

export default function Show({ post, recent_posts }) {
    return (
        <FrontLayout>
            <Head title={post.title} />

            <article>
                {/* Article Header */}
                <header className="bg-indigo-900 text-white py-16 sm:py-24">
                    <div className="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:px-8">
                        <div className="mb-4">
                            {post.categories && post.categories.map(c => (
                                <span key={c.id} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-800 text-indigo-100 mx-1">
                                    {c.name}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center text-indigo-300 space-x-2 text-sm sm:text-base">
                            <span>By {post.author?.name}</span>
                            <span>&middot;</span>
                            <time dateTime={post.published_at}>
                                {new Date(post.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <div className="relative py-16 bg-white overflow-hidden">
                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <div className="text-lg max-w-prose mx-auto">
                            <p className="mt-8 text-xl text-gray-500 leading-8">
                                {post.excerpt}
                            </p>
                        </div>
                        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            <div className="whitespace-pre-wrap font-serif">
                                {post.content}
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Recent Posts Section */}
            {recent_posts.length > 0 && (
                <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8 max-w-2xl mx-auto lg:max-w-none">
                            Read Next
                        </h2>
                        <div className="grid gap-12 lg:grid-cols-3 lg:gap-x-8 max-w-2xl mx-auto lg:max-w-none">
                            {recent_posts.map(recent => (
                                <div key={recent.id} className="flex flex-col rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
                                    <div className="p-6">
                                        <Link href={route('blog.show', recent.slug)} className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors">{recent.title}</p>
                                        </Link>
                                        <p className="mt-3 text-base text-gray-500 line-clamp-3">{recent.excerpt}</p>
                                        <div className="mt-4">
                                            <Link href={route('blog.show', recent.slug)} className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">Read full story &rarr;</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </FrontLayout>
    );
}
