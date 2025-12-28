import { Link } from '@inertiajs/react';
import React from 'react';

const IconDashboard = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>);
const IconPost = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>);
const IconCategory = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>);

export default function MainMenu({ className }) {
    return (
        <div className={className}>
            <div className="py-4 font-medium">
                <Link className={`flex items-center px-6 py-3 transition-colors ${route().current('dashboard') ? 'bg-brand-red text-white shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`} href={route('dashboard')}>
                    <IconDashboard className={`w-5 h-5 mr-3 fill-current ${route().current('dashboard') ? 'text-brand-gold' : ''}`} />
                    <div>Dashboard</div>
                </Link>
                <Link className={`flex items-center px-6 py-3 transition-colors ${route().current('posts.*') ? 'bg-brand-red text-white shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`} href={route('posts.index')}>
                    <IconPost className={`w-5 h-5 mr-3 fill-current ${route().current('posts.*') ? 'text-brand-gold' : ''}`} />
                    <div>Posts</div>
                </Link>
                <Link className={`flex items-center px-6 py-3 transition-colors ${route().current('categories.*') ? 'bg-brand-red text-white shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`} href={route('categories.index')}>
                    <IconCategory className={`w-5 h-5 mr-3 fill-current ${route().current('categories.*') ? 'text-brand-gold' : ''}`} />
                    <div>Categories</div>
                </Link>
            </div>
        </div>
    );
}
