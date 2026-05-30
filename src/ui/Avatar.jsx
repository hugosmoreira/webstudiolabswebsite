/* Avatar — initials chip with deterministic color */

const AV_COLORS = ['#4F46E5', '#0EA5E9', '#7C3AED', '#0D9488', '#DB2777', '#EA580C', '#2563EB', '#059669'];

export default function Avatar({ name = '?', size = 32, src }) {
  const initials = name
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const color = AV_COLORS[name.charCodeAt(0) % AV_COLORS.length];
  return (
    <div
      title={name}
      style={{
        width: size,
        height: size,
        borderRadius: 99,
        flexShrink: 0,
        background: src ? `center/cover url(${src})` : `color-mix(in srgb, ${color} 16%, white)`,
        color,
        display: 'grid',
        placeItems: 'center',
        fontSize: size * 0.36,
        fontWeight: 600,
        boxShadow: 'inset 0 0 0 1px rgba(15,23,42,.06)',
      }}
    >
      {!src && initials}
    </div>
  );
}
