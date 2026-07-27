import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Upload, CheckCircle2, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, stats } from '../data/portfolioData';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  const [profileImg, setProfileImg] = useState(profilePic);
  const [showUploadMsg, setShowUploadMsg] = useState(false);
  const [typedName, setTypedName] = useState("");

  // Infinite Looping Typewriter Animation for Haries H
  useEffect(() => {
    const fullName = personalInfo.name;
    let isDeleting = false;
    let charIndex = 0;
    let timeoutId;
    
    const typeLoop = () => {
      if (!isDeleting && charIndex <= fullName.length) {
        setTypedName(fullName.slice(0, charIndex));
        charIndex++;
      } else if (isDeleting && charIndex >= 0) {
        setTypedName(fullName.slice(0, charIndex));
        charIndex--;
      }

      if (charIndex === fullName.length + 1) {
        isDeleting = true;
        timeoutId = setTimeout(typeLoop, 2200); // Pause at complete name
        return;
      } else if (charIndex === -1) {
        isDeleting = false;
        charIndex = 0;
        timeoutId = setTimeout(typeLoop, 600); // Pause before re-typing
        return;
      }

      const speed = isDeleting ? 60 : 130;
      timeoutId = setTimeout(typeLoop, speed);
    };

    timeoutId = setTimeout(typeLoop, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImg(url);
      setShowUploadMsg(true);
      setTimeout(() => setShowUploadMsg(false), 3000);
    }
  };

  return (
    <section id="hero" style={{ padding: '4rem 0 5rem 0' }}>
      <div className="container flex-row flex-row-responsive items-center gap-lg justify-between">
        
        {/* Hero Left Content */}
        <div style={{ flex: 1, maxWidth: '640px' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '1.2rem', padding: '0.4rem 1rem' }}>
            <Sparkles size={14} /> Open to HR & Engineering Roles
          </div>

          <h1 style={{ fontSize: '3.2rem', lineHeight: 1.15, fontWeight: 800, marginBottom: '1rem' }}>
            Hi, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #caf0f8 0%, #90e0ef 35%, #00b4d8 70%, #03045e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                borderRight: '3px solid #00b4d8',
                paddingRight: '4px',
                display: 'inline-block',
                filter: 'drop-shadow(0 0 12px rgba(0, 180, 216, 0.4))'
              }}
            >
              {typedName}
            </span>
          </h1>

          <h2 style={{ fontSize: '1.4rem', color: '#cbd5e1', fontWeight: 500, marginBottom: '1.2rem' }}>
            {personalInfo.title}
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {personalInfo.bio}
          </p>

          <div className="flex-row items-center gap-md flex-wrap" style={{ marginBottom: '2.5rem' }}>
            <a href="#projects" className="btn-primary">
              View GitHub Projects <ArrowRight size={18} />
            </a>
            <a href="/resume.html" target="_blank" rel="noreferrer" className="btn-secondary">
              <FileText size={18} /> Resume & Overview ↗
            </a>
          </div>

          {/* Quick Stats Grid using Flexbox */}
          <div className="flex-row flex-wrap gap-md">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '0.8rem 1.4rem', flex: '1 1 120px', minWidth: '130px' }}
              >
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--cyan-accent)' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Right Avatar Image & Customizer */}
        <div className="flex-col items-center justify-center" style={{ flex: '0 0 auto', position: 'relative' }}>
          
          {/* Avatar Ring */}
          <div
            style={{
              position: 'relative',
              width: '280px',
              height: '340px',
              borderRadius: '24px',
              padding: '8px',
              background: 'linear-gradient(135deg, #03045e, #0077b6, #00b4d8)',
              boxShadow: '0 0 40px rgba(0, 180, 216, 0.45)'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#0a0d1a',
                position: 'relative'
              }}
            >
              <img
                src={profileImg}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Upload Overlay Button */}
              <label
                title="Change or upload custom photo"
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(7, 9, 19, 0.85)',
                  border: '1px solid var(--cyan-accent)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  transition: 'transform 0.2s'
                }}
              >
                <Upload size={18} color="var(--cyan-accent)" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>

          {showUploadMsg && (
            <div className="badge badge-cyan" style={{ marginTop: '0.8rem' }}>
              <CheckCircle2 size={14} /> Profile image updated live!
            </div>
          )}

          <div
            className="glass-card"
            style={{
              marginTop: '1.2rem',
              padding: '0.6rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem'
            }}
          >
            <span className="pulse-dot"></span>
            <span>Available for Full-Time & Project Roles</span>
          </div>

        </div>

      </div>
    </section>
  );
}
