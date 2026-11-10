import { useEffect, useRef, useState } from 'react';
import Icon from '../ui/Icon.jsx';
import Logo from '../ui/Logo.jsx';

const NAV = [
  ['Services', '#services'],
  ['Process', '#process'],
  ['Work', '#work'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 881px)');
    const onResize = () => desktop.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={'site-head' + (scrolled || open ? ' scrolled' : '')}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="wrap head-inner">
        <a href="#top" aria-label="Web Studio Labs home" className="head-logo">
          <Logo size={30} />
        </a>
        <nav className="head-nav" aria-label="Main">
          {NAV.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <div className="head-cta">
          <a href="#contact" className="btn btn-primary btn-sm">
            Start a Project
            <Icon name="arrowRight" size={15} />
          </a>
        </div>
        <button
          ref={burgerRef}
          type="button"
          className="head-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      <nav id="mobile-menu" className="head-mobile" aria-label="Mobile" hidden={!open}>
        {NAV.map(([label, href]) => (
          <a key={label} href={href} className="nav-link" onClick={close}>
            {label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ marginTop: 6 }} onClick={close}>
          Start a Project
          <Icon name="arrowRight" size={16} />
        </a>
      </nav>
    </header>
  );
}
