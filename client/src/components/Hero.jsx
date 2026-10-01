
import Socials from './Socials';
import { waLink } from '../data/socials';
import { FaWhatsapp } from 'react-icons/fa';
const badges = ['React.js', 'Node.js', 'MongoDB', 'Express.js'];
export default function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero__text">
        <p className="status"><i /> Available for opportunities · Based in Nepal 🇳🇵</p>
        <p className="muted">Hi, I'm Dipendra Bhatta 👋</p>
        <h1>Full-Stack Web Developer</h1>
        <p className="lead">I build modern, responsive and user-focused web applications using React.js, Node.js, Express.js and MongoDB.</p>
        <div className="row"><a className="btn" href="#projects">View My Work</a><a className="btn btn--ghost" href="#contact">Let's Talk</a>
          <a className="btn btn--ghost" href={waLink} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> WhatsApp</a></div>
        <Socials />
      </div>
      <div className="frame">
        <div className="frame__ring" />
        <div className="frame__in">
          <img
          src="/dipeen.jpeg"
          alt="Dipendra Bhatta - Full-Stack Web Developer"
          width="420"
            height="420"
            fetchPriority="high"
            />
        </div>
        {badges.map((b, i) => <span key={b} className={`badge badge--${i}`}>{b}</span>)}
      </div>
    </section>
  );
}
