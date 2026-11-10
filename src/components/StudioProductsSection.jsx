import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';
import { BrowserFrame } from '../ui/Frames.jsx';
import { PRODUCTS } from '../data/projects.js';

export default function StudioProductsSection() {
  return (
    <section className="section products-sec" id="products">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Studio products"
            maxw={720}
            title="We build our own ideas, too."
            lead="Our own products give us firsthand experience taking ideas through design, development, and ongoing improvement."
          />
        </Reveal>
        <div className="prod-grid">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="card prod-card">
                <BrowserFrame shot={p.shot} host={p.host} className="prod-shot" />
                <div className="prod-body">
                  <div className="case-tags">
                    <span className="badge badge-violet">{p.relationship}</span>
                    <span className="badge badge-green">
                      <span className="dot" />
                      {p.status}
                    </span>
                  </div>
                  <h3 className="h3" style={{ marginTop: 14, fontSize: '1.4rem' }}>
                    {p.name}
                  </h3>
                  <p className="muted" style={{ marginTop: 8 }}>
                    {p.summary}
                  </p>
                  <ul className="check-list">
                    {p.features.map((f) => (
                      <li key={f}>
                        <Icon name="check" size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost prod-cta">
                    {p.cta}
                    <Icon name="arrowUpRight" size={16} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
