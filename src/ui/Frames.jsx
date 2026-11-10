/* Screenshot frames. Use the phone frame only for real narrow-screen captures. */

export function BrowserFrame({ shot, host, eager = false, className = '' }) {
  return (
    <div className={'bframe ' + className}>
      <div className="bframe-bar" aria-hidden="true">
        <span className="bframe-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="bframe-url mono">{host}</span>
      </div>
      <img
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
      />
    </div>
  );
}

export function PhoneFrame({ shot, className = '' }) {
  return (
    <div className={'pframe ' + className}>
      <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" />
    </div>
  );
}
