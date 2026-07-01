import { motion } from 'framer-motion';
import ExecutiveImpactBar from './ExecutiveImpactBar.jsx';

const LINKEDIN_URL = 'https://www.linkedin.com/in/maxim-kantor-0a423125/';

const Hero = () => {
  return (
    <div className="hero-section">
      <section id="home" className="hero">
        <div className="heroLeft">
          <motion.div
            className="heroContent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero__eyebrow">Software Engineering Leadership</p>

            <div className="hero__chips" aria-label="Core expertise">
              <span className="hero__chip">20+ Years</span>
              <span className="hero__chip">15+ Years Leadership</span>
              <span className="hero__chip">AWS</span>
              <span className="hero__chip">AI</span>
              <span className="hero__chip">Cloud</span>
              <span className="hero__chip">SaaS</span>
              <span className="hero__chip">Enterprise</span>
            </div>

            <h1>Max Kantor</h1>
            <p className="hero__headline">
              Building High-Performing Engineering Teams · Cloud Platforms · AI Products
            </p>

            <p className="hero__executive-summary">
              Technology leader with 20+ years building enterprise software and 15+ years leading
              engineering teams across healthcare, retail, telecom, SaaS, and AI-powered products.
              I help organizations modernize platforms, improve engineering execution, build scalable
              cloud solutions, and deliver software aligned with business goals while remaining
              hands-on with architecture and modern development.
            </p>

            <div className="hero__leadership">
              <p className="hero__leadership-title">Engineering Leadership</p>
              <ul className="hero__leadership-list">
                <li>Build engineering culture rooted in accountability, craftsmanship, and delivery excellence</li>
                <li>Mentor engineers through coaching, code review, and architecture guidance</li>
                <li>Establish architecture governance that balances scale, reliability, and business risk</li>
                <li>Drive predictable execution through Agile discipline, CI/CD, and measurable outcomes</li>
                <li>Align technology strategy with product priorities and stakeholder goals</li>
              </ul>
            </div>

            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href="/Max-Kantor-Resume.pdf"
                download="Max-Kantor-Resume.pdf"
              >
                Download Resume
              </a>
              <a
                className="btn btn--secondary"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn btn--ghost" href="#contact">
                Contact Me
              </a>
              <a className="btn btn--ghost" href="#contact">
                Schedule a Call
              </a>
            </div>

            <p className="hero__status">
              Open to Engineering Manager, Senior Engineering Manager & Director roles
            </p>
          </motion.div>
        </div>

        <div className="heroRight">
          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-portrait__glow" aria-hidden="true" />
            <img
              src="/max-kantor-headshot.jpg"
              alt="Max Kantor — Software Engineering Leader"
              className="hero-portrait__img"
              width={600}
              height={800}
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      <ExecutiveImpactBar />
    </div>
  );
};

export default Hero;
