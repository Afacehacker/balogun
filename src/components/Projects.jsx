import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb } from 'react-icons/hi';

const Projects = () => {
    const projects = [
        {
            title: "AI Hospital Navigation System",
            description: "A smart AI-based system designed to help patients navigate hospitals easily by using artificial intelligence to guide them to departments, offices, and medical units efficiently.",
            features: [
                "Intelligent path navigation",
                "Patient assistance interface",
                "Smart hospital mapping",
                "AI-based direction support"
            ],
            tech: ["React", "Node.js", "AI Logic", "TailwindCSS"],
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop" // Professional Hospital/Tech image
        }
    ];

    return (
        <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 dark:text-white"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Showcasing innovative solutions developed at the intersection of AI, Cloud, and practical engineering.
                    </motion.p>
                </div>

                <div className="flex justify-center">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 max-w-4xl w-full group"
                        >
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                        <div className="text-white">
                                            <span className="bg-primary/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 inline-block">
                                                Active Project
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-1/2 p-10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-3xl font-black mb-4 dark:text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            {project.features.map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                                    <HiOutlineLightBulb className="text-primary text-xl flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((t, tIndex) => (
                                                <span key={tIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-bold border border-gray-200 dark:border-gray-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-400 py-3 rounded-xl font-bold cursor-default">
                                            Project Documentation Internal
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
