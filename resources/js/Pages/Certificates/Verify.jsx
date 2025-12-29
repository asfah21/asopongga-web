import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import { useLanguage } from '@/Contexts/LanguageContext';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors">{question}</span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

export default function Verify({ certificate, searched, filters }) {
    const { t } = useLanguage();
    const { data, setData, get, processing } = useForm({
        no_cert: filters.no_cert || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('certificate.verify'), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <FrontLayout title={t('certificate_verification_title') || 'Certificate'}>
            <Head title="Verify Certificate" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10 md:space-y-16">
                {/* Main Card Container */}
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
                    {/* Search Header */}
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 px-6 md:px-8 py-10 md:py-16 text-center relative overflow-hidden">
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{t('search_cert_title')}</h2>
                            <p className="text-red-100/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                                {t('search_cert_subtitle')}
                            </p>

                            <form onSubmit={handleSearch} className="mt-8 md:mt-12 max-w-xl mx-auto">
                                <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                                    <div className="flex-1 relative">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full pl-14 pr-5 py-4 bg-transparent border-0 focus:ring-0 text-white placeholder-red-200/50 text-base md:text-lg font-mono tracking-wider"
                                            placeholder="001/SFK/ASOPONGGA/...."
                                            value={data.no_cert}
                                            onChange={(e) => setData('no_cert', e.target.value.replace(/\s+/g, ''))}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 group"
                                    >
                                        {processing ? (
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : (
                                            <>
                                                <span>{t('verify_now')}</span>
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Result Area */}
                    <div className="p-6 md:p-16 min-h-[250px] md:min-h-[300px] flex items-center justify-center bg-gray-50/30">
                        {!searched && (
                            <div className="text-center group">
                                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                                    <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">{t('ready_to_verify')}</h3>
                                <p className="text-gray-500 text-base md:text-lg">{t('ready_to_verify_desc')}</p>
                            </div>
                        )}

                        {searched && certificate && (
                            <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-700">
                                {/* Success Header */}
                                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 md:p-6 mb-8 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
                                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-emerald-900">{t('valid_cert')}</h3>
                                        <p className="text-emerald-700 text-sm">{t('valid_cert_desc')}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    <div className="space-y-8">
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{t('company_name')}</label>
                                            <p className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">{certificate.nama_perusahaan}</p>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{t('director')}</label>
                                            <p className="text-lg md:text-xl text-gray-700 font-semibold">{certificate.nama_direktur}</p>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{t('business_classification')}</label>
                                            <p className="text-gray-700 font-medium">{certificate.jasa || '-'} {certificate.perdagangan ? `/ ${certificate.perdagangan}` : ''}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4 md:space-y-6">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-4 gap-1 sm:gap-4">
                                            <span className="text-gray-500 text-xs md:text-sm font-medium">{t('cert_no')}</span>
                                            <span className="font-mono font-bold text-gray-900 break-all text-sm md:text-base">{certificate.no_cert}</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-4 gap-1 sm:gap-4">
                                            <span className="text-gray-500 text-xs md:text-sm font-medium">{t('valid_from')}</span>
                                            <span className="text-gray-900 font-bold text-sm md:text-base">{certificate.dari_tanggal ? new Date(certificate.dari_tanggal).toLocaleDateString() : '-'}</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-4 gap-1 sm:gap-4">
                                            <span className="text-gray-500 text-xs md:text-sm font-medium">{t('expiry_date')}</span>
                                            <span className="text-red-600 font-bold text-sm md:text-base">{certificate.sampai_tanggal ? new Date(certificate.sampai_tanggal).toLocaleDateString() : '-'}</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                                            <span className="text-gray-500 text-xs md:text-sm font-medium">{t('status')}</span>
                                            <span className="inline-flex w-fit px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-xl text-[10px] md:text-xs font-extrabold tracking-widest uppercase">{t('active')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {searched && !certificate && (
                            <div className="text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                    <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">{t('cert_not_found')}</h3>
                                <p className="text-gray-500 text-base md:text-lg mb-8">{t('cert_not_found_desc')} <span className="font-mono font-bold text-red-600">"{data.no_cert}"</span></p>
                                <button
                                    onClick={() => setData('no_cert', '')}
                                    className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
                                >
                                    {t('try_again')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Features Section (3 Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pt-4 md:pt-8">
                    <div className="text-center space-y-4 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-500">
                        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-extrabold text-gray-900">{t('official_data')}</h4>
                        <p className="text-gray-500 leading-relaxed">{t('official_data_desc')}</p>
                    </div>
                    <div className="text-center space-y-4 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-500">
                        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-extrabold text-gray-900">{t('realtime_check')}</h4>
                        <p className="text-gray-500 leading-relaxed">{t('realtime_check_desc')}</p>
                    </div>
                    <div className="text-center space-y-4 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-500">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-extrabold text-gray-900">{t('support')}</h4>
                        <p className="text-gray-500 leading-relaxed">{t('support_desc')}</p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-[2rem] p-6 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{t('faq_title')}</h3>
                            <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
                        </div>
                        <div className="divide-y divide-gray-100">
                            <FAQItem question={t('faq_1_q')} answer={t('faq_1_a')} />
                            <FAQItem question={t('faq_2_q')} answer={t('faq_2_a')} />
                            <FAQItem question={t('faq_3_q')} answer={t('faq_3_a')} />
                        </div>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}
