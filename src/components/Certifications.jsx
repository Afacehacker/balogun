import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAws, FaNetworkWired, FaShieldAlt, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = React.useState(null);

    const certs = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            icon: <FaAws className="text-5xl text-[#FF9900]" />,
            description: "Foundational knowledge of cloud concepts, security, technology, and billing. (Valid: 2024/2025 - 2028)",
            date: "2024 / 2025"
        },
        {
            title: "Networking N+ Certification",
            issuer: "CompTIA",
            icon: <FaNetworkWired className="text-5xl text-[#0070AD]" />,
            description: "Covers the configuration, management, and troubleshooting of common wired and wireless networks.",
            date: "Earned"
        },
        {
            title: "ALX Professional Foundation Course",
            issuer: "ALX Africa",
            icon: <FaGraduationCap className="text-5xl text-[#00A651]" />,
            description: "A comprehensive course focusing on Professional Development Skills for the Digital Age, emphasizing technical proficiency and soft skills.",
            date: "30th Sept 2025",
            certificateImage: "/ALX_Certificate.jpeg"
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 dark:text-white"
                    >
                        Professional <span className="text-gradient">Certifications</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Validated expertise in cloud infrastructure and network management through industry-standard credentials.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 relative group overflow-hidden"
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors blur-2xl"></div>

                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-inner group-hover:scale-110 transition-transform">
                                    {cert.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaShieldAlt className="text-primary" />
                                        <span className="text-sm font-bold text-primary uppercase tracking-widest">{cert.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 dark:text-white">{cert.title}</h3>
                                    <p className="text-primary font-medium mb-4">{cert.issuer}</p>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                        {cert.description}
                                    </p>

                                    {cert.certificateImage && (
                                        <button
                                            onClick={() => setSelectedCert(cert)}
                                            className="flex items-center gap-2 text-primary font-bold hover:underline transition-all"
                                        >
                                            <FaExternalLinkAlt className="text-sm" />
                                            View Certificate
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative z-10 max-w-4xl w-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800">
                                <h3 className="text-xl font-bold dark:text-white">{selectedCert.title}</h3>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                                >
                                    <IoClose className="text-2xl dark:text-white" />
                                </button>
                            </div>
                            <div className="p-2 max-h-[80vh] overflow-y-auto flex justify-center">
                                <img
                                    src={selectedCert.certificateImage}
                                    alt={selectedCert.title}
                                    className="max-w-full h-auto rounded-xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
