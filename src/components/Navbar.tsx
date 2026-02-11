import { motion } from 'framer-motion';
import { Mail, Linkedin, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

export const Navbar = () => {
    const { t, language, setLanguage, theme, toggleTheme } = useAppContext();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['projects', 'skills', 'experience', 'education'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
            if (window.scrollY < 100) setActiveSection('hero');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
                isScrolled ? "bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ scale: 1.02 }}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
                >
                    Sif Yacine
                </motion.div>

                <div className="hidden lg:flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                    {['Projects', 'Skills', 'Experience', 'Education'].map((item) => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative",
                                    isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl -z-10 shadow-sm border border-gray-100 dark:border-gray-800"
                                    />
                                )}
                                {t(`nav.${id}`)}
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center space-x-2">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    </button>

                    {/* Language Switcher */}
                    <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1 gap-1">
                        {(['en', 'fr', 'ar'] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang)}
                                className={cn(
                                    "px-2 py-1 rounded-lg text-xs font-bold uppercase transition-all",
                                    language === lang
                                        ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                                )}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>

                    <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-1 hidden sm:block" />

                    <a
                        href="/Sif_Yacine_Resume__english.pdf"
                        target="_blank"
                        className="hidden sm:flex px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-xl hover:opacity-90 transition-all items-center gap-2"
                    >
                        <span>{t('nav.resume')}</span>
                    </a>

                    <div className="flex items-center space-x-1">
                        <SocialIcon href="mailto:sifyacine2003@gmail.com" icon={<Mail className="h-4 w-4" />} />
                        <SocialIcon href="https://linkedin.com/in/sifyacine" icon={<Linkedin className="h-4 w-4" />} />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
    >
        {icon}
    </motion.a>
);
