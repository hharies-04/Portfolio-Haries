import React, { useState } from 'react';
import { ExternalLink, Play, Globe, Sparkles, Filter } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web Apps', 'UI Clones', 'Machine Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleOpenLiveOutput = (project, e) => {
    e.stopPropagation();
    if (project.liveUrl && project.liveUrl.includes('github.io')) {
      window.open(project.liveUrl, '_blank');
    }
    setActiveModalProject(project);
  };

  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> GitHub Repositories Showcase
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>
            Featured <span className="gradient-text">GitHub Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0.8rem auto 0 auto' }}>
            Click any project card or <strong>"View Live Output App"</strong> button to immediately launch and experience the live application output!
          </p>
        </div>

        {/* Flexbox Filter Pills */}
        <div className="flex-row items-center justify-center gap-sm flex-wrap" style={{ marginBottom: '2.5rem' }}>
          <Filter size={16} color="var(--cyan-accent)" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}
              style={{
                padding: '0.4rem 1.1rem',
                fontSize: '0.85rem',
                borderRadius: '999px'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PURE CSS FLEXBOX PROJECT GRID CONTAINER */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card flex-col justify-between"
              onClick={() => setActiveModalProject(project)}
              style={{
                flex: '1 1 340px',
                maxWidth: '390px',
                minWidth: '290px',
                padding: '1.8rem',
                display: 'flex',
                borderRadius: '16px',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <div>
                {/* Language / Category Badge */}
                <div className="flex-row items-center justify-between" style={{ marginBottom: '1rem' }}>
                  <span className="badge badge-violet" style={{ fontSize: '0.75rem' }}>
                    {project.language}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex-row flex-wrap gap-xs" style={{ marginBottom: '1.5rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px',
                        color: '#cbd5e1'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Flexbox Action Buttons */}
                <div className="flex-row gap-sm">
                  <button
                    className="btn-primary"
                    onClick={(e) => handleOpenLiveOutput(project, e)}
                    style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.82rem', justifyCenter: 'center' }}
                  >
                    <Globe size={15} /> 🌐 View Live Output App
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-secondary"
                    title="View GitHub Code Repository"
                    style={{ padding: '0.6rem 0.8rem' }}
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Output Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
