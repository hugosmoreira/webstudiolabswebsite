import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import { BrowserFrame } from '../ui/Frames.jsx';
import { SUG } from '../data/projects.js';

export default function Hero() {
  return (
    <section className="hero grid-bg" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <Reveal as="div" className="hero-copy">
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            <span className="kicker-line" />
            Independent technology studio
          </div>
          <h1 className="h-display">
            Custom software, apps, and platforms <span className="grad-text">built around your business.</span>
          </h1>
          <p className="lead" style={{ marginTop: 22, maxWidth: 560 }}>
            We turn business problems into working software, end to end — through strategy, design, and
            engineering for businesses, founders, and creators.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a Project
              <Icon name="arrowRight" size={17} />
            </a>
            <a href="#work" className="btn btn-ghost btn-lg">
              Explore Our Work
            </a>
          </div>
          <p className="hero-foot">Custom Software · Platforms · Mobile Apps · Websites</p>
        </Reveal>
        <Reveal delay={120} className="hero-visual">
          <BrowserFrame shot={SUG.shots.home} host={SUG.host} eager />
          <a href="#work" className="hero-caption">
            <span className="badge badge-accent">{SUG.relationship}</span>
            <span>
              <strong>{SUG.name}</strong> · {SUG.role}
            </span>
            <Icon name="arrowRight" size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
