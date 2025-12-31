import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        no_cert: '',
        nama_perusahaan: '',
        nama_direktur: '',
        alamat: '',
        kabupaten: '',
        provinsi: '',
        telp: '',
        fax: '',
        email: '',
        npwp: '',
        jasa: '',
        perdagangan: '',
        klasifikasi: '',
        berlaku: '',
        dari_tanggal: '',
        sampai_tanggal: '',
        ketua: '',
        sekretaris: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('certificates.store'));
    };

    return (
        <MainLayout header="Create Certificate">
            <Head title="Create Certificate" />
            <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-red-600 to-red-800 px-8 py-6">
                    <h3 className="text-xl font-bold text-white">Certificate Form</h3>
                    <p className="text-red-100 text-sm mt-1">Fill in the details to generate a new online certificate.</p>
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
                                placeholder="0001/SRT/ASOPONGGA/XII/2025"
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
                            <TextInput
                                id="alamat"
                                className="mt-1 block w-full"
                                value={data.alamat}
                                maxLength={46}
                                onChange={(e) => setData('alamat', e.target.value)}
                                required
                            />
                            <InputError message={errors.alamat} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="kabupaten" value="Kabupaten/Kota" />
                            <TextInput
                                id="kabupaten"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.kabupaten}
                                onChange={(e) => setData('kabupaten', e.target.value)}
                            />
                            <InputError message={errors.kabupaten} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="provinsi" value="Provinsi" />
                            <TextInput
                                id="provinsi"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.provinsi}
                                onChange={(e) => setData('provinsi', e.target.value)}
                            />
                            <InputError message={errors.provinsi} className="mt-2" />
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

                        {/* <div>
                            <InputLabel htmlFor="klasifikasi" value="Klasifikasi" />
                            <TextInput
                                id="klasifikasi"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.klasifikasi}
                                onChange={(e) => setData('klasifikasi', e.target.value)}
                            />
                            <InputError message={errors.klasifikasi} className="mt-2" />
                        </div> */}

                        <div>
                            <InputLabel htmlFor="klasifikasi" value="Klasifikasi" />

                            <select
                                id="klasifikasi"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.klasifikasi}
                                onChange={(e) => setData('klasifikasi', e.target.value)}
                            >
                                <option value="">-- Pilih Klasifikasi --</option>
                                <option value="A - Nilai Pekerjaan di atas Rp. 1.000.000.000">
                                    A - Nilai Pekerjaan di atas Rp. 1.000.000.000
                                </option>
                                <option value="B - Nilai Pekerjaan di atas Rp. 5.000.000">
                                    B - Nilai Pekerjaan di atas Rp. 5.000.000
                                </option>
                                <option value="C - Nilai Pekerjaan di atas Rp. 1.000.000">
                                    C - Nilai Pekerjaan di atas Rp. 1.000.000
                                </option>
                            </select>

                            <InputError message={errors.klasifikasi} className="mt-2" />
                        </div>

                        {/* Validity Info Section */}
                        <div className="md:col-span-2 border-b border-gray-100 pb-2 mt-4">
                            <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider">Masa Berlaku & Penandatangan</h4>
                        </div>

                        {/* <div>
                            <InputLabel htmlFor="berlaku" value="Berlaku" />
                            <TextInput
                                id="berlaku"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.berlaku}
                                onChange={(e) => setData('berlaku', e.target.value)}
                                placeholder="3 (Tiga) Tahun"
                            />
                            <InputError message={errors.berlaku} className="mt-2" />
                        </div> */}

                        <div>
                            <InputLabel htmlFor="berlaku" value="Berlaku" />

                            <select
                                id="berlaku"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                value={data.berlaku}
                                onChange={(e) => setData('berlaku', e.target.value)}
                            >
                                <option value="">-- Pilih Masa Berlaku --</option>
                                <option value="1 (satu) tahun">1 (satu) tahun</option>
                                <option value="2 (dua) tahun">2 (dua) tahun</option>
                                <option value="3 (tiga) tahun">3 (tiga) tahun</option>
                            </select>

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
                            {processing ? 'Saving...' : 'Generate Certificate'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
