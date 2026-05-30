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
                Whether you need a dashboard, portal, mobile app, SaaS MVP, or AI automation system, WebStudioLabs
                can help you turn the idea into a working product.
              </p>
              <div className="hero-btns" style={{ marginTop: 30, justifyContent: 'center' }}>
                <a href="#contact" className="btn btn-primary btn-lg">
                  Book a Free Strategy Call
                  <Icon name="arrowRight" size={17} />
                </a>
                <a
                  href="#contact"
                  className="btn btn-lg"
                  style={{ background: 'rgba(255,255,255,.1)', color: '#fff', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.22)' }}
                >
                  <Icon name="inbox" size={16} />
                  Send a Project Request
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
