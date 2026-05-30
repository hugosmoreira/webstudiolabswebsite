import { useEffect, useState } from 'react';
import Icon from '../ui/Icon.jsx';
import Logo from '../ui/Logo.jsx';

const NAV = [
  ['Services', '#services'],
  ['Process', '#process'],
  ['Client Portal', '#portal'],
  ['Work', '#work'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'site-head' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap head-inner">
        <a href="#top" aria-label="WebStudioLabs home">
          <Logo size={30} />
        </a>
        <nav className="head-nav">
          {NAV.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <div className="head-cta">
          <a href="#portal" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Icon name="lock" size={14} />
            Sign in
          </a>
          <a href="#contact" className="btn btn-primary btn-sm">
            Book a Call
            <Icon name="arrowRight" size={15} />
          </a>
        </div>
        <button className="head-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      {open && (
        <div className="head-mobile">
          {NAV.map(([label, href]) => (
            <a key={label} href={href} className="nav-link" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#portal" className="btn btn-ghost" style={{ marginTop: 6 }} onClick={() => setOpen(false)}>
            Client portal
          </a>
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
