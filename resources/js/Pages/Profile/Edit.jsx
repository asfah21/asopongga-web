import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <MainLayout header="Profile">
            <Head title="Profile" />

            <div className="max-w-7xl mx-auto space-y-6">
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 border border-gray-100">
                    <section className="max-w-xl">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Update your account's profile information and email address.
                            </p>
                        </header>
                        <div className="mt-6">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>
                    </section>
                </div>

                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 border border-gray-100">
                    <section className="max-w-xl">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Update Password</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Ensure your account is using a long, random password to stay secure.
                            </p>
                        </header>
                        <div className="mt-6">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>
                    </section>
                </div>

                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 border border-gray-100">
                    <section className="max-w-xl">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Once your account is deleted, all of its resources and data will be permanently deleted.
                            </p>
                        </header>
                        <div className="mt-6">
                            <DeleteUserForm className="max-w-xl" />
                        </div>

                    </section>
                </div>
            </div>
        </MainLayout>
    );
}
