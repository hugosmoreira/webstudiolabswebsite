import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';
import ServiceCard from './ServiceCard.jsx';

const SERVICES = [
  ['layout', 'Custom Web Applications', 'Business applications built for your exact operations — from scheduling systems to internal tools and customer portals.', ['Role-based dashboards', 'Forms & workflows', 'Admin panels', 'Secure databases']],
  ['mobile', 'Mobile Applications', 'Modern mobile experiences for customers, staff, communities, events, and service-based businesses.', ['iOS / Android-ready UI', 'User accounts', 'Push-notification structure', 'App dashboard integration']],
  ['bars', 'Internal Dashboards', 'Centralized dashboards that help you see your business clearly and make faster decisions.', ['Live metrics', 'Reports', 'Staff activity', 'Project tracking']],
  ['portal', 'Client Portals', 'A professional place for clients to log in, view progress, manage subscriptions, send messages, and access files.', ['Client login', 'Project status', 'Billing', 'Deliverables']],
  ['rocket', 'SaaS MVP Development', 'Turn your idea into a real subscription product with auth, database, payments, and user dashboards.', ['Auth & database', 'Subscription billing', 'Admin dashboard', 'Launch-ready MVP']],
  ['bot', 'AI Assistants & Automation', 'Automate repetitive communication, intake, scheduling, support, reporting, and document workflows.', ['AI chat assistants', 'Voice workflows', 'Automated emails', 'Internal knowledge tools']],
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Capabilities"
            maxw={720}
            title="What WebStudioLabs builds"
            lead="One studio for the whole stack — from the first dashboard to a full subscription platform."
          />
        </Reveal>
        <div className="svc-grid">
          {SERVICES.map(([icon, title, desc, features], i) => (
            <Reveal key={title} delay={(i % 3) * 70}>
              <ServiceCard
                icon={icon}
                letter={String.fromCharCode(65 + i)}
                title={title}
                desc={desc}
                features={features}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
