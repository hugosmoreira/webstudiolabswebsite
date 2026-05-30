import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';
import PricingCard from './PricingCard.jsx';

const PLANS = [
  {
    name: 'Starter Build',
    icon: 'spark',
    desc: 'For simple dashboards, landing pages, or internal tools.',
    features: ['Strategy session', 'Custom UI', 'Core features', 'Basic admin panel'],
  },
  {
    name: 'Business Platform',
    icon: 'cube',
    desc: 'For companies that need a full web app, client portal, or operational system.',
    features: ['Authentication', 'Database', 'Dashboard', 'Admin tools', 'Client portal', 'Integrations'],
    featured: true,
  },
  {
    name: 'SaaS Launch',
    icon: 'rocket',
    desc: 'For founders building a subscription product.',
    features: ['SaaS architecture', 'Subscription billing', 'User dashboard', 'Admin dashboard', 'Launch-ready MVP'],
  },
  {
    name: 'Ongoing Support',
    icon: 'shield',
    desc: 'For businesses that want maintenance, improvements, and new features.',
    features: ['Monthly support', 'Bug fixes', 'Feature improvements', 'Monitoring', 'Consulting'],
  },
];

export default function EngagementModels() {
  return (
    <section className="section pricing-sec" id="pricing">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Engagement models"
            center
            maxw={640}
            title="Flexible ways to build."
            lead="Every project is scoped to fit. No rigid packages, no surprise feature walls."
          />
        </Reveal>
        <div className="price-grid">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 60}>
              <PricingCard {...p} />
            </Reveal>
          ))}
        </div>
        <p className="muted" style={{ textAlign: 'center', marginTop: 28, fontSize: '.9rem' }}>
          Not sure which fits?{' '}
          <a href="#contact" style={{ color: 'var(--accent)', fontWeight: 500 }}>
            Tell us what you’re building
          </a>{' '}
          and we’ll point you the right way.
        </p>
      </div>
    </section>
  );
}
