import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { cn } from '../lib/utils';

export const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Mobile Apps', 'Backend', 'AI/ML'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 bg-white overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 max-w-xl"
                        >
                            A selection of my recent work in mobile engineering, AI, and scalable backend architectures.
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-5 py-2 rounded-xl text-sm font-medium transition-all",
                                    filter === cat
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex space-x-3">
                        <a href={project.githubUrl} target="_blank" className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/40 text-white transition-all">
                            <Github className="h-5 w-5" />
                        </a>
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" className="p-3 bg-blue-600 rounded-xl hover:bg-blue-700 text-white transition-all">
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-8">
                <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.tools[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.tools.slice(0, 2).map((tool: string) => (
                            <span key={tool} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100">
                                {tool}
                            </span>
                        ))}
                    </div>
                    <motion.div whileHover={{ x: 5 }} className="text-blue-600">
                        <ArrowRight className="h-5 w-5" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
