import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';
import ProcessStep from './ProcessStep.jsx';

const PROCESS = [
  ['search', 'Discovery', 'We map your workflow, problems, users, and business goals.'],
  ['book', 'Product Plan', 'We define the features, database, user roles, screens, and launch roadmap.'],
  ['layout', 'Design', 'We create clean UI/UX that feels modern, simple, and professional.'],
  ['code', 'Build', 'We develop the platform with authentication, database, admin tools, and real business logic.'],
  ['rocket', 'Launch', 'We deploy, test, fix, and prepare the system for real users.'],
  ['trend', 'Improve', 'We keep supporting, improving, and expanding the platform as your business grows.'],
];

export default function ProcessSection() {
  return (
    <section className="section process-sec" id="process">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="How we work"
            center
            maxw={620}
            title="From idea to working software."
            lead="A clear, repeatable path — so you always know what’s happening and what’s next."
          />
        </Reveal>
        <div className="proc-grid">
          {PROCESS.map(([icon, title, desc], i) => (
            <Reveal key={title} delay={(i % 3) * 70}>
              <ProcessStep num={'0' + (i + 1)} icon={icon} title={title} desc={desc} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
