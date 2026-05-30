import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import HeroDashboard from './HeroDashboard.jsx';
import TrustBar from './TrustBar.jsx';

export default function Hero() {
  return (
    <section className="hero grid-bg" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal as="div">
            <div className="hero-pill">
              <span className="badge badge-accent" style={{ fontSize: '.7rem' }}>
                Software Studio
              </span>
              <span style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Web · Mobile · Dashboards · AI</span>
            </div>
            <h1 className="h-display" style={{ marginTop: 22 }}>
              Custom software built around the way your business{' '}
              <span className="grad-text">actually works.</span>
            </h1>
            <p className="lead" style={{ marginTop: 22, maxWidth: 540 }}>
              We design and build web apps, mobile apps, dashboards, client portals, SaaS MVPs, and AI-powered
              automation systems that replace manual work and help your business scale.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary btn-lg">
                Book a Free Strategy Call
                <Icon name="arrowRight" size={17} />
              </a>
              <a href="#services" className="btn btn-ghost btn-lg">
                <Icon name="grid" size={16} />
                View What We Build
              </a>
            </div>
            <p className="hero-foot">
              <Icon name="sparkles" size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              Built for founders, operators, and businesses tired of forcing their workflow into generic software.
            </p>
          </Reveal>
        </div>
        <Reveal delay={120} className="hero-visual">
          <HeroDashboard />
        </Reveal>
      </div>
      <div className="wrap">
        <TrustBar />
      </div>
    </section>
  );
}
