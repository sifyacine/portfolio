import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { cn } from '../lib/utils';

export const Footer = () => {
    const { t, isRTL } = useAppContext();

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                        >
                            {t('footer.title_prefix')} <br />
                            <span className="text-blue-500 italic">{t('footer.title_suffix')}</span>
                        </motion.h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-6 rtl:space-x-reverse">
                            <SocialLink href="https://github.com/sifyacine" icon={<Github />} />
                            <SocialLink href="https://linkedin.com/in/sifyacine" icon={<Linkedin />} />
                            <SocialLink href="mailto:sifyacine2003@gmail.com" icon={<Mail />} />
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
                        <h3 className="text-2xl font-bold mb-6">{t('footer.contact_details')}</h3>
                        <div className="space-y-6">
                            <ContactItem label={t('footer.email')} value="sifyacine2003@gmail.com" href="mailto:sifyacine2003@gmail.com" />
                            <ContactItem label={t('footer.location')} value={t('footer.location_val')} />
                            <ContactItem label={t('footer.availability')} value={t('footer.availability_val')} />
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="mailto:sifyacine2003@gmail.com"
                            className="mt-12 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all"
                        >
                            <span>{t('footer.get_in_touch')}</span>
                            <ArrowUpRight className={cn("h-5 w-5", isRTL && "-rotate-90")} />
                        </motion.a>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-24 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Sif Yacine. {t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <motion.a
        whileHover={{ y: -5, color: '#3b82f6' }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 text-2xl transition-all"
    >
        {icon}
    </motion.a>
);

const ContactItem = ({ label, value, href }: { label: string; value: string; href?: string }) => (
    <div>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-bold mb-1">{label}</p>
        {href ? (
            <a href={href} className="text-xl font-medium hover:text-blue-500 transition-colors">{value}</a>
        ) : (
            <p className="text-xl font-medium">{value}</p>
        )}
    </div>
);
