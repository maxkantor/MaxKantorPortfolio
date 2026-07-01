import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectPreview = ({ project }) => {
  const style = { '--project-accent': project.accent || '#4fd1ff' };

  return (
    <div className="project-preview" style={style}>
      <div className="project-preview__chrome">
        <span className="project-preview__dot" />
        <span className="project-preview__dot" />
        <span className="project-preview__dot" />
        <span className="project-preview__url">
          {project.liveUrl ? new URL(project.liveUrl).hostname : 'in progress'}
        </span>
      </div>
      {project.screenshot ? (
        <img
          src={project.screenshot}
          alt={`${project.name} product screenshot`}
          className="project-preview__image"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="project-preview__placeholder" aria-hidden="true">
          <span className="project-preview__emoji">{project.emoji}</span>
          <span className="project-preview__name">{project.name}</span>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [expandedArchitecture, setExpandedArchitecture] = useState(null);

  const toggleArchitecture = (name) => {
    setExpandedArchitecture((current) => (current === name ? null : name));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__header">
          <h2>Production AI & Cloud Systems</h2>
          <p>
            Production and in-progress platforms I architected, built, and deployed — from cloud
            infrastructure through AI integration and monetization.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const isArchitectureOpen = expandedArchitecture === project.name;

            return (
              <motion.article
                key={project.name}
                className={`project-card${project.featured ? ' project-card--featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectPreview project={project} />

                <div className="project-card__header">
                  <h3>
                    {project.emoji} {project.name}
                  </h3>
                  {project.statusButton && (
                    <span className="badge badge--subtle">{project.statusButton}</span>
                  )}
                </div>

                <div className="project-card__details">
                  <div className="project-card__detail">
                    <p className="project-card__detail-label">Problem</p>
                    <p className="project-card__detail-text">{project.problem}</p>
                  </div>
                  <div className="project-card__detail">
                    <p className="project-card__detail-label">Business Value</p>
                    <p className="project-card__detail-text">{project.businessValue}</p>
                  </div>
                  {isArchitectureOpen && (
                    <motion.div
                      className="project-card__detail project-card__detail--architecture"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="project-card__detail-label">Architecture</p>
                      <p className="project-card__detail-text">{project.architecture}</p>
                    </motion.div>
                  )}
                </div>

                {project.bullets && (
                  <div className="project-card__ownership">
                    <p className="project-card__ownership-title">Full Ownership & Execution</p>
                    <ul className="project-card__bullets">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="chip-group">
                  {project.stack.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.liveUrl ? (
                    <a
                      className="btn btn--primary btn--sm"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="btn btn--sm btn--status" aria-label="In Progress">
                      {project.statusButton}
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      className="btn btn--secondary btn--sm"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  <button
                    type="button"
                    className="btn btn--ghost btn--sm"
                    onClick={() => toggleArchitecture(project.name)}
                    aria-expanded={isArchitectureOpen}
                  >
                    Architecture
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
