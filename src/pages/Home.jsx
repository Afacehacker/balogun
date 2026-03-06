import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar />
            <Hero />
            <About />
            <Certifications />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;
