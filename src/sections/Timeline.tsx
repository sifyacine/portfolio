import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';
import { useAppContext } from '../context/AppContext';
import { cn } from '../lib/utils';

export const Timeline = () => {
    const { t } = useAppContext();

    return (
        <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Experience Section */}
                    <div id="experience" className="scroll-mt-32">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center"
                        >
                            <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-4 rtl:mr-0 rtl:ml-4" />
                            {t('experience.title')}
                        </motion.h2>

                        <div className="space-y-12">
                            {experiences.map((exp, idx) => (
                                <TimelineItem key={exp.id} item={exp} index={idx} type="experience" />
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div id="education" className="scroll-mt-32">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center"
                        >
                            <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-4 rtl:mr-0 rtl:ml-4" />
                            {t('education.title')}
                        </motion.h2>

                        <div className="space-y-12">
                            {education.map((edu, idx) => (
                                <TimelineItem key={edu.id} item={edu} index={idx} type="education" />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ item, index, type }: { item: any; index: number; type: string }) => {
    const { isRTL } = useAppContext();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "relative pb-2 transition-colors",
                isRTL ? "pr-8 border-r-2" : "pl-8 border-l-2",
                "border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700"
            )}
        >
            <div className={cn(
                "absolute top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-600 dark:border-blue-400 group-hover:scale-125 transition-transform",
                isRTL ? "-right-[9px]" : "-left-[9px]"
            )} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {type === 'experience' ? item.role : item.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {type === 'experience' ? item.company : item.institution}
                    </p>
                    {type === 'education' && (
                        <p className="text-gray-500 dark:text-gray-400 text-sm italic">{item.field}</p>
                    )}
                </div>
                <div className="flex items-center text-sm text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 px-3 py-1 rounded-full w-fit">
                    <Calendar className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                    <span>{item.startDate} — {item.endDate}</span>
                </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
            </p>
        </motion.div>
    );
};
