import { useEffect, useState } from 'react';
import useActiveSection from '../hooks/useActiveSection';
export const links = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 20); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="wrap nav__in">
        <a href="#home" className="logo" aria-label="Dipendra Bhatta, home">DB<span>.</span></a>
        <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => <a key={l} href={`#${l}`} className={active === l ? 'is-active' : ''} onClick={() => setOpen(false)}>{l[0].toUpperCase() + l.slice(1)}</a>)}
          <a href="#contact" className="btn btn--sm" onClick={() => setOpen(false)}>Let's Talk</a>
        </nav>
      </div>
    </header>
  );
}
