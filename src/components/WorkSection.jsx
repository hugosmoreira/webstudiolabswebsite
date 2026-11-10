import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';
import { BrowserFrame, PhoneFrame } from '../ui/Frames.jsx';
import { SUG } from '../data/projects.js';

export default function WorkSection() {
  return (
    <section className="section work-sec" id="work">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Selected client work" maxw={720} title="A closer look at what we build." />
        </Reveal>
        <div className="case">
          <Reveal className="case-copy">
            <div className="case-tags">
              <span className="badge badge-accent">{SUG.relationship}</span>
              <span className="badge">{SUG.category}</span>
              <span className="badge badge-green">
                <span className="dot" />
                {SUG.status}
              </span>
            </div>
            <h3 className="h2" style={{ marginTop: 18 }}>
              {SUG.name}
            </h3>
            <p className="muted" style={{ marginTop: 12, fontSize: '1.02rem' }}>
              {SUG.summary}
            </p>
            <div className="case-role">
              <span className="work-lbl">Our role</span>
              {SUG.role}
            </div>
            <span className="work-lbl" style={{ marginTop: 22 }}>
              What we delivered
            </span>
            <ul className="check-list">
              {SUG.delivered.map((d) => (
                <li key={d}>
                  <Icon name="check" size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                  {d}
                </li>
              ))}
            </ul>
            <a href={SUG.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ marginTop: 28 }}>
              Visit SUG World Tour
              <Icon name="arrowUpRight" size={16} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
          <Reveal delay={120} className="case-visual">
            <figure>
              <div className="case-shots">
                <BrowserFrame shot={SUG.shots.rules} host={`${SUG.host}/rules`} />
                <PhoneFrame shot={SUG.shots.mobile} className="case-phone" />
              </div>
              <figcaption className="case-cap">
                The interactive rules guide on desktop, and the homepage on a phone.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
