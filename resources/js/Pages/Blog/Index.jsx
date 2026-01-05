import React from 'react';
import { Link, Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { useLanguage } from '@/Contexts/LanguageContext';

export default function Index({ posts }) {
    const { t, language } = useLanguage();
    const { data: blogPosts, links } = posts;

    const getLocalized = (data) => {
        if (typeof data === 'object' && data !== null) {
            return data[language] || data['en'] || Object.values(data)[0] || '';
        }
        return data;
    };

    return (
        <FrontLayout title={t('blog_title')}>
            <Head title={t('blog')} />

            <div className="bg-gray-50/50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    {/* Header Info */}
                    <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="space-y-4">
                            {/* <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.3em]">{t('blog')}</h2> */}
                            <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                {t('latest_stories')}
                            </p>
                            {/* <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                                {t('blog_subtitle') || 'Pelajari lebih lanjut tentang perkembangan teknologi dan inovasi terbaru dari tim kami.'}
                            </p> */}
                        </div>
                    </div>

                    <div className="grid gap-8 md:gap-10 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="group flex flex-col rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    {post.featured_image ? (
                                        <img
                                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            src={`/storage/${post.featured_image}`}
                                            alt={getLocalized(post.title)}
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 opacity-10">
                                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                                    </pattern>
                                                    <rect width="100" height="100" fill="url(#grid)" />
                                                </svg>
                                            </div>
                                            <span className="text-white font-bold text-4xl opacity-20">{getLocalized(post.title).charAt(0)}</span>
                                        </div>
                                    )}
                                    {/* Category Floating Badge */}
                                    <div className="absolute top-5 left-5">
                                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-red-600 text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-sm border border-white/20">
                                            {post.categories?.[0]?.name || 'Article'}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-8 flex flex-col">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 font-bold text-[10px] uppercase overflow-hidden">
                                                {post.author?.name?.charAt(0)}
                                            </div>
                                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{post.author?.name}</span>
                                        </div>

                                        <Link href={route('blog.show', post.slug)} className="block group/title">
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-4 line-clamp-2">
                                                {getLocalized(post.title)}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                {getLocalized(post.excerpt)}
                                            </p>
                                        </Link>
                                    </div>

                                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {new Date(post.published_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <Link
                                            href={route('blog.show', post.slug)}
                                            className="w-10 h-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {blogPosts.length === 0 && (
                            <div className="col-span-full py-20 text-center">
                                <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{t('no_posts')}</h3>
                                <p className="text-gray-500">{t('check_back')}</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {links.length > 3 && (
                        <div className="mt-20 flex justify-center">
                            <nav className="flex items-center gap-2">
                                {links.map((link, i) => (
                                    link.url ? (
                                        <Link
                                            key={i}
                                            href={link.url}
                                            className={`min-w-[48px] h-12 flex items-center justify-center rounded-2xl text-sm font-bold transition-all px-4 ${link.active ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-white border border-gray-100 text-gray-600 hover:border-red-200 hover:text-red-600'}`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ) : (
                                        <span
                                            key={i}
                                            className="min-w-[48px] h-12 flex items-center justify-center rounded-2xl text-sm font-bold bg-gray-50 text-gray-300 border border-gray-100 px-4"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    )
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </FrontLayout>
    );
}

