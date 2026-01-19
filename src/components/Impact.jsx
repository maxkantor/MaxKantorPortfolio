const impactItems = [
  'Led cross-functional delivery across web + cloud products',
  'Built high-performing teams through mentoring, hiring, and feedback',
  'Owned architecture decisions for scalable cloud systems (AWS)',
  'Improved release velocity through CI/CD, code quality, and automation',
  'Reduced incidents by establishing monitoring, alerting, and runbooks',
  'Partnered with Product on roadmap, prioritization, and execution',
  'Drove stakeholder alignment across engineering, product, operations',
  'Balanced speed vs quality using pragmatic engineering standards',
  'Delivered customer-facing features with measurable impact',
  'Shipped AI-enabled product experiences using modern APIs and guardrails',
];

const Impact = () => {
  return (
    <section id="impact" className="section">
      <div className="container">
        <div className="section__header">
          <h2>Leadership Impact</h2>
          <p>
            Executive-level impact focused on delivery, reliability, and scalable execution.
          </p>
        </div>
        <div className="impact-grid">
          {impactItems.map((item) => (
            <div key={item} className="impact-card">
              <span className="impact-card__bullet" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
