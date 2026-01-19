import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__header">
          <h2>Hands-on Product Builds</h2>
          <p>Production and in-progress apps I architected, built, and deployed.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => {
            const visibleChips = project.stack.slice(0, 4);
            const extraCount = project.stack.length - visibleChips.length;

            return (
              <article key={project.name} className="project-card">
              <div className="project-card__header">
                <h3>{project.name}</h3>
                  {project.status && (
                    <span className="badge badge--subtle">{project.status}</span>
                  )}
              </div>
              <p className="project-card__value">{project.value}</p>
              <p className="project-card__owned">
                <span>What I owned:</span> {project.owned}
              </p>
              <div className="chip-group">
                {visibleChips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
                {extraCount > 0 && <span className="chip chip--muted">+{extraCount}</span>}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
