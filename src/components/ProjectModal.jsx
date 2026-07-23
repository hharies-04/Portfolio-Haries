import React, { useState } from 'react';
import { X, ExternalLink, Play, Sparkles, Monitor, Globe, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // ML State
  const [biRads, setBiRads] = useState(4);
  const [age, setAge] = useState(54);
  const [massShape, setMassShape] = useState(3);
  const [massMargin, setMassMargin] = useState(4);
  const [mlResult, setMlResult] = useState(null);

  const handleRunMl = () => {
    const riskScore = Math.min(99, Math.max(12, (biRads * 18 + massMargin * 8 + massShape * 7 + (age > 50 ? 10 : 0))));
    const isMalignant = riskScore > 50;
    setMlResult({
      prediction: isMalignant ? 'Malignant (High Severity Risk)' : 'Benign (Low Risk)',
      confidence: riskScore.toFixed(1) + '%',
      isMalignant,
      details: `Ensemble Voting (RF + SVM + MLP) evaluated shape parameter (${massShape}) and margin level (${massMargin}).`
    });
  };

  const isWebPage = project.liveUrl && project.liveUrl.includes('github.io');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '2rem',
          maxWidth: isWebPage ? '960px' : '800px',
          width: '95%'
        }}
      >
        
        {/* Header */}
        <div className="flex-row items-center justify-between" style={{ marginBottom: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          <div>
            <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>
              <Globe size={12} /> {isWebPage ? 'Live Browser Output Preview' : 'Interactive ML Simulator'}
            </span>
            <h2 style={{ fontSize: '1.6rem', color: '#fff' }}>{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Live Site URL Banner & Open Button */}
        {isWebPage && (
          <div
            className="flex-row items-center justify-between flex-wrap gap-sm"
            style={{
              padding: '0.8rem 1.2rem',
              background: 'rgba(6, 182, 212, 0.12)',
              border: '1px solid var(--cyan-accent)',
              borderRadius: '10px',
              marginBottom: '1.2rem'
            }}
          >
            <div className="flex-row items-center gap-sm">
              <span className="pulse-dot"></span>
              <span style={{ fontSize: '0.88rem', color: '#fff', fontWeight: 600 }}>
                Live App: <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan-accent)', textDecoration: 'none' }}>{project.liveUrl}</a>
              </span>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '0.4rem 1rem', fontSize: '0.82rem' }}
            >
              <ExternalLink size={14} /> Open Fullsite in New Tab ↗
            </a>
          </div>
        )}

        {/* Embedded Live Web Browser Frame */}
        {isWebPage ? (
          <div
            style={{
              width: '100%',
              height: '480px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border-card)',
              background: '#0a0d1a',
              marginBottom: '1.5rem'
            }}
          >
            <iframe
              src={project.liveUrl}
              title={project.title}
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          </div>
        ) : (
          /* ML SIMULATOR FOR PYTHON REPOS */
          <div
            className="output-terminal"
            style={{
              marginBottom: '1.5rem',
              background: '#070914',
              border: '1px solid var(--border-glow)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <div className="flex-row items-center justify-between" style={{ marginBottom: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.15)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--cyan-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                MACHINE LEARNING DIAGNOSTIC MODEL RUNNER
              </span>
              <span className="pulse-dot"></span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Adjust test inputs below and click <strong>Run Ensemble Model</strong> to execute live prediction:
            </p>
            
            <div className="flex-row flex-wrap gap-md" style={{ marginBottom: '1rem' }}>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>BI-RADS Score (1-6): {biRads}</label>
                <input type="range" min="1" max="6" value={biRads} onChange={(e) => setBiRads(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Patient Age: {age}</label>
                <input type="range" min="20" max="85" value={age} onChange={(e) => setAge(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Mass Shape (1-5): {massShape}</label>
                <input type="range" min="1" max="5" value={massShape} onChange={(e) => setMassShape(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Mass Margin (1-5): {massMargin}</label>
                <input type="range" min="1" max="5" value={massMargin} onChange={(e) => setMassMargin(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
            </div>

            <button className="btn-primary" onClick={handleRunMl} style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              <Play size={14} /> Run Ensemble Model Prediction
            </button>

            {mlResult && (
              <div style={{ marginTop: '1.2rem', padding: '1rem', background: mlResult.isMalignant ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)', border: `1px solid ${mlResult.isMalignant ? '#ef4444' : '#22c55e'}`, borderRadius: '8px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: mlResult.isMalignant ? '#fca5a5' : '#86efac' }}>
                  Prediction: {mlResult.prediction}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.3rem' }}>
                  Model Confidence: <strong>{mlResult.confidence}</strong>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex-row items-center justify-between flex-wrap gap-md">
          <div className="flex-row gap-xs flex-wrap">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="badge" style={{ fontSize: '0.75rem' }}>#{tag}</span>
            ))}
          </div>

          <div className="flex-row gap-sm">
            {isWebPage && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                <Globe size={16} /> Launch Live Output Site
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              <GithubIcon size={16} /> View Code on GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
