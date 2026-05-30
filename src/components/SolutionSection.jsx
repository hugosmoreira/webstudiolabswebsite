import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';

const STEPS = [
  ['map', 'Plan your workflow', 'We map how your business really runs — people, steps, and the moments where work piles up.'],
  ['cube', 'Build your custom platform', 'We design and engineer a system shaped to your operations, not a template you bend to fit.'],
  ['zap', 'Automate & improve', 'We connect the pieces, automate the manual work, and keep refining as you grow.'],
];

export default function SolutionSection() {
  return (
    <section className="section solution-sec" id="solution">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="The solution"
            center
            maxw={700}
            title="We build the system your business should have had from the beginning."
          />
        </Reveal>
        <div className="sol-grid">
          {STEPS.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 90}>
              <div className="sol-card">
                <div className="sol-step mono">{'0' + (i + 1)}</div>
                <div className="icon-chip" style={{ width: 50, height: 50 }}>
                  <Icon name={ic} size={24} />
                </div>
                <h3 className="h3" style={{ marginTop: 18 }}>
                  {t}
                </h3>
                <p className="muted" style={{ marginTop: 9 }}>
                  {d}
                </p>
                {i < 2 && (
                  <div className="sol-connector" aria-hidden="true">
                    <Icon name="arrowRight" size={18} />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="flow-strip">
            <div className="flow-node flow-old">
              <Icon name="grid" size={16} />
              Current process
            </div>
            <div className="flow-arrow">
              <Icon name="arrowRight" size={16} />
            </div>
            <div className="flow-node flow-mid">
              <Icon name="cube" size={16} />
              Custom app
            </div>
            <div className="flow-arrow">
              <Icon name="arrowRight" size={16} />
            </div>
            <div className="flow-node flow-new">
              <Icon name="zap" size={16} />
              Automated business system
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
