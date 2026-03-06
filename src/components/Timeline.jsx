import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCode, FiActivity } from 'react-icons/fi';

const Timeline = () => {
    const events = [
        {
            year: "2025",
            title: "Networking Specialist Studies",
            category: "Studies",
            icon: <FiBookOpen />,
            description: "Deep dive into network infrastructure, protocols, and security management."
        },
        {
            year: "2024 / 2025",
            title: "AWS Cloud Practitioner Certification",
            category: "Certification",
            icon: <FiAward />,
            description: "Successfully validated foundational cloud knowledge. (Renewal/Expiration: 2028)"
        },
        {
            year: "2024 / 2025",
            title: "AI Hospital Navigation System",
            category: "Project",
            icon: <FiCode />,
            description: "Leading the development of an intelligent routing system using React and AI logic."
        },
        {
            year: "Upcoming",
            title: "AWS Solutions Architect Associate",
            category: "Goal",
            icon: <FiActivity />,
            description: "Currently pursuing advanced certification to design and deploy complex AWS systems."
        }
    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 dark:text-white"
                    >
                        Success <span className="text-gradient">Timeline</span>
                    </motion.h2>
                    <p className="text-gray-500 dark:text-gray-400">My journey of continuous learning and technological evolution.</p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <div className={`p-8 rounded-3xl glass shadow-xl border border-gray-100 dark:border-gray-800 relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                        }`}>
                                        <span className="text-primary font-black text-sm uppercase tracking-widest mb-2 block">{event.year}</span>
                                        <h3 className="text-2xl font-bold mb-3 dark:text-white">{event.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{event.description}</p>

                                        {/* Connector tail for desktop */}
                                        <div className={`hidden md:block absolute top-1/2 -mt-1 w-4 h-2 bg-primary/20 ${index % 2 === 0 ? '-right-4' : '-left-4'
                                            }`}></div>
                                    </div>
                                </div>

                                {/* Icon Circle */}
                                <div className="z-10 bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_#10b981] flex-shrink-0">
                                    {event.icon}
                                </div>

                                {/* Spacer for desktop symmetry */}
                                <div className="hidden md:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default Timeline;
