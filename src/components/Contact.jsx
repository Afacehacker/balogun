import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageStatus, setMessageStatus] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/kunlebalo2002@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setMessageStatus('success');
                form.current.reset();
                setTimeout(() => setMessageStatus(null), 5000);
            } else {
                setMessageStatus('error');
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessageStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: <FiMail />, label: "Email", value: "kunlebalo2002@gmail.com", link: "mailto:kunlebalo2002@gmail.com" },
        { icon: <FiLinkedin />, label: "LinkedIn", value: "Adekunle Balogun", link: "https://www.linkedin.com/in/adekunle-balogun-852a2683?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ];

    return (
        <section id="contact" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 dark:text-white">
                            Get in <span className="text-gradient">Touch</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-lg">
                            Have a project in mind or want to discuss AI, Cloud, or Networking solutions? I'm always open to professional collaborations and networking.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center gap-6 p-6 rounded-2xl glass hover:border-primary/50 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{info.label}</p>
                                        <p className="text-lg font-bold dark:text-white group-hover:text-primary transition-colors">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl relative">
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 ml-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows="6"
                                        required
                                        placeholder="Hello! I'm interested in working with you..."
                                        className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all dark:text-white resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-primary text-white font-black py-4 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-3 transform active:scale-95 ${isSubmitting ? 'opacity-70' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>Send Message <FiSend className="text-xl" /></>
                                    )}
                                </button>

                                {messageStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 p-4 rounded-xl text-center font-bold"
                                    >
                                        Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}

                                {messageStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 p-4 rounded-xl text-center font-bold"
                                    >
                                        Something went wrong! Please try again later.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
