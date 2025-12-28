import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-indigo-900 pt-6 sm:pt-0">
            <div>
                <Link href="/">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="text-white font-bold text-3xl tracking-tight">Company<span className="text-indigo-400">Profile</span></div>
                    </div>
                </Link>
            </div>

            <div className="w-full overflow-hidden bg-white px-6 py-8 shadow-2xl sm:max-w-md sm:rounded-xl border border-gray-100">
                {children}
            </div>

            <div className="mt-8 text-indigo-200 text-sm">
                &copy; {new Date().getFullYear()} Asopongga Web. All rights reserved.
            </div>
        </div>
    );
}
