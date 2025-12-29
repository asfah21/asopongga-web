import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Show({ certificate }) {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const viewer = document.getElementById('certificate-viewer');
            if (viewer) {
                const padding = 64;
                const availableWidth = viewer.offsetWidth - padding;
                const targetWidth = 1122; // 297mm approx px
                const newScale = Math.min(availableWidth / targetWidth, 1);
                setScale(newScale);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        // Initial delay to ensure DOM is settled
        const timer = setTimeout(handleResize, 100);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    const viewerHeight = scale < 1 ? `calc(${210 * scale}mm + 4rem)` : 'auto';

    return (
        <MainLayout header="Certificate Preview">
            <Head title={`Certificate - ${certificate.no_cert}`} />

            <div className="max-w-[1200px] mx-auto mb-6 flex flex-col md:flex-row justify-between items-start md:items-center px-4 print:hidden gap-6">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-gray-800">Print Settings</h2>
                    <p className="text-gray-500 text-xs italic mt-1 font-serif">
                        Format: A4 Landscape. Use "Background Graphics" option while printing.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button
                        onClick={() => window.print()}
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 text-white font-black rounded-lg hover:bg-emerald-700 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        PRINT CERTIFICATE
                    </button>
                    <Link
                        href={route('certificates.edit', certificate.id)}
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-red-600 text-white font-black rounded-lg hover:bg-red-700 transition-all shadow-lg hover:-translate-y-1 active:translate-y-0"
                    >
                        EDIT CONTENT
                    </Link>
                </div>
            </div>

            {/* Viewer Container */}
            <div id="certificate-viewer" className="w-full flex justify-center items-start py-10 bg-[#e5e5e5] min-h-[500px] overflow-hidden print:bg-white print:p-0" style={{ height: viewerHeight }}>
                <div
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: 'top center',
                        width: '297mm',
                        height: '210mm',
                    }}
                    className="print:scale-100 transition-transform duration-500 ease-in-out print:transform-none"
                >
                    <div
                        id="certificate-paper"
                        className="certificate-paper relative bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] print:shadow-none mx-auto overflow-hidden p-0 m-0"
                        style={{ width: '297mm', height: '210mm' }}
                    >
                        {/* INLINED SVG BACKGROUND - Only for Frame/Watermark */}
                        <div className="absolute inset-0 z-0">
                            <svg
                                viewBox="0 0 29700 21000"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full block"
                                preserveAspectRatio="xMidYMid slice"
                            >
                                {/* SVG DEFS (removed goldGradient as it's not used in SVG anymore) */}

                                {/* Base Frame */}
                                <rect width="29700" height="21000" fill="#661E1C" />
                                <rect x="600" y="600" width="28500" height="19800" fill="#FCF5EF" />

                                {/* Decorative Lines */}
                                <rect x="800" y="800" width="28100" height="19400" fill="none" stroke="#D4A359" strokeWidth="150" strokeOpacity="0.5" />
                                <rect x="1000" y="1000" width="27700" height="19000" fill="none" stroke="#661E1C" strokeWidth="50" />

                                {/* Corners Ornaments (Reconstructed from professional designs) */}
                                <g fill="#D4A359">
                                    <path d="M600 600h3000v600H1200v1800H600V600z" opacity="0.8" />
                                    <path d="M29100 600h-3000v600h2400v1800h600V600z" opacity="0.8" />
                                    <path d="M600 20400h3000v-600H1200v-1800H600v2400z" opacity="0.8" />
                                    <path d="M29100 20400h-3000v-600h2400v-1800h600v2400z" opacity="0.8" />
                                </g>

                                {/* Watermark Logo */}
                                <text x="50%" y="54%" textAnchor="middle" fill="#661E1C" fillOpacity="0.04" fontSize="3000" fontWeight="900" transform="rotate(-15, 14850, 11000)" style={{ fontFamily: 'serif' }}>
                                    ASOPONGGA
                                </text>
                            </svg>
                        </div>

                        {/* HTML CONTENT LAYER - Placed over SVG for best print reliability */}
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-[4.5rem] px-32 select-none">

                            {/* Header Section */}
                            <div className="text-center w-full mt-4">
                                <h1 className="text-[3.8rem] font-serif font-black text-[#661E1C] uppercase tracking-[0.35em] leading-tight">
                                    Sertifikat Keanggotaan
                                </h1>
                                <div className="h-1.5 w-80 bg-gradient-to-r from-transparent via-[#D4A359] to-transparent mx-auto mt-4 mb-4"></div>
                                <p className="text-[#2B2A29] font-mono text-[1.4rem] font-bold tracking-[0.3em] uppercase opacity-90">
                                    No: <span className="text-[#842422]">{certificate.no_cert}</span>
                                </p>
                            </div>

                            {/* Recipient Section */}
                            <div className="text-center w-full">
                                <p className="text-[1.8rem] italic text-[#2B2A29]/80 font-serif mb-2">Diberikan kepada:</p>
                                <div className="py-2 inline-block relative">
                                    <h2 className="text-[4.5rem] font-serif font-bold text-[#191A1A] tracking-tight leading-none mb-4">
                                        {certificate.nama_perusahaan}
                                    </h2>
                                    <div className="flex items-center justify-center gap-8 w-full max-w-4xl mx-auto">
                                        <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent to-[#D4A359]/40"></div>
                                        <p className="text-[1.6rem] text-[#842422] font-black tracking-[0.2em] uppercase whitespace-nowrap">
                                            NPWP: {certificate.npwp}
                                        </p>
                                        <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent to-[#D4A359]/40"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Description */}
                            <div className="text-center max-w-5xl flex-grow flex flex-col justify-center gap-6">
                                <p className="text-[1.5rem] text-[#2B2A29] leading-relaxed italic font-serif opacity-85">
                                    Telah terdaftar sebagai anggota resmi <span className="font-extrabold text-[#661E1C] not-italic underline decoration-[#D4A359] decoration-2 underline-offset-8">ASOPONGGA</span>
                                    <br />Asosiasi Pengusaha Komoditi Unggulan
                                </p>

                                <div className="bg-[#661E1C]/5 py-4 px-12 rounded-2xl border border-[#D4A359]/20 inline-block mx-auto">
                                    <span className="text-[#842422]/70 text-[1rem] uppercase font-serif font-black tracking-[0.4em] mb-1 block">Klasifikasi Bidang Usaha</span>
                                    <p className="font-black text-[2.2rem] text-[#191A1A] uppercase tracking-wider leading-none">
                                        {certificate.jasa} {certificate.perdagangan ? `& ${certificate.perdagangan}` : ''}
                                    </p>
                                </div>
                            </div>

                            {/* Footer Section */}
                            <div className="w-full flex justify-between items-end px-4 mt-6">
                                <div className="text-center w-64">
                                    <p className="text-[1rem] font-bold text-[#842422] mb-20 uppercase tracking-[0.3em] opacity-80">Sekretaris Umum</p>
                                    <div className="border-t-2 border-[#D4A359] pt-3">
                                        <p className="font-black text-[#191A1A] text-[1.4rem] uppercase tracking-tighter">
                                            {certificate.sekretaris}
                                        </p>
                                    </div>
                                </div>

                                {/* Golden Seal (HTML/CSS Version) */}
                                <div className="flex flex-col items-center gap-4 -mb-8">
                                    <div className="relative w-40 h-40">
                                        <div className="absolute inset-0 border-[4px] border-double border-[#D4A359] rounded-full animate-[spin_20s_linear_infinite] opacity-50"></div>
                                        <div className="absolute inset-[10px] border-2 border-[#E5B46C] rounded-full shadow-inner flex flex-col items-center justify-center bg-[#FCF5EF]/50 backdrop-blur-[2px]">
                                            <p className="text-[10px] font-black text-[#661E1C] uppercase tracking-widest leading-none mb-1">ASOPONGGA</p>
                                            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#D4A359] my-1" fill="currentColor">
                                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                            </svg>
                                            <p className="text-[9px] font-bold text-[#2B2A29] uppercase tracking-tighter">OFFICIAL SEAL</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#661E1C] text-white text-[12px] font-mono font-bold px-4 py-1.5 rounded-lg tracking-widest shadow-md">
                                        VERIFIED 2025
                                    </div>
                                </div>

                                <div className="text-center w-64">
                                    <p className="text-[1rem] font-bold text-[#842422] mb-20 uppercase tracking-[0.3em] opacity-80">Ketua Umum</p>
                                    <div className="border-t-2 border-[#D4A359] pt-3 px-2">
                                        <p className="font-black text-[#191A1A] text-[1.4rem] uppercase tracking-tighter">
                                            {certificate.ketua}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Validity Info */}
                            <div className="w-full text-right mt-6 opacity-60">
                                <p className="text-[1rem] font-mono font-bold text-[#2B2A29]">
                                    Berlaku s/d: <span className="text-[#842422]">{certificate.sampai_tanggal ? new Date(certificate.sampai_tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    @page {
                        size: A4 landscape;
                        margin: 0;
                    }
                    body {
                        margin: 0 !important;
                        -webkit-print-color-adjust: exact;
                        background: white !important;
                    }
                    /* Hide everything */
                    body * {
                        visibility: hidden !important;
                    }
                    /* Show only certificate viewer and its children */
                    #certificate-viewer,
                    #certificate-viewer *,
                    .certificate-paper,
                    .certificate-paper * {
                        visibility: visible !important;
                    }
                    /* Force the viewer to take the full first page */
                    #certificate-viewer {
                        position: fixed !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 297mm !important;
                        height: 210mm !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        z-index: 99999 !important;
                        display: block !important;
                    }
                    .certificate-paper {
                        position: absolute !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 297mm !important;
                        height: 210mm !important;
                        margin: 0 !important;
                        box-shadow: none !important;
                        transform: none !important;
                    }
                }
            `}} />
        </MainLayout>
    );
}