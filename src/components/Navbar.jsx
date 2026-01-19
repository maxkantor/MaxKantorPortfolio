import { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#home" onClick={handleClose}>
          Max Kantor
        </a>
        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="navbar__toggle"
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-menu"
        className={`navbar__mobile ${isOpen ? 'is-open' : ''}`}
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleClose}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={handleClose}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
