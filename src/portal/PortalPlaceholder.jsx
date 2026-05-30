/* ============================================================
   Shared placeholder shell for future client-portal screens.
   The client portal is NOT built yet — these components exist
   only to reserve structure for future expansion
   (login, dashboard, billing, messages, files, support, etc.).
   ============================================================ */

export default function PortalPlaceholder({ title, description }) {
  return (
    <section style={{ padding: 32 }}>
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '.7rem',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--muted-2)',
        }}
      >
        Client Portal · Coming soon
      </span>
      <h1 className="h2" style={{ marginTop: 10 }}>
        {title}
      </h1>
      <p className="muted" style={{ marginTop: 8, maxWidth: 520 }}>
        {description}
      </p>
    </section>
  );
}
