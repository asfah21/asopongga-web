import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { useLanguage } from '@/Contexts/LanguageContext';

const StatCard = ({ val, label, delay }) => (
    <div className={`text-center p-6 transition-all duration-700 delay-[${delay}ms] transform`}>
        <div className="text-3xl md:text-5xl font-extrabold text-white mb-2">{val}</div>
        <div className="text-red-200/60 uppercase tracking-widest text-xs font-bold">{label}</div>
    </div>
);

const ServiceCard = ({ icon, title, desc }) => (
    <div className="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-2">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500 shadow-inner">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
            {desc}
        </p>
    </div>
);

export default function Welcome({ recentPosts }) {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <FrontLayout>
            <Head title="Official Website" />

            <div className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center bg-gray-900">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                                    <circle cx="0.5" cy="0.5" r="0.5" fill="#ef4444" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#dots)" />
                        </svg>
                    </div>

                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
                        <div className={`max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-red-400 text-sm font-bold tracking-wider mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                ASOPONGGA OFFICIAL
                            </div>

                            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                                {t('welcome_title')}
                            </h1>

                            <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-12 max-w-2xl">
                                {t('hero_subtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link
                                    href={route('certificate.verify')}
                                    className="px-8 py-4 md:px-10 md:py-5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl shadow-xl shadow-red-600/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <span>{t('certificate')}</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </Link>
                                <Link
                                    href={route('blog.index')}
                                    className="px-8 py-4 md:px-10 md:py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <span>{t('read_blog')}</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Stats Overlay Bottom */}
                    <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/5 py-6 md:py-10">
                        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <StatCard val={t('stat_members')} label={t('stat_members_label')} delay={100} />
                            <StatCard val={t('stat_years')} label={t('stat_years_label')} delay={200} />
                            <StatCard val={t('stat_awards')} label={t('stat_awards_label')} delay={300} />
                            <div className="hidden md:block">
                                <StatCard val="24/7" label={t('support')} delay={400} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trusted By Block */}
                <div className="bg-white py-12 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.3em] mb-1">{t('trusted_by')}</p>
                    </div>
                </div>

                {/* Services Section */}
                <section className="py-16 md:py-24 bg-gray-50/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-20 space-y-4">
                            <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.3em]">{t('services')}</h2>
                            <p className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                {t('better_way')}
                            </p>
                            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                {t('service_desc')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <ServiceCard
                                title={t('web_dev')}
                                desc={t('web_dev_desc')}
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                            />
                            <ServiceCard
                                title={t('mobile_sol')}
                                desc={t('mobile_sol_desc')}
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
                            />
                            <ServiceCard
                                title={t('consultancy')}
                                desc={t('consultancy_desc')}
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
                            />
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                    {t('why_choose_us')}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                                    {t('why_choose_us_subtitle')}
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{t('excellence')}</h4>
                                            <p className="text-gray-500 text-sm">{t('excellence_desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{t('innovation')}</h4>
                                            <p className="text-gray-500 text-sm">{t('innovation_desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 relative w-full lg:w-auto">
                                <div className="relative z-10 bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 aspect-square flex items-center justify-center p-12">
                                    <svg className="w-32 h-32 text-red-600 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L15.09 8.26l6.91 1l-5 4.87l1.18 6.88l-6.18-3.25l-6.18 3.25l1.18-6.88l-5-4.87l6.91-1L12 2z" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent"></div>
                                </div>
                                {/* Background Shapes */}
                                <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent News Section */}
                {recentPosts && recentPosts.length > 0 && (
                    <section className="bg-gray-50 py-16 md:py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                                <div className="space-y-4">
                                    <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.3em]">{t('blog')}</h2>
                                    <p className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                        {t('latest_news')}
                                    </p>
                                </div>
                                <Link
                                    href={route('blog.index')}
                                    className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                                >
                                    {t('view_all')}
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {recentPosts.map((post) => (
                                    <div key={post.id} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                                        <div className="relative h-64 overflow-hidden">
                                            {post.featured_image ? (
                                                <img
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    src={`/storage/${post.featured_image}`}
                                                    alt={post.title}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                                                    <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-4 py-1.5 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-lg">
                                                    {post.categories?.[0]?.name || 'Article'}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-xs uppercase">
                                                    {post.author?.name?.charAt(0)}
                                                </div>
                                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{post.author?.name}</div>
                                            </div>
                                            <Link href={route('blog.show', post.slug)} className="block group/title">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover/title:text-red-600 transition-colors line-clamp-2 leading-tight">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm line-clamp-3 mb-8 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                            </Link>
                                            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                                <span className="text-xs text-gray-400 font-medium">
                                                    {new Date(post.published_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                                                </span>
                                                <Link
                                                    href={route('blog.show', post.slug)}
                                                    className="text-red-600 font-bold text-sm flex items-center gap-1 group/link"
                                                >
                                                    {t('read_full')}
                                                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Footer Join CTA */}
                <section className="py-16 md:py-24 bg-red-600">
                    <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
                        <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight">
                            {t('cta_title')}
                        </h2>
                        <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto opacity-80 leading-relaxed">
                            {t('cta_subtitle')}
                        </p>
                        <div className="pt-4">
                            <button className="px-10 py-4 md:px-12 md:py-5 bg-white text-red-600 font-extrabold rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 text-base md:text-lg">
                                {t('contact_us')}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </FrontLayout>
    );
}
