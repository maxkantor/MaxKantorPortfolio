const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__name">Max Kantor</p>
          <p className="footer__tagline">Software Engineering Leader • AI + Cloud • AWS</p>
        </div>

        <div className="footer__center">© 2026 Max Kantor</div>

        <nav className="footer__right" aria-label="Footer links">
          <a className="footer__link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="footer__dot" aria-hidden="true">•</span>
          <a className="footer__link" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="footer__dot" aria-hidden="true">•</span>
          <a className="footer__link" href="mailto:mykantor@bellsouth.net">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
