import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
            {/* Animated Glow Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-4">
                        Welcome to My Digital Space
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight dark:text-white">
                        <span className="block italic font-light text-3xl md:text-4xl mb-2 text-gray-500">I am</span>
                        <span className="text-gradient">BALOGUN ADEKUNLE ISIAKA</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 font-medium"
                >
                    Cloud & Networking Engineer | AI Solutions Enthusiast
                    <br />
                    <span className="text-gray-400 dark:text-gray-500 font-normal">
                        Building intelligent cloud systems and innovative technology solutions.
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95"
                    >
                        View Projects
                        <HiOutlineArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/CV.jpg"
                        download="Balogun_CV.jpg"
                        className="flex items-center gap-2 bg-white dark:bg-gray-900 border-2 border-primary/20 text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold hover:border-primary transition-all hover:scale-105 active:scale-95 shadow-sm"
                    >
                        Download CV
                        <FiDownload />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Scroll Down</span>
                <div className="w-1 h-12 bg-gray-200 dark:bg-gray-800 rounded-full relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-1/3 bg-primary rounded-full shadow-[0_0_10px_#10b981]"
                    />
                </div>
            </motion.div>

            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
