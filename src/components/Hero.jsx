import { motion } from 'framer-motion';
import ExecutiveImpactBar from './ExecutiveImpactBar.jsx';
import { useRouter } from '../utils/router.jsx';

const LINKEDIN_URL = 'https://www.linkedin.com/in/maxim-kantor-0a423125/';
const CALENDLY_URL = 'https://calendly.com/mykantor/30min';

const Hero = () => {
  const { navigate } = useRouter();

  return (
    <div className="hero-section">
      <section id="home" className="hero">
        <motion.div
          className="hero__intro"
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
        </motion.div>

        <div className="hero__right">
          <motion.div
            className="heroPortraitWrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="heroPortraitCard">
              <img
                src="/max-kantor-hero.png"
                alt="Max Kantor, software engineering leader, in a modern office"
                className="heroPortraitImage"
                width={1024}
                height={819}
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.aside
            className="hero__profile"
            aria-label="Engineering Leadership profile"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero__profile-title">Engineering Leadership</p>
            <p className="hero__profile-focus">Teams · Architecture · Cloud · AI · Delivery</p>
            <div className="hero__profile-metrics">
              <div className="hero__profile-metric">
                <p className="hero__profile-metric-value">20+ Years</p>
                <p className="hero__profile-metric-label">Software Engineering</p>
              </div>
              <div className="hero__profile-metric">
                <p className="hero__profile-metric-value">15+ Years</p>
                <p className="hero__profile-metric-label">Engineering Leadership</p>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="hero__summary"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero__executive-summary">
            Technology leader with 20+ years building enterprise software and 15+ years leading
            engineering teams across healthcare, retail, telecom, SaaS, and AI-powered products.
            I help organizations modernize platforms, improve engineering execution, build scalable
            cloud solutions, and deliver software aligned with business goals while remaining
            hands-on with architecture and modern development.
          </p>
        </motion.div>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
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
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
            <button
              type="button"
              className="btn btn--ghost btn--consulting"
              onClick={() => navigate('/consulting', { source: 'hero_actions_btn' })}
            >
              Consulting
            </button>
            <a
              className="btn btn--ghost"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <p className="hero__status">
            Open to Engineering Manager, Senior Engineering Manager & Director roles
          </p>

          <div className="hero__consulting-callout">
            <div className="hero__consulting-callout-text">
              <span className="hero__consulting-callout-eyebrow">Available for Select Consulting Engagements</span>
              <p className="hero__consulting-callout-focus">
                AI · Architecture · Cloud · Engineering Leadership · Product Strategy
              </p>
              <span className="hero__consulting-callout-rate">Starting at $200/hour</span>
            </div>
            <button
              type="button"
              className="btn btn--secondary btn--sm hero__consulting-callout-btn"
              onClick={() => navigate('/consulting', { source: 'hero_callout_btn' })}
            >
              Explore Consulting →
            </button>
          </div>
        </motion.div>
      </section>

      <ExecutiveImpactBar />
    </div>
  );
};

export default Hero;
