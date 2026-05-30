/* ============================================================
   Hero dashboard mockup — floating glass panel with layered
   cards, live-feeling metrics, and an automation status strip.
   (Illustrative product mockup — demo data only.)
   ============================================================ */
import Icon from '../ui/Icon.jsx';
import Avatar from '../ui/Avatar.jsx';
import { Sparkline, BarChart, Donut, Progress } from '../ui/charts.jsx';

function WindowDots() {
  return (
    <div style={{ display: 'flex', gap: 6 }}>
      {['#F87171', '#FBBF24', '#34D399'].map((c, i) => (
        <span key={i} style={{ width: 10, height: 10, borderRadius: 99, background: c, opacity: 0.85 }} />
      ))}
    </div>
  );
}

const NAV = [
  ['home', 'Overview', true],
  ['bars', 'Analytics'],
  ['users', 'Members'],
  ['workflow', 'Automations'],
  ['creditCard', 'Billing'],
  ['settings', 'Settings'],
];

const KPIS = [
  ['Revenue', '$48.2k', '+12%', [12, 18, 15, 22, 19, 28, 26, 34], 'var(--accent)'],
  ['Projects', '7', '+2', [3, 4, 4, 5, 5, 6, 6, 7], 'var(--accent-3)'],
  ['Active users', '1,284', '+9%', [40, 52, 48, 60, 72, 68, 84, 92], 'var(--accent-cyan)'],
];

export default function HeroDashboard() {
  return (
    <div className="hero-dash" style={{ position: 'relative' }}>
      {/* glow behind */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-8% -6% -14% -6%',
          borderRadius: 40,
          zIndex: 0,
          background:
            'radial-gradient(60% 60% at 70% 20%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%), radial-gradient(50% 50% at 20% 90%, color-mix(in srgb, var(--accent-3) 18%, transparent), transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      {/* main browser-framed dashboard */}
      <div
        className="card"
        style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: 'inset 0 0 0 1px var(--line), var(--shadow-xl)',
          background: 'var(--surface)',
        }}
      >
        {/* top bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '13px 16px',
            borderBottom: '1px solid var(--line)',
            background: 'var(--surface-2)',
          }}
        >
          <WindowDots />
          <div
            className="mono"
            style={{
              flex: 1,
              minWidth: 0,
              textAlign: 'center',
              fontSize: '.72rem',
              color: 'var(--muted-2)',
              background: 'var(--bg)',
              borderRadius: 7,
              padding: '5px 10px',
              boxShadow: 'inset 0 0 0 1px var(--line)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <span style={{ color: 'var(--green)' }}>● </span>app.acme.com/dashboard
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Icon name="search" size={15} style={{ color: 'var(--muted-2)' }} />
            <Icon name="bell" size={15} style={{ color: 'var(--muted-2)' }} />
          </div>
        </div>

        {/* body: mini sidebar + content */}
        <div style={{ display: 'flex', minHeight: 360 }}>
          {/* sidebar */}
          <div
            className="hero-side"
            style={{ width: 156, borderRight: '1px solid var(--line)', padding: '16px 12px', background: 'var(--surface-2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px 14px' }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: 'var(--accent-grad)' }} />
              <div style={{ fontWeight: 600, fontSize: '.82rem', color: 'var(--ink)' }}>Acme Co.</div>
            </div>
            {NAV.map(([ic, label, active], i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 9,
                  padding: '8px 9px',
                  borderRadius: 8,
                  marginBottom: 2,
                  fontSize: '.8rem',
                  fontWeight: active ? 600 : 450,
                  color: active ? 'var(--accent-strong)' : 'var(--muted)',
                  background: active ? 'var(--accent-soft)' : 'transparent',
                }}
              >
                <Icon name={ic} size={15} />
                {label}
              </div>
            ))}
          </div>

          {/* content */}
          <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}>Overview</div>
                <div style={{ fontSize: '.74rem', color: 'var(--muted-2)' }}>Last 30 days</div>
              </div>
              <div className="badge badge-green" style={{ fontSize: '.68rem' }}>
                <span className="dot" />
                All systems live
              </div>
            </div>

            {/* KPI row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
              {KPIS.map(([l, v, d, sp, c], i) => (
                <div key={i} style={{ padding: 12, borderRadius: 11, background: 'var(--surface)', boxShadow: 'inset 0 0 0 1px var(--line)' }}>
                  <div style={{ fontSize: '.68rem', color: 'var(--muted)', fontWeight: 500, marginBottom: 3 }}>{l}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em' }}>{v}</div>
                    <div style={{ fontSize: '.66rem', fontWeight: 600, color: 'var(--green)' }}>{d}</div>
                  </div>
                  <div style={{ marginTop: 4, height: 24 }}>
                    <Sparkline data={sp} h={24} stroke={c} strokeW={1.8} />
                  </div>
                </div>
              ))}
            </div>

            {/* chart + roadmap row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12, flex: 1 }}>
              <div style={{ padding: 14, borderRadius: 11, background: 'var(--surface)', boxShadow: 'inset 0 0 0 1px var(--line)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--ink)' }}>Workflow throughput</div>
                  <div className="mono" style={{ fontSize: '.64rem', color: 'var(--muted-2)' }}>tasks / day</div>
                </div>
                <div style={{ flex: 1, minHeight: 70, display: 'flex', alignItems: 'flex-end' }}>
                  <BarChart data={[40, 62, 50, 78, 65, 90, 72, 96, 85]} h={78} />
                </div>
              </div>
              <div
                style={{
                  padding: 14,
                  borderRadius: 11,
                  background: 'var(--surface)',
                  boxShadow: 'inset 0 0 0 1px var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                <Donut value={82} size={84} label="launch" />
                <div style={{ fontSize: '.7rem', color: 'var(--muted)', textAlign: 'center' }}>MVP build progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating automation card */}
      <div className="glass float-card float-a" style={{ position: 'absolute', zIndex: 3, padding: 14, borderRadius: 14, width: 230 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--accent-grad)', display: 'grid', placeItems: 'center', color: '#fff' }}>
            <Icon name="zap" size={16} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '.8rem', color: 'var(--ink)' }}>Automation ran</div>
            <div style={{ fontSize: '.68rem', color: 'var(--muted)' }}>Intake → CRM → Email</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <Progress value={100} color="var(--green)" h={6} />
          <span style={{ fontSize: '.66rem', fontWeight: 600, color: 'var(--green)' }}>24 done</span>
        </div>
      </div>

      {/* floating message card */}
      <div className="glass float-card float-b" style={{ position: 'absolute', zIndex: 3, padding: 13, borderRadius: 14, width: 210 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar name="Priya Shah" size={28} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: '.76rem', color: 'var(--ink)' }}>New deliverable</div>
            <div style={{ fontSize: '.67rem', color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Design v2 ready for review
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
