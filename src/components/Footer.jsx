import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-950 py-12 border-t border-gray-100 dark:border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-black mb-2 dark:text-white">
                            <span className="text-primary">B</span>ALOGUN
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                            Building the future of cloud and AI solutions with innovation and precision.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex gap-6 mb-4">
                            <a href="https://www.linkedin.com/in/adekunle-balogun-852a2683?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-primary transition-colors"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-900 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Balogun Adekunle Isiaka. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
