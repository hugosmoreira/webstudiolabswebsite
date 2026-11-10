import Icon from '../ui/Icon.jsx';
import Logo from '../ui/Logo.jsx';
import { CONTACT_EMAIL } from '../data/site.js';
import { PRODUCTS } from '../data/projects.js';

const FCOLS = [
  [
    'Services',
    [
      ['Custom Software & Platforms', '/#services'],
      ['Mobile Applications', '/#services'],
      ['Product Design & Websites', '/#services'],
      ['Creator Platforms', '/#creators'],
    ],
  ],
  [
    'Studio',
    [
      ['Work', '/#work'],
      ['Our Products', '/#products'],
      ['Studio & Process', '/#studio'],
      ['Start a Project', '/#contact'],
    ],
  ],
  ['Products', PRODUCTS.map((p) => [p.name, p.url])],
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
          <a href={`mailto:${CONTACT_EMAIL}`} className="foot-mail">
            <Icon name="mail" size={16} />
            {CONTACT_EMAIL}
          </a>
          <span className="foot-link" style={{ display: 'block' }}>
            Remote · Worldwide
          </span>
        </div>
        {FCOLS.map(([title, links]) => (
          <nav key={title} className="foot-col" aria-label={title}>
            <div className="foot-col-t mono">{title}</div>
            {links.map(([label, href]) => {
              const external = href.startsWith('http');
              return (
                <a
                  key={label}
                  href={href}
                  className="foot-link"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {label}
                  {external && (
                    <>
                      <Icon name="arrowUpRight" size={13} style={{ marginLeft: 4 }} />
                      <span className="sr-only">(opens in a new tab)</span>
                    </>
                  )}
                </a>
              );
            })}
          </nav>
        ))}
      </div>
      <div className="wrap foot-bot">
        <span>© {new Date().getFullYear()} Web Studio Labs. All rights reserved.</span>
        <a href="/privacy/" className="foot-link">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
