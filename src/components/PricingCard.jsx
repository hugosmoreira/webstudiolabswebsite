import Icon from '../ui/Icon.jsx';

/* A single engagement-model / pricing card */
export default function PricingCard({ name, icon, desc, features, featured = false }) {
  return (
    <div className={'card price-card' + (featured ? ' price-featured' : '')}>
      {featured && <span className="price-flag">Most popular</span>}
      <div className="icon-chip" style={featured ? { background: 'rgba(255,255,255,.16)', color: '#fff' } : undefined}>
        <Icon name={icon} size={22} />
      </div>
      <h3 className="h3" style={{ marginTop: 16, color: featured ? '#fff' : undefined }}>
        {name}
      </h3>
      <p style={{ marginTop: 8, fontSize: '.92rem', color: featured ? 'rgba(255,255,255,.72)' : 'var(--muted)', minHeight: 60 }}>
        {desc}
      </p>
      <div className="price-amt mono" style={{ color: featured ? '#fff' : 'var(--ink)' }}>
        Custom quote
      </div>
      <ul className="price-feats">
        {features.map((f) => (
          <li key={f} style={featured ? { color: 'rgba(255,255,255,.85)' } : undefined}>
            <Icon name="check" size={15} style={{ color: featured ? '#fff' : 'var(--accent)', flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={'btn ' + (featured ? 'btn-ghost' : 'btn-dark')}
        style={{ marginTop: 'auto', width: '100%', ...(featured ? { background: '#fff', color: 'var(--ink)', boxShadow: 'none' } : {}) }}
      >
        Book a call
      </a>
    </div>
  );
}
