import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { useLanguage } from '@/Contexts/LanguageContext';
import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function FrontLayout({ children, title }) {
    const { t, locale, setLocale } = useLanguage();
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const languages = [
        { code: 'en', label: 'English', short: 'EN', flag: 'https://flagcdn.com/w40/us.png' },
        { code: 'id', label: 'Indonesia', short: 'ID', flag: 'https://flagcdn.com/w40/id.png' },
        { code: 'zh', label: '中文', short: 'ZH', flag: 'https://flagcdn.com/w40/cn.png' },
    ];

    const currentLanguage = languages.find(lang => lang.code === locale);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            {/* Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50 border-t-4 border-red-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex">
                            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                                <div className="text-gray-900 font-bold text-xl md:text-2xl tracking-tight">ASOPONGGA<span className="text-red-600">WEB</span></div>
                            </Link>
                            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                                <Link
                                    href="/"
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out ${route().current('home') ? 'border-red-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}
                                >
                                    {t('home')}
                                </Link>
                                <Link
                                    href={route('blog.index')}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out ${route().current('blog.*') ? 'border-red-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}
                                >
                                    {t('blog')}
                                </Link>
                                <Link
                                    href={route('certificate.verify')}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out ${route().current('certificate.verify') ? 'border-red-600 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}
                                >
                                    {t('certificate')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            {/* Language Switcher */}
                            <div className="hidden sm:block relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 group text-nowrap ">
                                            <img
                                                src={currentLanguage?.flag}
                                                alt={currentLanguage?.short}
                                                className="w-5 h-3.5 object-cover rounded-sm shadow-sm grayscale-[0.2] group-hover:grayscale-0 transition-all"
                                            />
                                            <span className="font-bold">{currentLanguage?.short}</span>
                                            <svg className="ml-1 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => setLocale(lang.code)}
                                                className={`w-full text-left px-4 py-2.5 text-sm leading-5 flex items-center gap-3 transition duration-150 ease-in-out ${locale === lang.code ? 'bg-red-50 text-red-700 font-semibold' : 'text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100'}`}
                                            >
                                                <img
                                                    src={lang.flag}
                                                    alt={lang.label}
                                                    className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                                                />
                                                {lang.label}
                                            </button>
                                        ))}
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                            <Link href={route('login')} className="hidden sm:block text-sm font-medium text-gray-500 hover:text-red-600 transition-colors">
                                {t('admin_login')}
                            </Link>

                            {/* Hamburger Menu */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${showingNavigationDropdown ? 'block' : 'hidden'} sm:hidden bg-white border-b border-gray-100`}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href="/" active={route().current('home')}>
                            {t('home')}
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('blog.index')} active={route().current('blog.*')}>
                            {t('blog')}
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('certificate.verify')} active={route().current('certificate.verify')}>
                            {t('certificate')}
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('login')}>
                            {t('admin_login')}
                        </ResponsiveNavLink>
                    </div>

                    {/* Mobile Language Switcher */}
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                            {t('select_language')}
                        </div>
                        <div className="flex flex-wrap gap-2 px-4 pb-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLocale(lang.code)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${locale === lang.code ? 'bg-red-50 border-red-200 text-red-700' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}`}
                                >
                                    <img src={lang.flag} alt={lang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                                    <span className="text-xs font-bold">{lang.short}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Header (Optional) */}
            {title && (
                <div className="bg-gray-900 shadow-sm border-b border-gray-800">
                    <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            {title}
                        </h1>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className={`${title || route().current('home') ? '' : 'pt-10'}`}>
                {children}
            </main>

            {/* Premium Footer */}
            <footer className="bg-gray-900 text-gray-400 mt-20 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                        {/* Brand Column */}
                        <div className="space-y-6">
                            <Link href="/" className="inline-block">
                                <div className="text-white font-bold text-2xl tracking-tight">
                                    ASOPONGGA<span className="text-red-600">WEB</span>
                                </div>
                            </Link>
                            <p className="text-sm leading-relaxed max-w-xs">
                                {t('about_desc')}
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 group">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 group">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.315 2c2.43 0 2.784.012 3.855.06 1.061.044 1.787.209 2.427.458a4.902 4.902 0 011.765 1.148 4.902 4.902 0 011.148 1.765c.249.64.414 1.366.457 2.427.05 1.071.06 1.425.06 3.855s-.01 2.784-.06 3.855c-.043 1.061-.208 1.787-.457 2.427a4.902 4.902 0 01-1.148 1.765 4.902 4.902 0 01-1.765 1.148c-.64.249-1.366.414-2.427.457-1.071.05-1.425.06-3.855.06s-2.784-.01-3.855-.06c-1.061-.043-1.787-.208-2.427-.457a4.902 4.902 0 01-1.765-1.148 4.902 4.902 0 01-1.148-1.765c-.249-.64-.414-1.366-.457-2.427-.05-1.071-.06-1.425-.06-3.855s.01-2.784.06-3.855c.044-1.061.209-1.787.458-2.427a4.902 4.902 0 011.148-1.765 4.902 4.902 0 011.765-1.148c.64-.249 1.366-.414 2.427-.457 1.071-.05 1.425-.06 3.855-.06zm0 2.25c-2.413 0-2.7.01-3.65.053-.889.041-1.373.19-1.695.315-.426.165-.73.362-1.05.682s-.517.624-.682 1.05c-.125.322-.274.806-.315 1.695-.043.95-.053 1.237-.053 3.65s.01 2.7.053 3.65c.041.889.19 1.373.315 1.695.165.426.362.73.682 1.05s.624.517 1.05.682c.322.125.806.274 1.695.315.95.043 1.237.053 3.65.053s2.7-.01 3.65-.053c.889-.041 1.373-.19 1.695-.315.426-.165.73-.362 1.05-.682s.517-.624.682-1.05c.125-.322.274-.806.315-1.695.043-.95.053-1.237.053-3.65s-.01-2.7-.053-3.65c-.041-.889-.19-1.373-.315-1.695-.165-.426-.362-.73-.682-1.05s-.624-.517-1.05-.682c-.322-.125-.806-.274-1.695-.315-.95-.043-1.237-.053-3.65-.053zm0 3c2.485 0 4.5 2.015 4.5 4.5S14.799 16 12.315 16 7.815 13.985 7.815 11.5 9.831 7 12.315 7zm0 2.25c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25 2.25-1.007 2.25-2.25-1.007-2.25-2.25-2.25zm5.176-1.576c-.445 0-.806.361-.806.806s.361.806.806.806.806-.361.806-.806-.361-.806-.806-.806z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 group">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="space-y-6">
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs">
                                {t('quick_links')}
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/" className="text-sm hover:text-red-600 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600/20 group-hover:bg-red-600 transition-colors"></span>
                                        {t('home')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('blog.index')} className="text-sm hover:text-red-600 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600/20 group-hover:bg-red-600 transition-colors"></span>
                                        {t('blog')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('certificate.verify')} className="text-sm hover:text-red-600 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600/20 group-hover:bg-red-600 transition-colors"></span>
                                        {t('certificate')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('login')} className="text-sm hover:text-red-600 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600/20 group-hover:bg-red-600 transition-colors"></span>
                                        {t('admin_login')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="space-y-6">
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs">
                                {t('contact_info')}
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm leading-relaxed">
                                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Jl. Poros Pomalaa, Kel. Pelambua, Kec. Pomalaa, Kab. Kolaka, Sulawesi Tenggara
                                </li>
                                <li className="flex gap-3 text-sm">
                                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    info@asopongga.com
                                </li>
                                <li className="flex gap-3 text-sm">
                                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +62 853-2688-8858
                                </li>
                            </ul>
                        </div>

                        {/* Legal Section */}
                        <div className="space-y-6">
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs">
                                {t('legal')}
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-sm hover:text-red-600 transition-colors">
                                        {t('privacy_policy')}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:text-red-600 transition-colors">
                                        {t('terms_conditions')}
                                    </a>
                                </li>
                                <li className="pt-4">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-2">{t('official_verified') || 'Official Platform'}</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-xs font-medium text-gray-300">System Online</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} ASOPONGGA<span className="text-red-600">WEB</span>. {t('rights')}
                        </p>
                        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
                            <span className="text-white/20">Secure Platform</span>
                            <span className="text-white/20">ISO 27001 Certified</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
