import React from 'react';
import { Link, Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { useLanguage } from '@/Contexts/LanguageContext';

export default function Index({ posts }) {
    const { t } = useLanguage();
    const { data: blogPosts, links } = posts;

    return (
        <FrontLayout title={t('blog_title')}>
            <Head title={t('blog')} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                            {/* Placeholder Image */}
                            <div className="flex-shrink-0">
                                {post.featured_image ? (
                                    <img className="h-48 w-full object-cover" src={`/storage/${post.featured_image}`} alt={post.title} />
                                ) : (
                                    <div className="h-48 w-full bg-gray-100 flex items-center justify-center text-red-600 font-bold text-2xl">
                                        {post.title.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-red-600">
                                        {post.categories && post.categories.map(c => c.name).join(', ')}
                                    </div>
                                    <Link href={route('blog.show', post.slug)} className="block mt-2 group">
                                        <p className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                            {post.title}
                                        </p>
                                        <p className="mt-3 text-base text-gray-500 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="sr-only">{post.author?.name}</span>
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
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
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{Math.ceil(post.content.length / 500)} {t('min_read')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {blogPosts.length === 0 && (
                        <div className="col-span-3 text-center py-20">
                            <h3 className="text-2xl font-bold text-gray-400">{t('no_posts')}</h3>
                            <p className="text-gray-500 mt-2">{t('check_back')}</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {links.length > 3 && (
                    <div className="mt-12 flex justify-center">
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            {links.map((link, i) => (
                                link.url ? (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${link.active ? 'z-10 bg-red-50 border-red-500 text-red-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'} ${i === 0 ? 'rounded-l-md' : ''} ${i === links.length - 1 ? 'rounded-r-md' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ) : (
                                    <span
                                        key={i}
                                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-300 ${i === 0 ? 'rounded-l-md' : ''} ${i === links.length - 1 ? 'rounded-r-md' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                )
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </FrontLayout>
    );
}
