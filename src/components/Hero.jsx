import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function Hero() {
  return (
    <section className="hero hero-solo grid-bg" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap">
        <Reveal as="div" className="hero-copy">
          <div className="hero-pill">
            <span className="badge badge-accent" style={{ fontSize: '.7rem' }}>
              Independent Technology Studio
            </span>
            <span style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Custom Software · Platforms · Mobile · Web</span>
          </div>
          <h1 className="h-display" style={{ marginTop: 22 }}>
            Custom software, apps, and platforms{' '}
            <span className="grad-text">built around your business.</span>
          </h1>
          <p className="lead" style={{ marginTop: 22 }}>
            We turn business problems into working software, end to end — through strategy, design, and
            engineering for businesses, founders, and creators.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a Project
              <Icon name="arrowRight" size={17} />
            </a>
            <a href="#services" className="btn btn-ghost btn-lg">
              <Icon name="grid" size={16} />
              See What We Build
            </a>
          </div>
          <p className="hero-foot">
            <Icon name="sparkles" size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            One studio from first idea to launch — for businesses that need more than generic software.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
