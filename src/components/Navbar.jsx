import { useState } from 'react';
import { useRouter } from '../utils/router';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home', path: '/' },
  { id: 'impact', label: 'Impact', href: '#impact', path: '/' },
  { id: 'experience', label: 'Experience', href: '#experience', path: '/' },
  { id: 'projects', label: 'Projects', href: '#projects', path: '/' },
  { id: 'skills', label: 'Skills', href: '#skills', path: '/' },
  { id: 'consulting', label: 'Consulting', href: '/consulting', path: '/consulting', isRoute: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { route, navigate } = useRouter();

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  const handleItemClick = (e, item) => {
    handleClose();

    if (item.isRoute) {
      e.preventDefault();
      navigate(item.path, { source: 'navbar' });
      return;
    }

    if (route === 'consulting') {
      e.preventDefault();
      navigate(item.path, { hash: item.href, source: 'navbar_from_consulting' });
      return;
    }

    // On home route, allow native anchor smooth scrolling
  };

  const handleBrandClick = (e) => {
    handleClose();
    if (route === 'consulting') {
      e.preventDefault();
      navigate('/', { source: 'navbar_brand' });
    }
  };

  const handleContactClick = (e) => {
    handleClose();
    // On either page, smooth scroll to #contact
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      e.preventDefault();
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#home" onClick={handleBrandClick}>
          Max Kantor
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`${
                (item.isRoute && route === 'consulting') || (!item.isRoute && item.id === 'home' && route === 'home')
                  ? 'navbar__link--active'
                  : ''
              }`}
              onClick={(e) => handleItemClick(e, item)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={handleContactClick}>
            Contact
          </a>
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
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`${
              (item.isRoute && route === 'consulting') || (!item.isRoute && item.id === 'home' && route === 'home')
                ? 'navbar__link--active'
                : ''
            }`}
            onClick={(e) => handleItemClick(e, item)}
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={handleContactClick}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
