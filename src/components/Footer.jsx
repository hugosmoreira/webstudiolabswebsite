import Icon from '../ui/Icon.jsx';
import Logo from '../ui/Logo.jsx';

const FCOLS = [
  [
    'Services',
    [
      ['Web Applications', '#services'],
      ['Mobile Apps', '#services'],
      ['Dashboards', '#services'],
      ['SaaS MVPs', '#services'],
      ['AI & Automation', '#services'],
    ],
  ],
  [
    'Company',
    [
      ['Process', '#process'],
      ['Work', '#work'],
      ['Pricing', '#pricing'],
      ['Contact', '#contact'],
    ],
  ],
  [
    'Contact',
    [
      ['Start a Project', '#contact'],
      ['hello@webstudiolabs.com', 'mailto:hello@webstudiolabs.com'],
      ['Remote · Worldwide', null],
    ],
  ],
];

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Logo size={30} light />
          <p style={{ marginTop: 16, color: 'rgba(255,255,255,.55)', fontSize: '.95rem', maxWidth: 320 }}>
            An independent technology studio. We turn business problems into working software, end to end.
          </p>
          <div className="foot-social">
            <a href="mailto:hello@webstudiolabs.com" className="foot-soc" aria-label="Email Web Studio Labs">
              <Icon name="mail" size={17} />
            </a>
          </div>
        </div>
        {FCOLS.map(([title, links]) => (
          <div key={title} className="foot-col">
            <div className="foot-col-t mono">{title}</div>
            {links.map(([label, href]) =>
              href ? (
                <a key={label} href={href} className="foot-link">
                  {label}
                </a>
              ) : (
                <span key={label} className="foot-link">
                  {label}
                </span>
              )
            )}
          </div>
        ))}
      </div>
      <div className="wrap foot-bot">
        <span>© {new Date().getFullYear()} Web Studio Labs. All rights reserved.</span>
      </div>
    </footer>
  );
}
