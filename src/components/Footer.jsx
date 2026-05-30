import Icon from '../ui/Icon.jsx';
import Logo from '../ui/Logo.jsx';

const FCOLS = [
  [
    'Services',
    [
      ['Web Applications', '#services'],
      ['Mobile Apps', '#services'],
      ['Dashboards', '#services'],
      ['Client Portals', '#portal'],
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
      ['Client Portal', '#portal'],
      ['Contact', '#contact'],
    ],
  ],
  [
    'Contact',
    [
      ['Book a Call', '#contact'],
      ['hello@webstudiolabs.com', 'mailto:hello@webstudiolabs.com'],
      ['Remote · Worldwide', '#contact'],
    ],
  ],
];

const SOCIAL = [
  ['mail', 'mailto:hello@webstudiolabs.com', 'Email'],
  ['link', '#contact', 'Links'],
  ['message', '#contact', 'Message'],
];

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Logo size={30} light />
          <p style={{ marginTop: 16, color: 'rgba(255,255,255,.55)', fontSize: '.95rem', maxWidth: 320 }}>
            Custom software, dashboards, portals, SaaS MVPs, and AI automation systems for modern businesses.
          </p>
          <div className="foot-social">
            {SOCIAL.map(([ic, href, label]) => (
              <a key={label} href={href} className="foot-soc" aria-label={label}>
                <Icon name={ic} size={17} />
              </a>
            ))}
          </div>
        </div>
        {FCOLS.map(([title, links]) => (
          <div key={title} className="foot-col">
            <div className="foot-col-t mono">{title}</div>
            {links.map(([label, href]) => (
              <a key={label} href={href} className="foot-link">
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="wrap foot-bot">
        <span>© {new Date().getFullYear()} WebStudioLabs. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 22 }}>
          <a href="#contact" className="foot-link">
            Privacy
          </a>
          <a href="#contact" className="foot-link">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
