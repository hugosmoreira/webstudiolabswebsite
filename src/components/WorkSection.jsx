import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';

/* Illustrative example builds, not client case studies. Add outcome figures only for real, published projects. */
const WORK = [
  {
    tag: 'Operations Dashboard',
    icon: 'bars',
    accent: 'var(--accent)',
    problem: 'Business relied on spreadsheets and manual updates.',
    solution: 'Custom dashboard with role-based access and live metrics.',
    goal: 'Faster reporting with far fewer manual steps.',
  },
  {
    tag: 'Customer Portal',
    icon: 'portal',
    accent: 'var(--accent-3)',
    problem: 'Customers had no clear place to track progress, documents, and billing.',
    solution: 'Secure portal with accounts, files, updates, and messaging.',
    goal: 'A more professional, lower-friction customer experience.',
  },
  {
    tag: 'Intake & Follow-up System',
    icon: 'bot',
    accent: 'var(--accent-cyan)',
    problem: 'Repetitive customer intake and follow-up handled by hand.',
    solution: 'Guided intake workflow with AI-assisted triage and automatic follow-ups.',
    goal: 'Less time spent on manual responses across the team.',
  },
];

export default function WorkSection() {
  return (
    <section className="section work-sec" id="work">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Example builds"
            maxw={720}
            title="The kinds of problems we solve."
            lead="Illustrative examples of the systems we design and build. These are typical engagements, not client case studies."
          />
        </Reveal>
        <div className="work-grid">
          {WORK.map((w, i) => (
            <Reveal key={w.tag} delay={i * 80}>
              <div className="card card-hover work-card">
                <div className="work-visual" style={{ '--wa': w.accent }}>
                  <div className="work-ic" style={{ marginBottom: 0 }}>
                    <Icon name={w.icon} size={22} />
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
                      <span className="work-lbl">What we’d build</span>
                      {w.solution}
                    </div>
                    <div>
                      <span className="work-lbl work-lbl-r">Goal</span>
                      {w.goal}
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
