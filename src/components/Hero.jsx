const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="container hero__content">
        <p className="eyebrow">Software Engineering Leader</p>
        <h1>Max Kantor</h1>
        <h2>Software Engineering Leader | AI + Cloud & Full-Stack Delivery (AWS)</h2>
        <p className="hero__summary">
          I’m a software engineering leader with hands-on strength in AWS and full-stack
          delivery. I lead teams, drive execution, and ship production systems end-to-end —
          from architecture and roadmap planning to reliable deployment, monitoring, and
          growth.
        </p>
        <ul className="hero__bullets">
          <li>Engineering leadership & mentoring (teams 5–15+)</li>
          <li>Cloud architecture (AWS: Amplify, Lambda, API Gateway, DynamoDB, CloudWatch)</li>
          <li>Full-stack delivery (.NET backend + React UI)</li>
          <li>AI integration (LLM APIs, guardrails, UX, and operational readiness)</li>
        </ul>
        <div className="hero__leadership">
          <p className="hero__leadership-title">Leadership Style</p>
          <p className="hero__leadership-text">
            Collaborative management style: Open Communication • Teamwork • Transparency
          </p>
          <p className="hero__leadership-text">
            Communication framework: STAR (Situation, Task, Action, Result)
          </p>
        </div>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#impact">
            View Leadership Impact
          </a>
          <a className="btn btn--ghost" href="#projects">
            View Live Projects
          </a>
        </div>
        <p className="hero__status">Open to Engineering Leadership opportunities</p>
        <p className="hero__trust">AWS • .NET • React • Delivery Leadership • AI Integration</p>
      </div>
    </section>
  );
};

export default Hero;
