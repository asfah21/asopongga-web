import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Show({ certificate }) {
    return (
        <MainLayout header="Certificate Preview">
            <Head title={`Certificate - ${certificate.no_cert}`} />

            <div className="max-w-4xl mx-auto mb-8 flex justify-end gap-4 print:hidden">
                <button
                    onClick={() => window.print()}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print Certificate
                </button>
                <Link
                    href={route('certificates.edit', certificate.id)}
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                    Edit Details
                </Link>
            </div>

            {/* Certificate Paper */}
            <div className="certificate-paper max-w-4xl mx-auto bg-white shadow-2xl border-[16px] border-double border-red-900 p-12 relative overflow-hidden print:shadow-none print:border-red-900 print:m-0">
                {/* Background Pattern / Watermark (CSS only) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#991b1b 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                <div className="relative border-2 border-red-200 p-8 h-full">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-serif font-bold text-red-900 uppercase tracking-widest mb-2">Sertifikat Keanggotaan</h1>
                        <div className="h-1 w-48 bg-red-800 mx-auto mb-4"></div>
                        <p className="text-gray-600 font-mono text-lg">Nomor: {certificate.no_cert}</p>
                    </div>

                    {/* Main Content */}
                    <div className="text-center space-y-8 mb-16">
                        <p className="text-xl italic text-gray-700">Diberikan kepada:</p>

                        <div>
                            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-2">{certificate.nama_perusahaan}</h2>
                            <p className="text-xl text-red-800 font-semibold underline decoration-red-200 underline-offset-8">NPWP: {certificate.npwp}</p>
                        </div>

                        <div className="max-w-2xl mx-auto text-gray-700 leading-relaxed italic">
                            <p>Telah terdaftar sebagai anggota resmi ASOPONGGA (Asosiasi Pengusaha Komoditi Unggulan) dengan klasifikasi bidang usaha:</p>
                            <p className="mt-4 font-bold not-italic text-lg text-gray-900">
                                {certificate.jasa} {certificate.perdagangan ? `& ${certificate.perdagangan}` : ''}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 text-left max-w-2xl mx-auto bg-red-50 p-6 rounded-lg border border-red-100">
                            <div>
                                <p className="text-xs uppercase text-red-800 font-bold mb-1">Pimpinan / Direktur</p>
                                <p className="text-gray-900 font-semibold">{certificate.nama_direktur}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase text-red-800 font-bold mb-1">Klasifikasi</p>
                                <p className="text-gray-900 font-semibold">{certificate.klasifikasi || '-'}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-xs uppercase text-red-800 font-bold mb-1">Alamat Kantor</p>
                                <p className="text-gray-900 text-sm">{certificate.alamat}</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer / Signatures */}
                    <div className="flex justify-between items-end px-12">
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-16">Sekretaris Umum</p>
                            <div className="border-t border-gray-400 pt-2 w-48">
                                <p className="font-bold text-gray-900 uppercase">{certificate.sekretaris}</p>
                            </div>
                        </div>

                        <div className="text-center flex flex-col items-center">
                            <div className="mb-4">
                                {/* Placeholder for QR Code / Stamp */}
                                <div className="w-24 h-24 border-2 border-red-200 rounded-lg flex items-center justify-center bg-gray-50 text-[10px] text-gray-400 text-center p-2 leading-tight">
                                    Official Digital Stamp
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 italic">Berlaku s/d: {certificate.sampai_tanggal ? new Date(certificate.sampai_tanggal).toLocaleDateString() : '-'}</p>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-16">Ketua Umum</p>
                            <div className="border-t border-gray-400 pt-2 w-48">
                                <p className="font-bold text-gray-900 uppercase">{certificate.ketua}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-red-900 opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-red-900 opacity-20"></div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    body * { visibility: hidden; }
                    .certificate-paper, .certificate-paper * { visibility: visible; }
                    .certificate-paper { 
                        position: absolute; 
                        left: 0; 
                        top: 0; 
                        width: 100%;
                        margin: 0;
                        padding: 2rem;
                        border-width: 10px;
                    }
                }
            `}} />
        </MainLayout>
    );
}
