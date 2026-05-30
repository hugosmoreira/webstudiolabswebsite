import Icon from '../ui/Icon.jsx';

/* A single capability / service card */
export default function ServiceCard({ icon, letter, title, desc, features }) {
  return (
    <div className="card card-hover svc-card">
      <div className="svc-top">
        <div className="icon-chip">
          <Icon name={icon} size={23} />
        </div>
        <span className="svc-num mono">{letter}</span>
      </div>
      <h3 className="h3" style={{ marginTop: 18 }}>
        {title}
      </h3>
      <p className="muted" style={{ marginTop: 9, fontSize: '.95rem' }}>
        {desc}
      </p>
      <ul className="svc-feats">
        {features.map((f) => (
          <li key={f}>
            <Icon name="check" size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
