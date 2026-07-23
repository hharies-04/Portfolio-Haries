import React, { useState } from 'react';
import { Cpu, Terminal, LayoutGrid, CheckCircle2, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" style={{ padding: '5rem 0', background: 'rgba(10, 13, 26, 0.4)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-violet" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Expertise & Tech Stack
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>
            Technical <span className="gradient-text">Skills Matrix</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.8rem auto 0 auto' }}>
            Core competencies engineered across full-stack frontend development, machine learning architectures, and modern workflow tools.
          </p>
        </div>

        {/* Flexbox Columns Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1.8rem',
            justifyContent: 'center'
          }}
        >
          {/* Frontend Category */}
          <div
            className="glass-card"
            style={{
              flex: '1 1 320px',
              maxWidth: '380px',
              padding: '2rem',
              borderRadius: '18px'
            }}
          >
            <div className="flex-row items-center gap-sm" style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid var(--cyan-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <LayoutGrid size={22} color="var(--cyan-accent)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Frontend Web</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>UI Components & Flexbox</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {skills.frontend.map((item, idx) => (
                <div key={idx}>
                  <div className="flex-row justify-between" style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{item.name}</span>
                    <span style={{ color: 'var(--cyan-accent)', fontWeight: 700 }}>{item.level}%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${item.level}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
                        borderRadius: '4px',
                        boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Learning & Backend */}
          <div
            className="glass-card"
            style={{
              flex: '1 1 320px',
              maxWidth: '380px',
              padding: '2rem',
              borderRadius: '18px'
            }}
          >
            <div className="flex-row items-center gap-sm" style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid var(--indigo-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Cpu size={22} color="var(--indigo-primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Machine Learning</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Python, Scikit-Learn & RL</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {skills.backendMl.map((item, idx) => (
                <div key={idx}>
                  <div className="flex-row justify-between" style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{item.name}</span>
                    <span style={{ color: 'var(--indigo-primary)', fontWeight: 700 }}>{item.level}%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${item.level}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #a855f7, #6366f1)',
                        borderRadius: '4px',
                        boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Workflows */}
          <div
            className="glass-card"
            style={{
              flex: '1 1 320px',
              maxWidth: '380px',
              padding: '2rem',
              borderRadius: '18px'
            }}
          >
            <div className="flex-row items-center gap-sm" style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid var(--violet-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Terminal size={22} color="var(--violet-accent)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Tools & Systems</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Git, Vite & Environments</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {skills.tools.map((item, idx) => (
                <div key={idx}>
                  <div className="flex-row justify-between" style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{item.name}</span>
                    <span style={{ color: 'var(--violet-accent)', fontWeight: 700 }}>{item.level}%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${item.level}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                        borderRadius: '4px',
                        boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
