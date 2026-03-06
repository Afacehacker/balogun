import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiLayers, FiCpu, FiGlobe } from 'react-icons/fi';

const About = () => {
    const features = [
        {
            icon: <FiGlobe className="text-3xl text-primary" />,
            title: "Cloud Computing",
            description: "Deep passion for designing and managing scalable cloud architectures."
        },
        {
            icon: <FiLayers className="text-3xl text-primary" />,
            title: "Networking",
            description: "Expertise in designing, implementing, and securing complex network infrastructures."
        },
        {
            icon: <FiCpu className="text-3xl text-primary" />,
            title: "AI Integration",
            description: "Dedicated to leveraging AI to enhance system efficiency and user experience."
        },
        {
            icon: <FiTarget className="text-3xl text-primary" />,
            title: "Problem Solver",
            description: "Focused on solving real-world challenges with elegant technological solutions."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 dark:text-white">
                            Designing the <span className="text-gradient">Future</span> of Technology
                        </h2>
                        <div className="w-20 h-2 bg-primary rounded-full mb-8"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            I am a Dedicated Cloud and Networking Engineer with a strong interest in AI-driven innovation. My journey is defined by a relentless pursuit of excellence in building robust, secure, and scalable infrastructure.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            With a solid foundation in networking protocols and cloud platforms, I bridge the gap between hardware connectivity and software intelligence. My goal is to create systems that aren't just functional, but revolutionary.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all hover:shadow-xl group"
                                >
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden glass p-4 shadow-2xl">
                            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-light/5 rounded-2xl flex items-center justify-center p-8 border border-white/20">
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                                    }}
                                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                    className="w-full h-full bg-primary/20 backdrop-blur-3xl flex items-center justify-center"
                                >
                                    <span className="text-primary font-black text-9xl select-none">B</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
