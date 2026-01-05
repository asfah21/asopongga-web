import React from 'react';
import { Link, Head } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { useLanguage } from '@/Contexts/LanguageContext';

export default function Show({ post, recent_posts }) {
    const { t, language } = useLanguage();

    const getLocalized = (data) => {
        if (typeof data === 'object' && data !== null) {
            return data[language] || data['en'] || Object.values(data)[0] || '';
        }
        return data;
    };

    const title = getLocalized(post.title);
    const content = getLocalized(post.content);
    const excerpt = getLocalized(post.excerpt);
    const date = new Date(post.published_at).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <FrontLayout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={excerpt} />
            </Head>

            <div className="bg-white min-h-screen">
                {/* Hero / Header Section */}
                <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                    {/* Background Image / Gradient */}
                    {post.featured_image ? (
                        <>
                            <img
                                src={`/storage/${post.featured_image}`}
                                alt={title}
                                className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-slow-zoom"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-white"></div>
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-600/20 via-gray-900 to-gray-900">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ef4444 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }}></div>
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                    {/* Hero Content */}
                    <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
                        <div className="max-w-4xl space-y-6">
                            {/* Breadcrumbs */}
                            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-4 bg-white/10 backdrop-blur-md w-fit px-3 py-1.5 rounded-full border border-white/10">
                                <Link href="/" className="hover:text-white transition-colors">{t('home')}</Link>
                                <span className="opacity-50">/</span>
                                <Link href={route('blog.index')} className="hover:text-white transition-colors">{t('blog')}</Link>
                            </nav>

                            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                                {title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-white font-bold text-lg shadow-xl">
                                        {post.author?.name?.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-bold text-white uppercase tracking-wider">{post.author?.name}</div>
                                        <div className="text-xs text-gray-300">Author</div>
                                    </div>
                                </div>
                                <div className="h-10 w-[1px] bg-white/20 hidden sm:block"></div>
                                <div className="flex items-center gap-2 text-gray-200">
                                    <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium">{date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sidebar Left: Categories & Social (Large Screens) */}
                        <aside className="hidden lg:block lg:col-span-1 border-r border-gray-100 pr-8">
                            <div className="sticky top-32 space-y-12">
                                <div className="space-y-4">
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">{t('share') || 'Share Post'}</span>
                                    <div className="flex flex-col gap-3">
                                        {['fb', 'tw', 'ln'].map(s => (
                                            <button key={s} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-gray-100">
                                                <div className="text-[10px] font-bold uppercase">{s}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Article Text */}
                        <main className="lg:col-span-7">
                            <article className="prose prose-lg md:prose-xl prose-red max-w-none">
                                {/* Excerpt Styled as Intro */}
                                <p className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed mb-12 font-serif border-l-4 border-red-600 pl-8 italic">
                                    {excerpt}
                                </p>

                                {/* Main Content Body */}
                                <div
                                    className="font-serif text-gray-700 leading-extra-relaxed tracking-wide first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left"
                                    dangerouslySetInnerHTML={{ __html: content }}
                                />
                            </article>

                            {/* Tags / Categories */}
                            <div className="mt-20 pt-12 border-t border-gray-100 flex flex-wrap gap-2">
                                {post.categories?.map(c => (
                                    <span key={c.id} className="px-5 py-2 rounded-xl bg-gray-50 text-gray-900 text-xs font-bold uppercase tracking-wider border border-gray-100 shadow-sm">
                                        # {c.name}
                                    </span>
                                ))}
                            </div>
                        </main>

                        {/* Sidebar Right: Recent News */}
                        <aside className="lg:col-span-4 space-y-12">
                            {/* Related Posts */}
                            <div className="bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-[60px] transform group-hover:scale-150 transition-transform duration-1000"></div>

                                <h3 className="text-xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
                                    {t('read_next')}
                                    <span className="w-8 h-[1px] bg-red-600 block"></span>
                                </h3>

                                <div className="space-y-8 relative z-10">
                                    {recent_posts.map(recent => (
                                        <Link key={recent.id} href={route('blog.show', recent.slug)} className="group/item block space-y-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{recent.categories?.[0]?.name || 'Article'}</span>
                                                <div className="h-px flex-1 bg-white/5"></div>
                                            </div>
                                            <p className="text-gray-200 font-bold group-hover/item:text-red-500 transition-colors line-clamp-2 leading-tight">
                                                {getLocalized(recent.title)}
                                            </p>
                                            <div className="text-xs text-gray-500 flex items-center justify-between">
                                                <span>{new Date(recent.published_at).toLocaleDateString()}</span>
                                                <span className="group-hover/item:translate-x-1 transition-transform">&rarr;</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                <Link href={route('blog.index')} className="mt-12 block py-4 text-center rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-red-600 transition-all">
                                    {t('view_all')}
                                </Link>
                            </div>

                            {/* Author Bio Box */}
                            <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                        {post.author?.name?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{t('by')}</p>
                                        <p className="text-gray-900 font-extrabold text-xl">{post.author?.name}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed italic">
                                    "{t('author_bio') || 'Passionate about sharing stories and knowledge about our community and culture.'}"
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slow-zoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.1); }
                }
                .animate-slow-zoom {
                    animation: slow-zoom 20s infinite alternate linear;
                }
                .leading-extra-relaxed {
                    line-height: 2;
                }
            `}</style>
        </FrontLayout>
    );
}
