import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function CTASection() {
  return (
    <section className="section-tight cta-sec">
      <div className="wrap">
        <Reveal>
          <div className="cta-panel grid-bg">
            <div className="cta-glow" aria-hidden="true" />
            <div className="cta-inner">
              <span className="badge badge-accent" style={{ background: 'rgba(255,255,255,.12)', color: '#fff' }}>
                Let’s build
              </span>
              <h2 className="h1" style={{ color: '#fff', marginTop: 18, maxWidth: 760 }}>
                Let’s build the system your business actually needs.
              </h2>
              <p style={{ color: 'rgba(255,255,255,.66)', fontSize: '1.1rem', marginTop: 16, maxWidth: 620 }}>
                Whether it’s a platform, a mobile app, internal software, or a new product, Web Studio Labs takes
                it from the problem to a working product.
              </p>
              <div className="hero-btns" style={{ marginTop: 30, justifyContent: 'center' }}>
                <a href="#contact" className="btn btn-primary btn-lg">
                  Start a Project
                  <Icon name="arrowRight" size={17} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
