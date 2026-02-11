import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { useAppContext } from '../context/AppContext';

export const Skills = () => {
    const { t, isRTL } = useAppContext();

    return (
        <section id="skills" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 scroll-mt-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        {t('skills.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400"
                    >
                        {t('skills.description')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm hover:shadow-xl transition-all"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <span className={cn("w-1.5 h-6 bg-blue-600 rounded-full", isRTL ? "ml-3" : "mr-3")} />
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-semibold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors cursor-default border border-blue-100 dark:border-blue-900/30"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import { cn } from '../lib/utils';
