import { projects, COMMON_STACK } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__header">
          <h2>🚀 Production AI & Cloud Systems</h2>
          <p>Production and in-progress apps I architected, built, and deployed.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
              <div className="project-card__header">
                <h3>{project.emoji} {project.name}</h3>
                {project.status && (
                  <span className="badge badge--subtle">{project.status}</span>
                )}
              </div>
              <p className="project-card__value">{project.value}</p>
              {project.bullets && (
                <div className="project-card__ownership">
                  <p className="project-card__ownership-title">Full Ownership & Execution</p>
                  <ul className="project-card__bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="project-card__common">Common across all apps: {COMMON_STACK}</p>
                </div>
              )}
              <div className="chip-group">
                {project.stack.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <div className="project-card__actions">
                  <a
                    className="btn btn--primary btn--sm"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
