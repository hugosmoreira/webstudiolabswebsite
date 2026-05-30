import { useEffect, useRef, useState } from 'react';

/* Scroll reveal wrapper — fades content in as it enters the viewport */
export default function Reveal({ children, delay = 0, as: As = 'div', className = '', style = {} }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already in (or near) the viewport at mount → reveal right away.
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) * 1.05) {
      setSeen(true);
      return;
    }
    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done) {
            done = true;
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    // Safety fallback so content is never stuck invisible.
    const tmr = setTimeout(() => {
      if (!done) {
        done = true;
        setSeen(true);
        io.disconnect();
      }
    }, 1400);
    return () => {
      io.disconnect();
      clearTimeout(tmr);
    };
  }, []);

  return (
    <As
      ref={ref}
      className={'reveal ' + (seen ? 'in ' : '') + className}
      style={{ transitionDelay: delay + 'ms', ...style }}
    >
      {children}
    </As>
  );
}
