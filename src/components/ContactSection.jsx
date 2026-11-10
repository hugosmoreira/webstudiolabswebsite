import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import ContactForm from './ContactForm.jsx';
import { CONTACT_EMAIL } from '../data/site.js';

const FIT = [
  'Businesses replacing spreadsheets or generic tools',
  'Founders launching a new product',
  'Creators, experts & communities',
  'Event and sports organizations',
];

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
              Share your idea, the problem you want to solve, and where you are in the process. We’ll use those details
              to discuss the right next step.
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
              <div className="aside-list">
                {FIT.map((t) => (
                  <div key={t} className="aside-item">
                    <Icon name="check" size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="card card-pad aside-contact">
              <span className="fld-lbl">Prefer email?</span>
              <a className="aside-c-row" href={`mailto:${CONTACT_EMAIL}`}>
                <Icon name="mail" size={17} style={{ color: 'var(--accent)' }} />
                {CONTACT_EMAIL}
              </a>
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
