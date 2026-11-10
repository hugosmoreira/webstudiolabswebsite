import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';
import ServiceCard from './ServiceCard.jsx';

const SERVICES = [
  {
    icon: 'layout',
    title: 'Custom Software & Platforms',
    desc: 'Web applications, SaaS products, dashboards, and business systems designed around the people who use them.',
    examples: ['Customer portals', 'Internal tools & dashboards', 'Memberships & marketplaces', 'Integrations'],
  },
  {
    icon: 'mobile',
    title: 'Mobile Applications',
    desc: 'Mobile experiences for businesses, communities, and digital products, connected to the systems behind them.',
    examples: ['Customer & member apps', 'Event & community apps', 'Mobile-first web apps', 'Connected to your backend'],
  },
  {
    icon: 'sparkles',
    title: 'Product Design & Websites',
    desc: 'Clear interfaces and websites that connect your brand, your product, and the people you want to reach.',
    examples: ['Product discovery', 'UI/UX design', 'Marketing websites', 'Design systems'],
  },
];

export default function ServicesSection() {
  return (
    <section className="section services-sec" id="services">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Capabilities" maxw={720} title="From an idea to a working product." />
        </Reveal>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <ServiceCard num={'0' + (i + 1)} {...s} />
            </Reveal>
          ))}
        </div>
        <p className="svc-note muted">
          AI features where they genuinely help, like the narration in Voxian — never as a requirement for every
          project.
        </p>
      </div>
    </section>
  );
}
