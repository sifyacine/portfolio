import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

export const Navbar = () => {
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
                isScrolled ? "bg-white/70 backdrop-blur-xl border-b border-gray-100" : "bg-transparent"
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

                <div className="hidden md:flex items-center space-x-1 bg-gray-100/50 p-1 rounded-2xl border border-gray-200/50 backdrop-blur-sm">
                    {['Projects', 'Skills', 'Experience', 'Education'].map((item) => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative",
                                    isActive ? "text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm border border-gray-100"
                                    />
                                )}
                                {item}
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center space-x-3">
                    <a
                        href="/Sif_Yacine_Resume__english.pdf"
                        target="_blank"
                        className="hidden sm:flex px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 items-center gap-2"
                    >
                        <span>Resume</span>
                    </a>
                    <div className="w-px h-6 bg-gray-200 mx-2 hidden sm:block" />
                    <div className="flex items-center space-x-2">
                        <SocialIcon href="mailto:sif.yacine@email.com" icon={<Mail className="h-4 w-4" />} />
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
        className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
    >
        {icon}
    </motion.a>
);
