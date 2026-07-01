const COMPANIES = [
  { name: 'Wintergreen', logo: '/logos/wintergreen.svg' },
  { name: 'Rollins', logo: '/logos/rollins.svg' },
  { name: 'McKesson', logo: '/logos/mckesson.svg' },
  { name: 'NIIT', logo: '/logos/niit.svg' },
];

const CompanyLogos = () => {
  return (
    <div className="company-logos" aria-label="Companies where Max Kantor has led engineering">
      <p className="company-logos__label">Organizations</p>
      <div className="company-logos__grid">
        {COMPANIES.map((company) => (
          <div key={company.name} className="company-logos__item">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              width="140"
              height="40"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
