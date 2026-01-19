import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <h2>Experience</h2>
          <p>Leadership roles delivering reliable software at scale.</p>
        </div>
        <div className="experience-list">
          {experience.map((role) => (
            <article key={`${role.company}-${role.title}`} className="experience-card">
              <div className="experience-card__header">
                <div>
                  <h3>{role.title}</h3>
                  <p className="experience-card__company">{role.company}</p>
                </div>
                <span className="experience-card__dates">{role.dates}</span>
              </div>
              <p className="experience-card__scope">{role.scope}</p>
              <ul>
                {role.impacts.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ul>
              <p className="experience-card__tech">
                <span>Tech:</span> {role.tech}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
