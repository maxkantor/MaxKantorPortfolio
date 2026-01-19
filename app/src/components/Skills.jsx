const skills = [
  {
    title: 'Leadership & Delivery',
    items: ['Team leadership', 'Hiring & mentoring', 'Roadmaps', 'Execution rhythms'],
  },
  {
    title: 'Cloud & Architecture (AWS)',
    items: ['Systems design', 'Scalability', 'Reliability', 'Cost optimization'],
  },
  {
    title: 'Backend (.NET, APIs)',
    items: ['.NET', 'REST APIs', 'Microservices', 'Authentication'],
  },
  {
    title: 'Frontend (React)',
    items: ['React', 'UX delivery', 'Performance', 'Accessibility'],
  },
  {
    title: 'Data (SQL/DynamoDB)',
    items: ['SQL Server', 'DynamoDB', 'Data modeling', 'Reporting'],
  },
  {
    title: 'AI/LLM Integration',
    items: ['Prompt design', 'Guardrails', 'Evaluation', 'Product workflows'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <h2>Skills</h2>
          <p>Focused, modern capabilities aligned to engineering leadership roles.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="skills-card">
              <h3>{group.title}</h3>
              <div className="chip-group">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
