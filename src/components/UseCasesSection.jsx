import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHead from '../ui/SectionHead.jsx';

const USECASES = [
  ['activity', 'Gym management platform'],
  ['home', 'Real estate / rental portal'],
  ['calendar', 'Appointment booking system'],
  ['lifebuoy', 'Customer support dashboard'],
  ['bot', 'AI intake assistant'],
  ['folder', 'Document management portal'],
  ['ticket', 'Event management app'],
  ['creditCard', 'Subscription SaaS platform'],
  ['chart', 'Admin reporting dashboard'],
];

export default function UseCasesSection() {
  return (
    <section className="section usecase-sec dot-bg" id="usecases">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Use cases" center maxw={640} title="Built for real business workflows." />
        </Reveal>
        <div className="uc-grid">
          {USECASES.map(([ic, t], i) => (
            <Reveal key={t} delay={(i % 3) * 55}>
              <div className="uc-card card card-hover">
                <div className="uc-ic">
                  <Icon name={ic} size={19} />
                </div>
                <span>{t}</span>
                <Icon name="arrowUpRight" size={16} style={{ color: 'var(--muted-2)', marginLeft: 'auto' }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
