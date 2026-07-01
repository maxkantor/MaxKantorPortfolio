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
            <p className="hero__eyebrow">Director of Software Engineering</p>

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
            <p className="hero__headline">Engineering Leader · AI · Cloud · SaaS</p>
            <p className="hero__summary">
              20+ years building enterprise software, leading engineering teams, and delivering
              cloud-native AI products across healthcare, retail, telecom, and SaaS.
            </p>

            <p className="hero__executive-summary">
              Technology executive specializing in cloud-native SaaS, enterprise modernization, and
              AI-powered software delivery. I build high-performing engineering teams, architect
              scalable cloud platforms, and align technology strategy with business goals while
              remaining hands-on with modern software development.
            </p>

            <div className="hero__leadership">
              <p className="hero__leadership-title">How I Lead</p>
              <ul className="hero__leadership-list">
                <li>Set clear engineering standards, delivery cadence, and architectural guardrails</li>
                <li>Mentor engineers through code review, design reviews, and career development</li>
                <li>Improve execution with pragmatic Agile, CI/CD discipline, and measurable outcomes</li>
                <li>Make architectural decisions that balance scale, speed, cost, and business risk</li>
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
                Schedule Interview
              </a>
            </div>

            <p className="hero__status">Open to Director & Senior Engineering Leadership roles</p>
          </motion.div>
        </div>

        <div className="heroRight">
          <motion.div
            className="hero-portrait-frame"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-portrait-frame__mesh" aria-hidden="true" />
            <div className="hero-portrait-frame__grid" aria-hidden="true" />
            <div className="hero-portrait-frame__glow" aria-hidden="true" />
            <div className="portraitOffset">
              <div
                className="heroRight__image"
                role="img"
                aria-label="Max Kantor — Director of Software Engineering"
              />
            </div>
            <div className="hero-portrait-frame__glass" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      <ExecutiveImpactBar />
    </div>
  );
};

export default Hero;
