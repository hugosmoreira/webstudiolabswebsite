import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import SolutionSection from './components/SolutionSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import UseCasesSection from './components/UseCasesSection.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import ComparisonSection from './components/ComparisonSection.jsx';
import WorkSection from './components/WorkSection.jsx';
import EngagementModels from './components/EngagementModels.jsx';
import CTASection from './components/CTASection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <UseCasesSection />
        <ProcessSection />
        <ComparisonSection />
        <WorkSection />
        <EngagementModels />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
