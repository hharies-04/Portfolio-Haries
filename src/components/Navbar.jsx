import React, { useState, useEffect } from 'react';
import { Code2, Mail, Menu, X, Sparkles, FileText, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(3, 10, 22, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 180, 216, 0.25)' : '1px solid transparent',
        padding: scrolled ? '0.8rem 0' : '1.2rem 0'
      }}
    >
      <div className="container flex-row items-center justify-between">
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(0, 180, 216, 0.5)'
            }}
          >
            <Code2 size={24} color="#caf0f8" />
          </div>
          <div>
            <span className="brand-logo" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#caf0f8' }}>
              Haries <span className="gradient-text">H</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="flex-row items-center gap-lg" style={{ display: 'flex' }}>
          <a href="#projects" className="nav-link" style={linkStyle}>Projects</a>
          <a href="#skills" className="nav-link" style={linkStyle}>Skills</a>
          <a href="#certifications" className="nav-link" style={linkStyle}>Certifications</a>
          <a href="./resume.html" target="_blank" rel="noreferrer" className="nav-link flex-row items-center gap-xs" style={{ ...linkStyle, color: 'var(--cyan-accent)', fontWeight: 600 }}>
            <FileText size={15} /> Resume ↗
          </a>
          <a href="#contact" className="nav-link" style={linkStyle}>Contact</a>

          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            <GithubIcon size={16} /> GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: 500,
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};
