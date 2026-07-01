import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const KPI_ITEMS = [
  {
    id: 'experience',
    value: 20,
    suffix: '+',
    label: 'Years Experience',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    countUp: true,
  },
  {
    id: 'leadership',
    value: 15,
    suffix: '+',
    label: 'Years Leadership',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    countUp: true,
  },
  {
    id: 'team',
    value: 6,
    suffix: '+',
    label: 'Engineers Managed',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 17h7M17.5 14v7" />
      </svg>
    ),
    countUp: true,
  },
  {
    id: 'products',
    value: 4,
    suffix: '',
    label: 'AI Products Built',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    countUp: true,
  },
  {
    id: 'aws',
    value: null,
    display: 'AWS',
    label: 'Certified',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    countUp: false,
  },
  {
    id: 'psm',
    value: null,
    display: 'PSM I',
    label: 'Certified',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    countUp: false,
  },
];

const KpiCard = ({ item, index }) => {
  const { ref, value } = useCountUp(item.value ?? 0, { enabled: item.countUp });

  return (
    <motion.article
      ref={ref}
      className="kpi-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="kpi-card__icon">{item.icon}</div>
      <p className="kpi-card__value">
        {item.countUp ? (
          <>
            {value}
            {item.suffix}
          </>
        ) : (
          item.display
        )}
      </p>
      <p className="kpi-card__label">{item.label}</p>
    </motion.article>
  );
};

const ExecutiveImpactBar = () => {
  return (
    <div className="executive-impact">
      <div className="container">
        <div className="executive-impact__grid">
          {KPI_ITEMS.map((item, index) => (
            <KpiCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveImpactBar;
