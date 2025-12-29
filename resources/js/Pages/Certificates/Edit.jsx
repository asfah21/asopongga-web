import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Edit({ certificate }) {
    const { data, setData, patch, processing, errors } = useForm({
        no_cert: certificate.no_cert || '',
        nama_perusahaan: certificate.nama_perusahaan || '',
        nama_direktur: certificate.nama_direktur || '',
        alamat: certificate.alamat || '',
        telp: certificate.telp || '',
        fax: certificate.fax || '',
        email: certificate.email || '',
        npwp: certificate.npwp || '',
        jasa: certificate.jasa || '',
        perdagangan: certificate.perdagangan || '',
        klasifikasi: certificate.klasifikasi || '',
        berlaku: certificate.berlaku || '',
        dari_tanggal: certificate.dari_tanggal || '',
        sampai_tanggal: certificate.sampai_tanggal || '',
        ketua: certificate.ketua || '',
        sekretaris: certificate.sekretaris || '',
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('certificates.update', certificate.id));
    };

    return (
        <MainLayout header="Edit Certificate">
            <Head title="Edit Certificate" />
            <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-red-600 to-red-800 px-8 py-6">
                    <h3 className="text-xl font-bold text-white">Edit Certificate: {certificate.no_cert}</h3>
                    <p className="text-red-100 text-sm mt-1">Modify the certificate details below.</p>
                </div>

                <form onSubmit={submit} className="p-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* No Certificate */}
                        <div className="md:col-span-2">
                            <InputLabel htmlFor="no_cert" value="No. Sertifikat" className="text-gray-700 font-semibold mb-1" />
                            <TextInput
                                id="no_cert"
                                type="text"
                                className="mt-1 block w-full bg-gray-50 border-gray-200 focus:bg-white transition-all text-lg font-mono"
                                value={data.no_cert}
                                onChange={(e) => setData('no_cert', e.target.value.replace(/\s+/g, ''))}
                                required
                            />
                            <InputError message={errors.no_cert} className="mt-2" />
                        </div>

                        {/* Company Info Section */}
                        <div className="md:col-span-2 border-b border-gray-100 pb-2 mt-4">
                            <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider">Informasi Perusahaan</h4>
                        </div>

                        <div>
                            <InputLabel htmlFor="nama_perusahaan" value="Nama Perusahaan" />
                            <TextInput
                                id="nama_perusahaan"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.nama_perusahaan}
                                onChange={(e) => setData('nama_perusahaan', e.target.value)}
                                required
                            />
                            <InputError message={errors.nama_perusahaan} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="nama_direktur" value="Nama Direktur" />
                            <TextInput
                                id="nama_direktur"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.nama_direktur}
                                onChange={(e) => setData('nama_direktur', e.target.value)}
                                required
                            />
                            <InputError message={errors.nama_direktur} className="mt-2" />
                        </div>

                        <div className="md:col-span-2">
                            <InputLabel htmlFor="alamat" value="Alamat" />
                            <textarea
                                id="alamat"
                                className="mt-1 block w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm h-24"
                                value={data.alamat}
                                onChange={(e) => setData('alamat', e.target.value)}
                                required
                            />
                            <InputError message={errors.alamat} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="telp" value="Telp" />
                            <TextInput
                                id="telp"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.telp}
                                onChange={(e) => setData('telp', e.target.value)}
                                required
                            />
                            <InputError message={errors.telp} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="fax" value="Fax" />
                            <TextInput
                                id="fax"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.fax}
                                onChange={(e) => setData('fax', e.target.value)}
                            />
                            <InputError message={errors.fax} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="npwp" value="NPWP" />
                            <TextInput
                                id="npwp"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.npwp}
                                onChange={(e) => setData('npwp', e.target.value)}
                                required
                            />
                            <InputError message={errors.npwp} className="mt-2" />
                        </div>

                        {/* Classification Info Section */}
                        <div className="md:col-span-2 border-b border-gray-100 pb-2 mt-4">
                            <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider">Bidang & Klasifikasi</h4>
                        </div>

                        <div>
                            <InputLabel htmlFor="jasa" value="Jasa" />
                            <TextInput
                                id="jasa"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.jasa}
                                onChange={(e) => setData('jasa', e.target.value)}
                            />
                            <InputError message={errors.jasa} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="perdagangan" value="Perdagangan" />
                            <TextInput
                                id="perdagangan"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.perdagangan}
                                onChange={(e) => setData('perdagangan', e.target.value)}
                            />
                            <InputError message={errors.perdagangan} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="klasifikasi" value="Klasifikasi" />
                            <TextInput
                                id="klasifikasi"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.klasifikasi}
                                onChange={(e) => setData('klasifikasi', e.target.value)}
                            />
                            <InputError message={errors.klasifikasi} className="mt-2" />
                        </div>

                        {/* Validity Info Section */}
                        <div className="md:col-span-2 border-b border-gray-100 pb-2 mt-4">
                            <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider">Masa Berlaku & Penandatangan</h4>
                        </div>

                        <div>
                            <InputLabel htmlFor="berlaku" value="Berlaku" />
                            <TextInput
                                id="berlaku"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.berlaku}
                                onChange={(e) => setData('berlaku', e.target.value)}
                            />
                            <InputError message={errors.berlaku} className="mt-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <InputLabel htmlFor="dari_tanggal" value="Dari Tanggal" />
                                <TextInput
                                    id="dari_tanggal"
                                    type="date"
                                    className="mt-1 block w-full"
                                    value={data.dari_tanggal}
                                    onChange={(e) => setData('dari_tanggal', e.target.value)}
                                />
                                <InputError message={errors.dari_tanggal} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="sampai_tanggal" value="Sampai Tanggal" />
                                <TextInput
                                    id="sampai_tanggal"
                                    type="date"
                                    className="mt-1 block w-full"
                                    value={data.sampai_tanggal}
                                    onChange={(e) => setData('sampai_tanggal', e.target.value)}
                                />
                                <InputError message={errors.sampai_tanggal} className="mt-2" />
                            </div>
                        </div>

                        <div>
                            <InputLabel htmlFor="ketua" value="Ketua" />
                            <TextInput
                                id="ketua"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.ketua}
                                onChange={(e) => setData('ketua', e.target.value)}
                            />
                            <InputError message={errors.ketua} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="sekretaris" value="Sekretaris" />
                            <TextInput
                                id="sekretaris"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.sekretaris}
                                onChange={(e) => setData('sekretaris', e.target.value)}
                            />
                            <InputError message={errors.sekretaris} className="mt-2" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4 border-t border-gray-100 pt-8">
                        <Link href={route('certificates.index')} className="text-gray-500 hover:text-gray-800 font-medium text-sm transition-colors">Cancel</Link>
                        <PrimaryButton disabled={processing} className="bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200 px-8 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                            {processing ? 'Saving Changes...' : 'Update Certificate'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
