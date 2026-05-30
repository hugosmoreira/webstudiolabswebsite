import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';

const GENERIC = ['Monthly cost forever', 'Too many unused features', 'Limited customization', 'Manual workarounds', 'Data spread across tools'];
const CUSTOM = ['Built around your workflow', 'You own your process', 'Centralized data', 'Automation-ready', 'Scales with your business'];

export default function ComparisonSection() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Why custom" center maxw={640} title="Stop adapting your business to generic software." />
        </Reveal>
        <div className="cmp-grid">
          <Reveal>
            <div className="cmp-card cmp-generic">
              <div className="cmp-head">
                <span className="cmp-tag cmp-tag-off">Generic software</span>
                <Icon name="grid" size={18} style={{ color: 'var(--muted-2)' }} />
              </div>
              <ul className="cmp-list">
                {GENERIC.map((t) => (
                  <li key={t}>
                    <span className="cmp-x">
                      <Icon name="close" size={13} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="cmp-card cmp-custom">
              <div className="cmp-head">
                <span className="cmp-tag cmp-tag-on">Custom software</span>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--accent-grad)', display: 'grid', placeItems: 'center', color: '#fff' }}>
                  <Icon name="cube" size={17} />
                </div>
              </div>
              <ul className="cmp-list">
                {CUSTOM.map((t) => (
                  <li key={t}>
                    <span className="cmp-check">
                      <Icon name="check" size={13} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
