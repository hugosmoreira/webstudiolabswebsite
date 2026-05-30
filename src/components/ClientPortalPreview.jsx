import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import Avatar from '../ui/Avatar.jsx';
import { Progress } from '../ui/charts.jsx';

const PORTAL_FEATS = [
  ['home', 'Project overview'],
  ['creditCard', 'Subscription status'],
  ['map', 'Development roadmap'],
  ['message', 'Messages'],
  ['upload', 'Files & deliverables'],
  ['invoice', 'Billing & invoices'],
  ['lifebuoy', 'Support requests'],
  ['link', 'Platform access'],
  ['flag', 'Launch checklist'],
  ['shield', 'Maintenance plan'],
];

/* Illustrative portal mockup — demo data only */
function PortalMock() {
  const nav = [
    ['home', 'Dashboard', true],
    ['map', 'Project'],
    ['grid', 'Roadmap'],
    ['message', 'Messages'],
    ['folder', 'Files'],
    ['creditCard', 'Billing'],
  ];
  return (
    <div className="card portal-mock" style={{ boxShadow: 'inset 0 0 0 1px var(--line), var(--shadow-xl)' }}>
      <div className="pm-side">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '2px 6px 16px' }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: 'var(--accent-grad)' }} />
          <div style={{ fontWeight: 600, fontSize: '.85rem', color: 'var(--ink)' }}>Acme Realty</div>
        </div>
        {nav.map(([ic, l, on], i) => (
          <div key={i} className={'pm-nav' + (on ? ' on' : '')}>
            <Icon name={ic} size={15} />
            {l}
          </div>
        ))}
      </div>
      <div className="pm-main">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: '.72rem', color: 'var(--muted-2)' }}>Welcome back, Dana</div>
            <div style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}>Project dashboard</div>
          </div>
          <div className="badge badge-violet">
            <span className="dot" />
            In development
          </div>
        </div>
        <div className="pm-cards">
          <div className="pm-card pm-wide">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: '.74rem', fontWeight: 600, color: 'var(--ink)' }}>Build progress</span>
              <span className="mono" style={{ fontSize: '.7rem', color: 'var(--accent)' }}>68%</span>
            </div>
            <Progress value={68} />
            <div className="pm-phases">
              {['Plan', 'Design', 'Build', 'Test', 'Launch'].map((p, i) => (
                <span key={p} className={'pm-phase' + (i < 2 ? ' done' : i === 2 ? ' now' : '')}>
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="pm-card">
            <div style={{ fontSize: '.7rem', color: 'var(--muted)', marginBottom: 4 }}>Next milestone</div>
            <div style={{ fontWeight: 600, fontSize: '.86rem', color: 'var(--ink)' }}>Listings module</div>
            <div className="mono" style={{ fontSize: '.66rem', color: 'var(--muted-2)', marginTop: 4 }}>Jun 14</div>
          </div>
          <div className="pm-card">
            <div style={{ fontSize: '.7rem', color: 'var(--muted)', marginBottom: 4 }}>Subscription</div>
            <div className="badge badge-green" style={{ fontSize: '.66rem' }}>Active</div>
            <div className="mono" style={{ fontSize: '.66rem', color: 'var(--muted-2)', marginTop: 6 }}>Business · monthly</div>
          </div>
          <div className="pm-card pm-wide">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Avatar name="Sam Ortega" size={24} />
              <div style={{ fontSize: '.74rem', color: 'var(--text)' }}>
                <b>Sam</b> uploaded <b>wireframes-v2.fig</b>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <span className="badge" style={{ fontSize: '.64rem' }}>
                <Icon name="file" size={12} />4 files
              </span>
              <span className="badge" style={{ fontSize: '.64rem' }}>
                <Icon name="message" size={12} />2 new
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientPortalPreview() {
  return (
    <section className="section portal-sec" id="portal">
      <div className="wrap">
        <div className="portal-grid">
          <Reveal className="portal-copy">
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="kicker-line" />
              Client portal
            </div>
            <h2 className="h1">A professional portal for every client.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Every WebStudioLabs client gets a clean dashboard to track their project, subscription, files,
              invoices, messages, and platform progress — all in one place.
            </p>
            <div className="portal-feat-grid">
              {PORTAL_FEATS.map(([ic, t]) => (
                <div key={t} className="portal-feat">
                  <span className="pf-ic">
                    <Icon name={ic} size={15} />
                  </span>
                  {t}
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-dark" style={{ marginTop: 28 }}>
              <Icon name="eye" size={16} />
              See how the portal works
              <Icon name="arrowRight" size={16} />
            </a>
          </Reveal>
          <Reveal delay={120} className="portal-visual">
            <PortalMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
