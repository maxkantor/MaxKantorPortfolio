import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import CompanyLogos from './CompanyLogos.jsx';

const Experience = () => {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <h2>Experience</h2>
          <p>
            Engineering leadership across enterprise modernization, cloud transformation, and
            product delivery at scale.
          </p>
        </div>

        <CompanyLogos />

        <div className="experience-list">
          {experience.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.title}`}
              className="experience-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
