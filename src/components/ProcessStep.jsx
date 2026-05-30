import Icon from '../ui/Icon.jsx';

/* A single step in the "How we work" process grid */
export default function ProcessStep({ num, icon, title, desc }) {
  return (
    <div className="proc-card card card-hover">
      <div className="proc-head">
        <span className="proc-num mono">{num}</span>
        <div className="proc-ic">
          <Icon name={icon} size={19} />
        </div>
      </div>
      <h3 className="h3" style={{ marginTop: 16, fontSize: '1.1rem' }}>
        {title}
      </h3>
      <p className="muted" style={{ marginTop: 8, fontSize: '.93rem' }}>
        {desc}
      </p>
    </div>
  );
}
