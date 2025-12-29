import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import MainMenu from '@/Components/MainMenu';
import Dropdown from '@/Components/Dropdown';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function MainLayout({ children, header }) {
    const { auth, flash } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 transition duration-300 transform md:translate-x-0 md:static md:inset-0 flex flex-col h-full ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between h-16 px-6 bg-gray-950 shadow-sm z-10 shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="text-white font-bold text-2xl tracking-tight">ASOPONGGA<span className="text-red-600">WEB</span></div>
                    </Link>
                    <button
                        className="md:hidden text-gray-400 hover:text-white"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <MainMenu className="flex-1 overflow-y-auto" />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Navbar */}
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4 md:px-8 flex-shrink-0 shadow-sm z-10">
                    <div className="flex items-center">
                        <button
                            className="mr-4 text-gray-500 md:hidden focus:outline-none"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <div className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight truncate">
                            {header}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="ml-3 relative italic">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="flex items-center group text-sm font-medium text-gray-600 hover:text-red-600 focus:outline-none transition duration-150 ease-in-out">
                                        <span className="mr-2 font-semibold hidden sm:inline">{auth.user.name}</span>
                                        <svg className="h-4 w-4 fill-current text-gray-400 group-hover:text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div className="block px-4 py-2 text-xs text-gray-400">
                                        Manage Account
                                    </div>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <div className="border-t border-gray-100"></div>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                {/* Flash Messages */}
                {flash && flash.success && (
                    <div className="px-4 md:px-8 mt-6">
                        <div className="bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-md flex items-center justify-between">
                            <span>{flash.success}</span>
                            <button className="text-white hover:text-emerald-100" onClick={(e) => e.currentTarget.parentElement.remove()}>×</button>
                        </div>
                    </div>
                )}

                {/* Content Scrollable Area */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-8 scroll-smooth">
                    {children}
                </main>
            </div>
        </div>
    );
}


