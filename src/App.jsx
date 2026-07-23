import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* Background Ambient Digital Indigo Glow Effects */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      {/* Main Application Sections */}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}
