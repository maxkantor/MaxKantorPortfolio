import { motion } from 'framer-motion';

const impactItems = [
  'Led platform modernization initiatives across enterprise web and cloud-native systems',
  'Built and scaled engineering teams through hiring, mentoring, and performance frameworks',
  'Owned cloud architecture decisions for AWS serverless and distributed production platforms',
  'Accelerated delivery through CI/CD automation, release governance, and engineering standards',
  'Reduced operational risk with monitoring, alerting, runbooks, and incident response discipline',
  'Aligned engineering roadmaps with product strategy, executive stakeholders, and business outcomes',
  'Drove cross-functional execution across engineering, product, operations, and finance partners',
  'Balanced delivery velocity with architectural quality, cost efficiency, and long-term maintainability',
  'Delivered customer-facing platforms with measurable business impact across multiple industries',
  'Shipped production AI products integrating OpenAI, Bedrock, and modern LLM workflows',
];

const Impact = () => {
  return (
    <section id="impact" className="section">
      <div className="container">
        <div className="section__header">
          <h2>Leadership Impact</h2>
          <p>
            Measurable outcomes across engineering execution, platform reliability, and organizational
            scale.
          </p>
        </div>
        <div className="impact-grid">
          {impactItems.map((item, index) => (
            <motion.div
              key={item}
              className="impact-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="impact-card__bullet" aria-hidden="true" />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
