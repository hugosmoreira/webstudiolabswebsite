import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import ContactForm from './ContactForm.jsx';

const FIT = ['Founders & operators', 'Service & local businesses', 'Teams replacing spreadsheets', 'SaaS builders & startups'];

export default function ContactSection() {
  return (
    <section className="section contact-sec" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal className="contact-form-wrap">
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="kicker-line" />
              Start a project
            </div>
            <h2 className="h1">Tell us what you want to build.</h2>
            <p className="lead" style={{ marginTop: 14, marginBottom: 28 }}>
              A few details and we’ll come prepared. No pressure, no generic pitch.
            </p>
            <ContactForm />
          </Reveal>
          <Reveal delay={120} className="contact-aside">
            <div className="card card-pad aside-fit">
              <div className="icon-chip" style={{ width: 46, height: 46 }}>
                <Icon name="target" size={22} />
              </div>
              <h3 className="h3" style={{ marginTop: 16 }}>
                Best fit for…
              </h3>
              <p className="muted" style={{ marginTop: 8 }}>
                Businesses ready to build serious internal tools, platforms, dashboards, or automation systems.
              </p>
              <div className="aside-list">
                {FIT.map((t) => (
                  <div key={t} className="aside-item">
                    <Icon name="check" size={15} style={{ color: 'var(--accent)' }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="card card-pad aside-contact">
              <a className="aside-c-row" href="mailto:hello@webstudiolabs.com">
                <Icon name="mail" size={17} style={{ color: 'var(--accent)' }} />
                hello@webstudiolabs.com
              </a>
              <div className="aside-c-row">
                <Icon name="clock" size={17} style={{ color: 'var(--accent)' }} />
                Replies within 1 business day
              </div>
              <div className="aside-c-row">
                <Icon name="pin" size={17} style={{ color: 'var(--accent)' }} />
                Remote · Worldwide
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
