import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { trackConsultingView } from './analytics';

const RouterContext = createContext({
  route: 'home',
  path: '/',
  navigate: () => {},
});

const getRouteFromLocation = () => {
  if (typeof window === 'undefined') return 'home';

  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '');
  const hash = window.location.hash.toLowerCase();

  if (pathname === '/consulting' || hash === '#/consulting' || hash === '#consulting') {
    return 'consulting';
  }

  return 'home';
};

export const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState(getRouteFromLocation);

  const updateMeta = useCallback((currentRoute) => {
    if (typeof document === 'undefined') return;

    if (currentRoute === 'consulting') {
      document.title = 'AI & Technology Consulting | Max Kantor';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Senior technology leadership for AI, architecture, cloud, engineering organizations and product development. Consulting engagements starting at $200/hour.'
        );
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'AI & Technology Consulting | Max Kantor');
    } else {
      document.title = 'Max Kantor | Software Engineering Leadership | AI · Cloud · SaaS';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Technology leader with 20+ years building enterprise software and 15+ years leading engineering teams. Cloud platforms, AI products, and engineering execution across healthcare, retail, telecom, and SaaS.'
        );
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Max Kantor | Software Engineering Leadership | AI · Cloud · SaaS');
    }
  }, []);

  const navigate = useCallback((targetPath, options = {}) => {
    if (typeof window === 'undefined') return;

    const { hash = '', replace = false, source = 'navigation' } = options;
    const cleanPath = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
    const url = hash ? `${cleanPath}${hash.startsWith('#') ? hash : `#${hash}`}` : cleanPath;

    if (replace) {
      window.history.replaceState({}, '', url);
    } else {
      window.history.pushState({}, '', url);
    }

    const newRoute = cleanPath.toLowerCase().replace(/\/$/, '') === '/consulting' ? 'consulting' : 'home';
    setRoute(newRoute);
    updateMeta(newRoute);

    if (newRoute === 'consulting') {
      trackConsultingView(source);
    }

    if (hash) {
      const element = document.querySelector(hash.startsWith('#') ? hash : `#${hash}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [updateMeta]);

  useEffect(() => {
    const handlePopState = () => {
      const currentRoute = getRouteFromLocation();
      setRoute(currentRoute);
      updateMeta(currentRoute);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    // Initial meta setup
    const initialRoute = getRouteFromLocation();
    updateMeta(initialRoute);
    if (initialRoute === 'consulting') {
      trackConsultingView('direct_url');
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [updateMeta]);

  const value = {
    route,
    path: route === 'consulting' ? '/consulting' : '/',
    navigate,
  };

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = () => useContext(RouterContext);
