import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

type Language = 'en' | 'fr' | 'ar';
type Theme = 'light' | 'dark';

interface AppContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    theme: Theme;
    toggleTheme: () => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'en';
    });

    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        return (saved as Theme) || 'light';
    });

    const isRTL = language === 'ar';

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language, isRTL]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    const t = (path: string) => {
        const keys = path.split('.');
        let current: any = translations[language];
        for (const key of keys) {
            if (current[key] === undefined) return path;
            current = current[key];
        }
        return current;
    };

    return (
        <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t, isRTL }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};
