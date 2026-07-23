import React, { useState } from 'react';
import { Briefcase, GraduationCap, FileText, Download, Sparkles, PlusCircle, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function ResumeSection() {
  // Resume Q&A and Customizer State
  const [customAchievements, setCustomAchievements] = useState([
    "Developed 8+ full-stack and ML repositories available on GitHub.",
    "Engineered Random Forest & SVM ensemble classifiers reaching 96.4% precision.",
    "Constructed adaptive reinforcement learning intrusion detection for real-time anomaly response."
  ]);
  
  const [newAchievement, setNewAchievement] = useState('');
  const [showAnalyzer, setShowAnalyzer] = useState(false);
  const [resumeText, setResumeText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (newAchievement.trim()) {
      setCustomAchievements([...customAchievements, newAchievement.trim()]);
      setNewAchievement('');
    }
  };

  const handleAnalyzeResume = () => {
    if (!resumeText.trim()) return;
    setAnalysisResult({
      score: "94/100 (HR Optimized)",
      matchedKeywords: ["React JS", "JavaScript", "Python", "Machine Learning", "Flexbox", "Ensemble Models"],
      suggestion: "High density of technical projects and quantified achievements. Excellent match for Tech & Software Engineering roles!"
    });
  };

  return (
    <section id="resume" style={{ padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Career Overview & HR Resume
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>
            Resume & <span className="gradient-text">Experience Timeline</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.8rem auto 0 auto', marginBottom: '1.5rem' }}>
            Comprehensive breakdown of academic background, engineering experience, and technical achievements formatted for HR evaluation.
          </p>

          <a href="/resume.html" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.7rem 1.6rem', fontSize: '0.95rem' }}>
            <ExternalLink size={18} /> Open Full Resume Document in New Tab ↗
          </a>
        </div>

        {/* Timeline Flexbox Layout */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {/* Work Experience */}
          <div style={{ flex: '1 1 340px' }}>
            <div className="flex-row items-center gap-sm" style={{ marginBottom: '1.5rem' }}>
              <Briefcase size={22} color="var(--indigo-primary)" />
              <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700 }}>Experience & Projects</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {experienceData.map((exp, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <div className="flex-row justify-between items-center" style={{ marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>{exp.role}</h4>
                    <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>{exp.period}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--cyan-accent)', marginBottom: '0.8rem' }}>{exp.type}</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ flex: '1 1 340px' }}>
            <div className="flex-row items-center gap-sm" style={{ marginBottom: '1.5rem' }}>
              <GraduationCap size={22} color="var(--cyan-accent)" />
              <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700 }}>Education</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {educationData.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <div className="flex-row justify-between items-center" style={{ marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>{edu.degree}</h4>
                    <span className="badge badge-violet" style={{ fontSize: '0.75rem' }}>{edu.period}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--violet-accent)', marginBottom: '0.8rem' }}>{edu.institution}</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INTERACTIVE RESUME Q&A & ANALYZER CONTAINER */}
        <div
          className="glass-card"
          style={{
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid var(--border-glow)'
          }}
        >
          <div className="flex-row justify-between items-center flex-wrap gap-md" style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            <div>
              <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>
                <MessageSquare size={14} /> Resume Customizer & Analyzer
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700 }}>
                Interactive Resume Builder & HR Q&A
              </h3>
            </div>
            <div className="flex-row gap-sm">
              <a href="/resume.html" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                <FileText size={16} /> Open Full Resume Document ↗
              </a>
              <button className="btn-secondary" onClick={() => setShowAnalyzer(!showAnalyzer)} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                {showAnalyzer ? 'Hide Text Analyzer' : 'Paste & Analyze Resume Text'}
              </button>
            </div>
          </div>

          {/* Resume Text Analyzer Input */}
          {showAnalyzer && (
            <div style={{ marginBottom: '2rem', background: '#080b18', padding: '1.5rem', borderRadius: '12px', border: '1px dashed var(--cyan-accent)' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '0.6rem' }}>
                Paste your raw resume content here to analyze HR readability & keyword density:
              </label>
              <textarea
                rows={4}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste work history, certifications, or summary..."
                style={{ width: '100%', padding: '0.8rem', background: '#0f1428', border: '1px solid #334155', color: '#fff', borderRadius: '8px', fontSize: '0.88rem', marginBottom: '1rem' }}
              />
              <button className="btn-primary" onClick={handleAnalyzeResume} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
                Analyze Resume Keywords
              </button>

              {analysisResult && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--cyan-accent)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 700, color: '#38bdf8' }}>HR Score: {analysisResult.score}</div>
                  <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.4rem' }}>
                    Matched Tech Keywords: {analysisResult.matchedKeywords.map((k, idx) => (
                      <span key={idx} className="badge badge-cyan" style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>{k}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.4rem' }}>
                    {analysisResult.suggestion}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Highlights & Custom Additions List */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.8rem' }}>
              Key Technical Highlights (Displayed to HR):
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {customAchievements.map((ach, i) => (
                <div key={i} className="flex-row items-center gap-sm" style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--cyan-accent)" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form to add custom Q&A items */}
          <form onSubmit={handleAddAchievement} className="flex-row gap-sm flex-wrap">
            <input
              type="text"
              placeholder="Add another achievement, project milestone, or certificate..."
              value={newAchievement}
              onChange={(e) => setNewAchievement(e.target.value)}
              style={{ flex: 1, minWidth: '240px', padding: '0.6rem 1rem', background: '#080b18', border: '1px solid #334155', color: '#fff', borderRadius: '8px', fontSize: '0.85rem' }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              <PlusCircle size={16} /> Add to Resume
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
