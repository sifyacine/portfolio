import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Sparkles } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>Available for New Opportunities</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 mb-8"
                >
                    Building Digital <br />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Masterpieces
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Hi, I'm <span className="font-semibold text-gray-900">Sif Yacine</span>.
                    A Software Engineer crafting high-performance mobile apps,
                    robust backend systems, and intelligent AI solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href="#projects"
                        className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all text-lg"
                    >
                        View My Projects
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href="/Sif_Yacine_Resume__english.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all text-lg shadow-sm"
                    >
                        Preview Resume
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href="mailto:sif.yacine@email.com"
                        className="w-full sm:w-auto px-10 py-5 bg-gray-50 text-gray-600 rounded-2xl font-bold hover:bg-gray-100 transition-all text-lg"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center text-sm text-gray-400 mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>Based in Algeria</span>
                        </div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <ChevronDown className="h-6 w-6 text-gray-400" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
