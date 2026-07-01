import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Engineering Leadership',
    items: ['Org design', 'Hiring & mentoring', 'Technical strategy', 'Delivery governance'],
  },
  {
    title: 'Cloud & Platform Architecture',
    items: ['AWS serverless', 'Systems design', 'Scalability', 'Cost optimization'],
  },
  {
    title: 'Backend Engineering',
    items: ['.NET / .NET Core', 'REST APIs', 'Microservices', 'Enterprise integration'],
  },
  {
    title: 'Frontend & Product',
    items: ['React', 'TypeScript', 'UX delivery', 'Conversion optimization'],
  },
  {
    title: 'Data & Infrastructure',
    items: ['SQL Server', 'DynamoDB', 'CI/CD pipelines', 'IaC & observability'],
  },
  {
    title: 'AI & Applied LLMs',
    items: ['OpenAI APIs', 'AWS Bedrock', 'Guardrails', 'AI product workflows'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <h2>Technical Leadership</h2>
          <p>
            Executive-level capabilities spanning engineering culture, cloud platforms, and modern
            product delivery.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              className="skills-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>{group.title}</h3>
              <div className="chip-group">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
