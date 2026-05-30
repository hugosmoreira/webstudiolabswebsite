/* Brand monogram — layered "W" node mark + wordmark */

export default function Logo({ size = 30, light = false }) {
  const fg = light ? '#fff' : 'var(--ink)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}>
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <rect x={1} y={1} width={30} height={30} rx={9} style={{ fill: 'url(#wsl-logo-grad)' }} />
          <defs>
            <linearGradient id="wsl-logo-grad" x1={0} y1={0} x2={32} y2={32} gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--accent)" />
              <stop offset={1} stopColor="var(--accent-2)" />
            </linearGradient>
          </defs>
          <path
            d="M8 11l2.4 10L13 13l3 8 2.6-8L21 21l3-10"
            stroke="#fff"
            strokeWidth={2.1}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0.96}
          />
        </svg>
      </div>
      {size >= 24 && (
        <span style={{ fontWeight: 600, fontSize: '1.12rem', letterSpacing: '-0.03em', color: fg }}>
          WebStudio<span style={{ color: 'var(--accent)' }}>Labs</span>
        </span>
      )}
    </div>
  );
}
