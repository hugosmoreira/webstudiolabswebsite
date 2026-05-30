import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';
import { Sparkline, Donut } from '../ui/charts.jsx';

/* Representative example builds — illustrative, not real client testimonials. */
const WORK = [
  {
    tag: 'Operations Dashboard',
    icon: 'bars',
    accent: 'var(--accent)',
    problem: 'Business relied on spreadsheets and manual updates.',
    solution: 'Custom dashboard with role-based access and live metrics.',
    result: 'Faster reporting and far fewer manual steps.',
    metric: ['Reporting time', '-74%'],
    chart: 'spark',
  },
  {
    tag: 'Client Portal',
    icon: 'portal',
    accent: 'var(--accent-3)',
    problem: 'Clients had no clear place to track progress, docs, and billing.',
    solution: 'Secure portal with subscriptions, files, updates, and messaging.',
    result: 'A more professional, lower-friction client experience.',
    metric: ['Client logins', '3.2k/mo'],
    chart: 'donut',
  },
  {
    tag: 'AI Automation System',
    icon: 'bot',
    accent: 'var(--accent-cyan)',
    problem: 'Repetitive customer intake and follow-up by hand.',
    solution: 'AI-assisted intake workflow and automated communication.',
    result: 'Reduced manual response time across the team.',
    metric: ['Response time', '-61%'],
    chart: 'spark',
  },
];

export default function WorkSection() {
  return (
    <section className="section work-sec" id="work">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Selected work"
            maxw={720}
            title="Outcomes, not just interfaces."
            lead="A few representative builds shown as examples. Real client names available on a call."
          />
        </Reveal>
        <div className="work-grid">
          {WORK.map((w, i) => (
            <Reveal key={w.tag} delay={i * 80}>
              <div className="card card-hover work-card">
                <div className="work-visual" style={{ '--wa': w.accent }}>
                  <div className="work-ic">
                    <Icon name={w.icon} size={22} />
                  </div>
                  {w.chart === 'spark' ? (
                    <Sparkline data={[20, 28, 24, 38, 34, 50, 46, 62, 58, 72]} h={60} stroke={w.accent} />
                  ) : (
                    <div style={{ display: 'grid', placeItems: 'center', height: 60 }}>
                      <Donut value={91} size={64} color={w.accent} label="CSAT" />
                    </div>
                  )}
                  <div className="work-metric">
                    <span className="mono" style={{ fontSize: '.66rem', color: 'var(--muted)' }}>
                      {w.metric[0]}
                    </span>
                    <span style={{ fontWeight: 600, color: w.accent }}>{w.metric[1]}</span>
                  </div>
                </div>
                <div className="work-body">
                  <h3 className="h3">{w.tag}</h3>
                  <div className="work-pst">
                    <div>
                      <span className="work-lbl">Problem</span>
                      {w.problem}
                    </div>
                    <div>
                      <span className="work-lbl">Solution</span>
                      {w.solution}
                    </div>
                    <div>
                      <span className="work-lbl work-lbl-r">Result</span>
                      {w.result}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
