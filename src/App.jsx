import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WorkSection from './components/WorkSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import CreatorPlatformsSection from './components/CreatorPlatformsSection.jsx';
import StudioProductsSection from './components/StudioProductsSection.jsx';
import StudioSection from './components/StudioSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // The browser's own jump to a #section runs before React renders the sections, so redo it once mounted
  // and again on load, which can reset the position when arriving from another page.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    go();
    window.addEventListener('load', go, { once: true });
    return () => window.removeEventListener('load', go);
  }, []);

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <WorkSection />
        <ServicesSection />
        <CreatorPlatformsSection />
        <StudioProductsSection />
        <StudioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
