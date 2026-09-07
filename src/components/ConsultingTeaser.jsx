import { motion } from 'framer-motion';
import { useRouter } from '../utils/router';
import { trackConsultingBookClick } from '../utils/analytics';

const CALENDLY_URL = 'https://calendly.com/mykantor/30min';

const TEASER_AREAS = [
  {
    title: 'AI Strategy & Implementation',
    desc: 'LLM application architecture, RAG, agentic workflows, and production integrations.',
  },
  {
    title: 'Software Architecture & Modernization',
    desc: '.NET, React, REST microservices, distributed systems, and technical debt reduction.',
  },
  {
    title: 'AWS & Cloud Architecture',
    desc: 'Serverless architecture, Lambda, DynamoDB, API Gateway, and cloud cost optimization.',
  },
  {
    title: 'Engineering Leadership Advisory',
    desc: 'Org design, hiring, mentoring, delivery governance, and Agile execution.',
  },
  {
    title: 'AI Product & Technology Strategy',
    desc: 'MVP scoping, feasibility analysis, SaaS architecture, and technology roadmaps.',
  },
  {
    title: 'Fractional Engineering Leadership',
    desc: 'High-impact interim leadership, architectural governance, and team alignment.',
  },
];

const ConsultingTeaser = () => {
  const { navigate } = useRouter();

  return (
    <section id="consulting" className="section section--alt consulting-teaser">
      <div className="container">
        <div className="section__header text-center">
          <p className="hero__eyebrow">Available for Select Consulting Engagements</p>
          <h2>AI & Technology Consulting</h2>
          <p className="section__subtitle">
            Senior expertise across AI Strategy, Software Architecture, AWS & Cloud, Engineering
            Leadership, Product Technology, and Fractional Leadership.
          </p>
        </div>

        <div className="consulting-teaser__grid">
          {TEASER_AREAS.map((area, idx) => (
            <motion.div
              key={area.title}
              className="consulting-teaser__card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
            >
              <h3 className="consulting-teaser__card-title">{area.title}</h3>
              <p className="consulting-teaser__card-desc">{area.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="consulting-teaser__footer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="consulting-teaser__rate-pill">
            <span className="consulting-teaser__rate-highlight">
              Engagements starting at $200/hour
            </span>
            <span className="consulting-teaser__rate-sub">
              · Flexible models including advisory, architecture reviews & strategy sprints
            </span>
          </div>

          <div className="consulting-teaser__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => navigate('/consulting', { source: 'teaser_explore_btn' })}
            >
              Explore Consulting Services →
            </button>
            <a
              className="btn btn--secondary"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConsultingBookClick('Homepage Teaser', 'teaser_book_button')}
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingTeaser;
