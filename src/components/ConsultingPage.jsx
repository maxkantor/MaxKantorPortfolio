import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CONSULTING_SERVICES,
  ENGAGEMENT_OPTIONS,
  CREDIBILITY_METRICS,
  WHO_I_WORK_WITH,
} from '../data/consulting';
import { projects } from '../data/projects';
import Contact from './Contact';
import {
  trackConsultingBookClick,
  trackServiceClick,
} from '../utils/analytics';
import { useRouter } from '../utils/router';

const CALENDLY_URL = 'https://calendly.com/mykantor/30min';

const ConsultingPage = () => {
  const { navigate } = useRouter();
  const [selectedInterest, setSelectedInterest] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleBookClick = (service = 'General Consultation', source = 'hero') => {
    trackConsultingBookClick(service, source);
  };

  const handleServiceSelect = (service) => {
    trackServiceClick(service.eventType, service.title, 'service_card');
    setSelectedInterest(service.formInterest);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEngagementSelect = (option) => {
    trackServiceClick(option.eventType, option.title, 'engagement_card');
    if (option.ctaAction === 'calendly') {
      trackConsultingBookClick(option.title, 'engagement_card');
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedInterest(option.formInterest);
    if (option.budgetPrefill) {
      setSelectedBudget(option.budgetPrefill);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const proofProjects = projects.filter((p) =>
    ['AIWorkoutNow', 'GetTrainMate', 'DoctorAIBolit', 'YouTubeBoosterAI', 'LuckyNumbersLab'].includes(
      p.name
    )
  );

  return (
    <div className="consulting-page">
      {/* ─── Hero Section ─── */}
      <section className="consulting-hero section">
        <div className="container">
          <motion.div
            className="consulting-hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="consulting-hero__eyebrow-wrap">
              <span className="hero__eyebrow">Available for Select Consulting Engagements</span>
              <span className="consulting-hero__rate-badge">Starting at $200/hour</span>
            </div>

            <h1 className="consulting-hero__title">AI & Technology Consulting</h1>

            <p className="consulting-hero__headline">
              Senior technology leadership for AI, architecture, cloud, engineering organizations,
              and product development.
            </p>

            <p className="consulting-hero__copy">
              Practical technology guidance from someone who has spent more than two decades building
              software, leading engineering teams, and shipping real products.
            </p>

            <div className="consulting-hero__actions">
              <a
                className="btn btn--primary"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBookClick('Hero Consultation', 'hero_primary')}
              >
                Book a Consultation
              </a>
              <a className="btn btn--secondary" href="#services">
                Explore Services
              </a>
            </div>

            <div className="consulting-hero__dual-path-note">
              <span className="consulting-hero__note-icon" aria-hidden="true">
                💼
              </span>
              <span>
                <strong>Also hiring for full-time executive leadership?</strong> Max is actively
                considering Engineering Manager, Senior Engineering Manager & Director roles.{' '}
                <button
                  type="button"
                  className="consulting-link-btn"
                  onClick={() => navigate('/', { source: 'consulting_dual_note' })}
                >
                  View full leadership portfolio →
                </button>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Credibility Section (Why Work With Max?) ─── */}
      <section id="credibility" className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Why Work With Max?</h2>
            <p className="section__subtitle">
              Max combines senior engineering leadership with hands-on architecture and product
              development. Recommendations are grounded in experience building and operating real
              software systems.
            </p>
          </div>

          <div className="consulting-credibility__grid">
            {CREDIBILITY_METRICS.map((metric, idx) => (
              <motion.div
                key={metric.label}
                className="consulting-credibility__card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="consulting-credibility__value">{metric.value}</div>
                <div className="consulting-credibility__label">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Consulting Services (6 Services) ─── */}
      <section id="services" className="section">
        <div className="container">
          <div className="section__header">
            <h2>Consulting Services</h2>
            <p className="section__subtitle">
              Engagements structured for focused impact, practical execution, and zero unnecessary
              overhead.
            </p>
          </div>

          <div className="consulting-services__grid">
            {CONSULTING_SERVICES.map((service, index) => (
              <motion.article
                key={service.id}
                className={`consulting-service-card ${
                  service.id === 'fractional-leadership' ? 'consulting-service-card--featured' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="consulting-service-card__header">
                  <div className="consulting-service-card__badge-row">
                    <span className="badge badge--accent">{service.pricing}</span>
                    {service.id === 'fractional-leadership' && (
                      <span className="badge badge--subtle">High Impact</span>
                    )}
                  </div>
                  <h3 className="consulting-service-card__title">{service.title}</h3>
                  <p className="consulting-service-card__headline">{service.headline}</p>
                </div>

                <p className="consulting-service-card__desc">{service.description}</p>

                {service.pricingNote && (
                  <p className="consulting-service-card__pricing-note">{service.pricingNote}</p>
                )}

                <div className="consulting-service-card__areas">
                  <p className="consulting-service-card__areas-title">Areas of Expertise</p>
                  <ul className="consulting-service-card__list">
                    {service.areas.map((area) => (
                      <li key={area}>
                        <span className="consulting-bullet-cyan">✓</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.note && (
                  <p className="consulting-service-card__note">
                    <em>{service.note}</em>
                  </p>
                )}

                <div className="consulting-service-card__footer">
                  <button
                    type="button"
                    className="btn btn--secondary btn--sm consulting-service-card__btn"
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service.ctaText} →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ways to Work With Max (Engagement Options) ─── */}
      <section id="ways-to-work" className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Ways to Work With Max</h2>
            <p className="section__subtitle">
              Clear engagement options designed for agility, transparent pricing, and measurable
              technical outcomes.
            </p>
          </div>

          <div className="consulting-options__grid">
            {ENGAGEMENT_OPTIONS.map((option, idx) => (
              <motion.div
                key={option.id}
                className="consulting-option-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <div className="consulting-option-card__header">
                  <h3 className="consulting-option-card__title">{option.title}</h3>
                  <div className="consulting-option-card__rate">{option.rate}</div>
                </div>

                <p className="consulting-option-card__desc">{option.description}</p>

                <div className="consulting-option-card__deliverables">
                  <p className="consulting-option-card__deliv-title">Typical Scope & Deliverables</p>
                  <ul className="consulting-option-card__list">
                    {option.deliverables.map((item) => (
                      <li key={item}>
                        <span className="consulting-bullet-cyan">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {option.deliverablesNote && (
                  <p className="consulting-option-card__note">{option.deliverablesNote}</p>
                )}

                <button
                  type="button"
                  className={`btn ${
                    option.ctaAction === 'calendly' ? 'btn--primary' : 'btn--secondary'
                  } btn--sm consulting-option-card__btn`}
                  onClick={() => handleEngagementSelect(option)}
                >
                  {option.ctaText} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Shipped Systems as Consulting Proof ─── */}
      <section id="proof" className="section">
        <div className="container">
          <div className="section__header">
            <h2>Proven Technical Execution</h2>
            <p className="section__subtitle">
              Max does not just advise — he designs, architects, builds, and deploys production
              cloud and AI platforms. Real examples from active and launched systems:
            </p>
          </div>

          <div className="consulting-proof__grid">
            {proofProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                className="consulting-proof-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="consulting-proof-card__header">
                  <span className="consulting-proof-card__emoji" aria-hidden="true">
                    {project.emoji}
                  </span>
                  <div>
                    <h3 className="consulting-proof-card__name">{project.name}</h3>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="consulting-proof-card__link"
                      >
                        {new URL(project.liveUrl).hostname} ↗
                      </a>
                    )}
                  </div>
                </div>

                <p className="consulting-proof-card__value">{project.value}</p>

                <div className="consulting-proof-card__section">
                  <span className="consulting-proof-card__section-label">Architecture</span>
                  <p className="consulting-proof-card__section-text">{project.architecture}</p>
                </div>

                <div className="chip-group">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who I Work With ─── */}
      <section id="clients" className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Who I Work With</h2>
            <p className="section__subtitle">
              Collaborating with technical and executive leaders to ship modern architectures and
              build resilient engineering practices.
            </p>
          </div>

          <div className="consulting-who__grid">
            {WHO_I_WORK_WITH.map((clientType, idx) => (
              <motion.div
                key={clientType}
                className="consulting-who__pill"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <span className="consulting-bullet-cyan">✦</span>
                <span>{clientType}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Inquiry & Booking Section ─── */}
      <div id="contact-section">
        <Contact
          key={`${selectedInterest || 'default'}-${selectedBudget || 'default'}`}
          initialInterest={selectedInterest || 'AI Strategy & Implementation'}
          initialBudget={selectedBudget}
          isConsultingView={true}
        />
      </div>
    </div>
  );
};

export default ConsultingPage;
