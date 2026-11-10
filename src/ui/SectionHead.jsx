/* Section header — eyebrow + title + optional lead */

export default function SectionHead({ eyebrow, title, lead, center, maxw = 640, light, flush }) {
  return (
    <div
      style={{
        maxWidth: maxw,
        marginInline: center ? 'auto' : 0,
        textAlign: center ? 'center' : 'left',
        marginBottom: flush ? 0 : 'clamp(36px,5vw,60px)',
      }}
    >
      {eyebrow && (
        <div
          className="eyebrow"
          style={{ justifyContent: center ? 'center' : 'flex-start', marginBottom: 16 }}
        >
          <span className="kicker-line" />
          {eyebrow}
        </div>
      )}
      <h2 className="h1" style={light ? { color: '#fff' } : undefined}>
        {title}
      </h2>
      {lead && (
        <p className="lead" style={{ marginTop: 18, color: light ? 'rgba(255,255,255,.65)' : undefined }}>
          {lead}
        </p>
      )}
    </div>
  );
}
