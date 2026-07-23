import React from 'react';
import { Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer style={{ background: '#050711', borderTop: '1px solid rgba(99, 102, 241, 0.2)', padding: '2.5rem 0' }}>
      <div className="container flex-row justify-between items-center flex-wrap gap-md flex-row-responsive">
        
        <div className="flex-row items-center gap-sm">
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Code2 size={18} color="#fff" />
          </div>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
            Haries <span className="gradient-text">H</span>
          </span>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
          © {new Date().getFullYear()} Haries H. Built with <span style={{ color: 'var(--cyan-accent)' }}>React JS & Digital Indigo Theme</span>.
        </div>

        <div className="flex-row gap-md">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" style={footerLink}>GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={footerLink}>LinkedIn</a>
          <a href="#hero" style={footerLink}>Back to Top ↑</a>
        </div>

      </div>
    </footer>
  );
}

const footerLink = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.85rem',
  transition: 'color 0.2s'
};
