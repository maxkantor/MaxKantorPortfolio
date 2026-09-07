import { motion } from 'framer-motion';
import { useRouter } from '../utils/router';
import { trackConsultingBookClick } from '../utils/analytics';

const CALENDLY_URL = 'https://calendly.com/mykantor/30min';

const TwoPaths = () => {
  const { navigate } = useRouter();

  return (
    <section id="career-paths" className="section two-paths-section">
      <div className="container">
        <div className="section__header text-center">
          <p className="hero__eyebrow">Two Professional Engagement Paths</p>
          <h2>Full-Time Leadership or Targeted Consulting</h2>
          <p className="section__subtitle">
            Whether your organization needs an executive to lead teams long-term, or senior
            technology expertise for a critical architecture, cloud, or AI initiative right now.
          </p>
        </div>

        <div className="two-paths__grid">
          {/* ─── Path 1: Full-Time Leadership ─── */}
          <motion.div
            className="two-paths__card two-paths__card--leadership"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="two-paths__header">
              <span className="badge badge--subtle">Path 1 · Full-Time Roles</span>
              <h3 className="two-paths__title">Hiring Max for a Leadership Role?</h3>
              <p className="two-paths__roles">
                Engineering Manager · Senior Engineering Manager · Director of Engineering
              </p>
            </div>

            <p className="two-paths__desc">
              20+ years building enterprise platforms and 15+ years leading high-performing
              engineering teams. Proven track record driving engineering execution, architecture
              governance, cloud platform modernization, and AI product delivery across healthcare,
              retail, telecom, and SaaS.
            </p>

            <div className="two-paths__tags">
              <span className="chip">Org Design</span>
              <span className="chip">Architecture Governance</span>
              <span className="chip">Cloud & AWS</span>
              <span className="chip">AI Delivery</span>
              <span className="chip">Agile Execution</span>
            </div>

            <div className="two-paths__actions">
              <a
                className="btn btn--primary btn--sm"
                href="/Max-Kantor-Resume.pdf"
                download="Max-Kantor-Resume.pdf"
              >
                Download Resume
              </a>
              <a
                className="btn btn--secondary btn--sm"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
              <a className="btn btn--ghost btn--sm" href="#experience">
                View Experience ↓
              </a>
            </div>
          </motion.div>

          {/* ─── Path 2: Paid Consulting ─── */}
          <motion.div
            className="two-paths__card two-paths__card--consulting"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="two-paths__header">
              <span className="badge badge--accent">Path 2 · Select Engagements</span>
              <h3 className="two-paths__title">Need Senior Technology Expertise Now?</h3>
              <p className="two-paths__roles">
                AI · Architecture · Cloud · Engineering Leadership · Product Strategy
              </p>
            </div>

            <p className="two-paths__desc">
              Direct, hands-on advisory and architecture for founders, CTOs, and product
              organizations. Practical guidance to move AI from idea to production, evaluate cloud
              systems, eliminate architectural bottlenecks, or provide fractional leadership.
            </p>

            <div className="two-paths__rate-box">
              <span className="two-paths__rate-label">Engagement Pricing</span>
              <span className="two-paths__rate-value">Consulting engagements starting at $200/hour</span>
            </div>

            <div className="two-paths__actions">
              <button
                type="button"
                className="btn btn--primary btn--sm"
                onClick={() => navigate('/consulting', { source: 'two_paths_card' })}
              >
                Explore Consulting →
              </button>
              <a
                className="btn btn--secondary btn--sm"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConsultingBookClick('Two Paths Card', 'two_paths_button')}
              >
                Book a Consultation
              </a>
              <a className="btn btn--ghost btn--sm" href="#consulting">
                Quick Summary ↓
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwoPaths;
