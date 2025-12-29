import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import MainMenu from '@/Components/MainMenu';
import Dropdown from '@/Components/Dropdown';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function MainLayout({ children, header }) {
    const { auth, flash } = usePage().props;

    return (
        <div className="flex min-h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-gray-900 shadow-xl overflow-y-auto">
                <div className="flex items-center justify-center h-16 bg-gray-950 shadow-sm z-10 shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="text-white font-bold text-2xl tracking-tight">ASOPONGGA<span className="text-red-600">WEB</span></div>
                    </Link>
                </div>
                <MainMenu className="flex-1" />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Navbar */}
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-8 flex-shrink-0 shadow-sm z-10">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-gray-800 tracking-tight">
                            {header}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="ml-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="flex items-center group text-sm font-medium text-gray-600 hover:text-red-600 focus:outline-none transition duration-150 ease-in-out">
                                        <span className="mr-2 font-semibold">{auth.user.name}</span>
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
                    <div className="px-8 mt-6">
                        <div className="bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-md flex items-center justify-between">
                            <span>{flash.success}</span>
                            <button className="text-white hover:text-emerald-100" onClick={(e) => e.target.parentElement.remove()}>×</button>
                        </div>
                    </div>
                )}

                {/* Content Scrollable Area */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-8 scroll-smooth">
                    {children}
                </main>
            </div>
        </div>
    );
}
