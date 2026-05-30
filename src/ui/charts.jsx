/* ============================================================
   Lightweight inline charts — Sparkline, BarChart, Donut, Progress
   ============================================================ */
import { useId } from 'react';

/* Sparkline / smooth line chart */
export function Sparkline({ data, w = 240, h = 64, stroke = 'var(--accent)', fill = true, strokeW = 2.2 }) {
  const rawId = useId();
  const max = Math.max(...data);
  const min = Math.min(...data);
  const rng = max - min || 1;
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    h - 6 - ((v - min) / rng) * (h - 14),
  ]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  const area = d + ` L ${w} ${h} L 0 ${h} Z`;
  const gid = 'sp' + rawId.replace(/:/g, '');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={gid} x1={0} y1={0} x2={0} y2={1}>
          <stop offset={0} stopColor={stroke} stopOpacity={0.18} />
          <stop offset={1} stopColor={stroke} stopOpacity={0} />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#${gid})`} />}
      <path d={d} fill="none" stroke={stroke} strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Vertical bar chart */
export function BarChart({ data, h = 90, gap = 6, color = 'var(--accent)', track = '#EEF1F6' }) {
  const max = Math.max(...data) || 1;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap, height: h }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <div
            style={{
              width: '100%',
              height: Math.max(6, (v / max) * 100) + '%',
              background: i === data.length - 1 ? color : track,
              borderRadius: 5,
              transition: 'height .6s cubic-bezier(.16,1,.3,1)',
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* Donut / ring progress */
export function Donut({ value = 70, size = 92, stroke = 9, color = 'var(--accent)', track = '#EAEEF5', label }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (value / 100) * c}
          style={{ transition: 'stroke-dashoffset .8s cubic-bezier(.16,1,.3,1)' }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: size > 80 ? '1.3rem' : '1rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
            {value}%
          </div>
          {label && (
            <div className="mono" style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
              {label}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* Linear progress bar */
export function Progress({ value = 50, color = 'var(--accent)', h = 7, track = '#EAEEF5' }) {
  return (
    <div style={{ height: h, borderRadius: 99, background: track, overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          height: '100%',
          width: value + '%',
          borderRadius: 99,
          background: color,
          transition: 'width .7s cubic-bezier(.16,1,.3,1)',
        }}
      />
    </div>
  );
}
