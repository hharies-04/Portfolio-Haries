import React, { useState } from 'react';
import { Mail, Send, Sparkles, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Form submission fallback via mailto trigger as well
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Direct Inquiry from ' + formData.name)}&body=${encodeURIComponent('From: ' + formData.name + ' (' + formData.email + ')\n\n' + formData.message)}`;
      window.location.href = mailtoUrl;
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Inquiry for Haries H | Software Engineering Role')}`;

  return (
    <section id="contact" style={{ padding: '5rem 0 6rem 0', background: 'rgba(10, 13, 26, 0.6)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> HR & Recruiter Engagement
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>
            Let's <span className="gradient-text">Connect & Collaborate</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.8rem auto 0 auto' }}>
            Interested in hiring for a software engineering position or discussing a project? Click the email card below to launch your email app directly!
          </p>
        </div>

        {/* Contact Flexbox Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center'
          }}
        >
          {/* Contact Left Info */}
          <div
            className="glass-card flex-col justify-between"
            style={{
              flex: '1 1 320px',
              maxWidth: '440px',
              padding: '2.2rem',
              borderRadius: '20px'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Open to Full-Time Software Engineer, React Developer, and Machine Learning Specialist opportunities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                
                {/* DIRECT MAIL APP LINK ITEM */}
                <a
                  href={mailtoLink}
                  title="Click to launch your email app and compose a message"
                  className="flex-row items-center justify-between"
                  style={{
                    padding: '0.9rem 1.1rem',
                    background: 'rgba(0, 180, 216, 0.12)',
                    border: '1px solid var(--cyan-accent)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: '#fff',
                    transition: 'transform 0.2s, background 0.2s',
                    cursor: 'pointer'
                  }}
                >
                  <div className="flex-row items-center gap-sm">
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Mail size={20} color="#fff" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--cyan-accent)', fontWeight: 600 }}>
                        Click to Open Email App ✉️
                      </div>
                      <div style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 700 }}>
                        {personalInfo.email}
                      </div>
                    </div>
                  </div>

                  <div className="flex-row items-center gap-xs">
                    <button
                      onClick={handleCopyEmail}
                      className="btn-secondary"
                      title="Copy Email Address"
                      style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
                    >
                      {copied ? <CheckCircle2 size={14} color="#22c55e" /> : <Copy size={14} />}
                    </button>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-row items-center gap-sm"
                  style={{ padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', textDecoration: 'none', color: '#fff' }}
                >
                  <GithubIcon size={20} color="var(--indigo-primary)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>GitHub Profile</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>github.com/hharies-04</div>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-row items-center gap-sm"
                  style={{ padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', textDecoration: 'none', color: '#fff' }}
                >
                  <LinkedinIcon size={20} color="var(--violet-accent)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>LinkedIn Profile</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>linkedin.com/in/haries-h-331223373</div>
                  </div>
                </a>

              </div>
            </div>

            <div className="badge badge-cyan" style={{ padding: '0.6rem 1rem' }}>
              ⚡ Average HR response time: &lt; 24 hours
            </div>
          </div>

          {/* Contact Right Form */}
          <div
            className="glass-card"
            style={{
              flex: '1 1 360px',
              maxWidth: '560px',
              padding: '2.2rem',
              borderRadius: '20px'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '1.5rem' }}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', borderRadius: '12px' }}>
                <CheckCircle2 size={40} color="#22c55e" style={{ margin: '0 auto 0.8rem auto' }} />
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Email App Opened!</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Opening your email application to send the message directly to {personalInfo.email}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div className="flex-row gap-md flex-row-responsive">
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HR Representative / Tech Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 1rem', background: '#080b18', border: '1px solid #334155', color: '#fff', borderRadius: '8px', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 1rem', background: '#080b18', border: '1px solid #334155', color: '#fff', borderRadius: '8px', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Subject</label>
                  <input
                    type="text"
                    placeholder="Role Opportunity / General Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem 1rem', background: '#080b18', border: '1px solid #334155', color: '#fff', borderRadius: '8px', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message or role details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '0.7rem 1rem', background: '#080b18', border: '1px solid #334155', color: '#fff', borderRadius: '8px', fontSize: '0.9rem' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyCenter: 'center', width: '100%', padding: '0.8rem' }}>
                  <Send size={16} /> Open Email App & Send Message
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
