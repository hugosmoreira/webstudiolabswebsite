import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';

const PROBLEMS = [
  ['grid', 'Spreadsheets everywhere', 'Critical data scattered across tabs nobody fully trusts.'],
  ['refresh', 'Manual follow-ups', 'Reminders, status updates, and chasing — all done by hand.'],
  ['clock', 'Repetitive admin work', 'Hours lost every week to copy-paste and re-entry.'],
  ['plug', 'Disconnected systems', 'Tools that don’t talk to each other, so people do the syncing.'],
  ['chart', 'No clear dashboard', 'No single place to see how the business is actually doing.'],
  ['message', 'Customers left waiting', 'Clients with no visibility into status, progress, or next steps.'],
];

export default function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="The problem"
            center
            maxw={720}
            title="Most businesses are running on tools that were never built for them."
            lead="Off-the-shelf tools can help at first, but they often create more work once your business becomes more specific."
          />
        </Reveal>
        <div className="prob-grid">
          {PROBLEMS.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="card card-hover prob-card">
                <div className="icon-chip" style={{ background: '#FFF1F2', color: '#E11D48' }}>
                  <Icon name={ic} size={21} />
                </div>
                <h3 className="h3" style={{ marginTop: 16, fontSize: '1.06rem' }}>
                  {t}
                </h3>
                <p className="muted" style={{ marginTop: 7, fontSize: '.94rem' }}>
                  {d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
