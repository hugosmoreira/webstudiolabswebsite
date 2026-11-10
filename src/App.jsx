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
