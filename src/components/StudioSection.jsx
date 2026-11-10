import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';
import ProcessStep from './ProcessStep.jsx';

const STEPS = [
  ['search', 'Discover', 'Understand your business, audience, goals, and constraints.'],
  ['layout', 'Design', 'Define the product, user experience, and visual direction.'],
  ['code', 'Build', 'Develop, integrate, and test the agreed scope.'],
  ['rocket', 'Launch & Evolve', 'Release the product and agree on the next improvements and support needs.'],
];

export default function StudioSection() {
  return (
    <section className="section studio-sec" id="studio">
      <div className="wrap">
        <div className="studio-intro">
          <Reveal>
            <SectionHead
              eyebrow="The studio"
              maxw={620}
              flush
              title="One studio, from first idea to launch."
              lead="We bring product thinking, design, and development into one conversation, with a clear scope and visible progress along the way."
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="studio-about">
              Web Studio Labs is an independent technology studio. We work directly with businesses, founders, and
              creators — and we build and run our own products, so we know what it takes to keep software useful after
              launch.
            </p>
          </Reveal>
        </div>
        <ol className="proc-grid">
          {STEPS.map(([icon, title, desc], i) => (
            <Reveal as="li" key={title} delay={i * 70}>
              <ProcessStep num={'0' + (i + 1)} icon={icon} title={title} desc={desc} />
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="scope-note">
            <span className="icon-chip" style={{ width: 42, height: 42, flexShrink: 0 }}>
              <Icon name="target" size={20} />
            </span>
            <p>
              <strong>Every project begins with a defined scope.</strong> We agree on priorities, deliverables, and
              milestones before development starts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
