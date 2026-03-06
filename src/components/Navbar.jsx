import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'glass py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold tracking-tighter"
                >
                    <span className="text-primary font-black">B</span>
                    <span className={isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"}>ALOGUN</span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-white"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isDarkMode ? (
                            <MdOutlineLightMode className="text-xl text-yellow-400" />
                        ) : (
                            <MdOutlineDarkMode className="text-xl text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isDarkMode ? (
                            <MdOutlineLightMode className="text-xl text-yellow-400" />
                        ) : (
                            <MdOutlineDarkMode className="text-xl text-gray-700" />
                        )}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-3xl text-gray-900 dark:text-white"
                    >
                        {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass shadow-xl md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-semibold hover:text-primary transition-colors dark:text-gray-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
