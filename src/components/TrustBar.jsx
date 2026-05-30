/* Trust bar — illustrative industry archetypes (example builds, not real endorsements) */

const ITEMS = ['Fitness & Gyms', 'Real Estate', 'Events', 'Clinics & Health', 'Logistics'];

export default function TrustBar() {
  return (
    <div className="trust-row">
      <span className="mono trust-label">Example builds across the industries we work in</span>
      <div className="trust-logos">
        {ITEMS.map((t) => (
          <span key={t} className="trust-logo">
            <span className="trust-mark" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
