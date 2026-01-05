import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en');

    useEffect(() => {
        localStorage.setItem('locale', locale);
        document.documentElement.lang = locale;
    }, [locale]);

    const t = (key) => {
        return translations[locale][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ locale, language: locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
