import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaNetworkWired, FaGitAlt, FaShieldAlt, FaCloud, FaCode, FaPhp, FaHtml5, FaPython } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Cloud",
            skills: [
                { name: "AWS", level: 90, icon: <FaAws /> },
                { name: "Cloud Architecture", level: 85, icon: <FaCloud /> },
                { name: "Cloud Security", level: 80, icon: <FaShieldAlt /> },
            ]
        },
        {
            title: "Networking",
            skills: [
                { name: "TCP/IP", level: 95, icon: <FaNetworkWired /> },
                { name: "Infrastructure", level: 90, icon: <FaNetworkWired /> },
                { name: "Routing & Switching", level: 85, icon: <FaNetworkWired /> },
            ]
        },
        {
            title: "Programming",
            skills: [
                { name: "PHP", level: 80, icon: <FaPhp /> },
                { name: "HTML", level: 95, icon: <FaHtml5 /> },
                { name: "Python", level: 85, icon: <FaPython /> },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", level: 90, icon: <FaGitAlt /> },
                { name: "VS Code", level: 90, icon: <FaCode /> },
                { name: "Postman", level: 85, icon: <SiPostman /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-4 dark:text-white"
                        >
                            Technical <span className="text-gradient">Proficiency</span>
                        </motion.h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            A comprehensive overview of my technical arsenal, ranging from core infrastructure to modern development tools.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl glass dark:bg-gray-900 shadow-xl border border-white/40 dark:border-gray-800"
                        >
                            <h3 className="text-2xl font-black mb-8 border-b border-primary/20 pb-4 dark:text-white flex items-center justify-between">
                                {category.title}
                                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Expertise</span>
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl text-primary">{skill.icon}</span>
                                                <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-sm font-black text-primary">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-right from-primary to-primary-light rounded-full shadow-[0_0_10px_#10b981]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
