import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import { preselectCategory } from '../lib/prefill.js';

const EXAMPLES = [
  ['users', 'Memberships & communities'],
  ['book', 'Learning platforms'],
  ['calendar', 'Event experiences'],
  ['mobile', 'Branded apps'],
];

export default function CreatorPlatformsSection() {
  return (
    <section className="section-tight" id="creators">
      <div className="wrap">
        <Reveal>
          <div className="creator-panel">
            <div className="creator-glow" aria-hidden="true" />
            <div className="creator-copy">
              <div className="eyebrow eyebrow-light">
                <span className="kicker-line" />
                For creators, experts & communities
              </div>
              <h2 className="h1" style={{ color: '#fff', marginTop: 16 }}>
                Build something your audience can be part of.
              </h2>
              <p className="creator-lead">
                Turn your expertise, content, or community into a digital experience shaped around what you offer. We
                help plan and build memberships, learning platforms, event experiences, and branded applications —
                custom where you need more flexibility than off-the-shelf tools provide.
              </p>
              <a
                href="#contact"
                className="btn btn-lg creator-btn"
                onClick={() => preselectCategory('Creator or Community Platform')}
              >
                Discuss a Creator Platform
                <Icon name="arrowRight" size={17} />
              </a>
            </div>
            <ul className="creator-list">
              {EXAMPLES.map(([icon, label]) => (
                <li key={label}>
                  <span className="creator-ic">
                    <Icon name={icon} size={18} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
