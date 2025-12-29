import React from 'react';
import { Link } from '@inertiajs/react';
import { useLanguage } from '@/Contexts/LanguageContext';
import Dropdown from '@/Components/Dropdown';

export default function FrontLayout({ children, title }) {
    const { t, locale, setLocale } = useLanguage();

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
                                <div className="text-gray-900 font-bold text-2xl tracking-tight">ASOPONGGA<span className="text-red-600">WEB</span></div>
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
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            {/* Language Switcher */}
                            <div className="relative">
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
                            <Link href={route('login')} className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors">
                                {t('admin_login')}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Header (Optional) */}
            {title && (
                <div className="bg-gray-900 shadow-sm border-b border-gray-800">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                            {title}
                        </h1>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className={`${title ? '' : 'pt-10'}`}>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 border-t border-gray-200 mt-20">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                        <div className="flex space-x-6 md:order-2">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                            &copy; {new Date().getFullYear()} Asopongga Web. {t('rights')}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
