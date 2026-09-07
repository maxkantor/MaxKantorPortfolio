import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TwoPaths from './components/TwoPaths.jsx';
import ConsultingTeaser from './components/ConsultingTeaser.jsx';
import ConsultingPage from './components/ConsultingPage.jsx';
import Impact from './components/Impact.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import PremiumBackground from './components/PremiumBackground.jsx';
import { RouterProvider, useRouter } from './utils/router.jsx';

const AppContent = () => {
  const { route } = useRouter();

  return (
    <>
      <PremiumBackground />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        {route === 'consulting' ? (
          <ConsultingPage />
        ) : (
          <>
            <Hero />
            <TwoPaths />
            <ConsultingTeaser />
            <Impact />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
};

export default App;
