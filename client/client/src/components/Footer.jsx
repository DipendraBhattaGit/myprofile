import Socials from './Socials';
export default function Footer() {
  return (<footer className="wrap foot"><div><b>Dipendra Bhatta</b><p className="muted">Full-Stack Web Developer & Hardware/Software Engineer</p></div>
    <Socials items={['github', 'linkedin', 'facebook', 'instagram', 'whatsapp']} />
    <p className="muted">© 2026 Dipendra Bhatta. All rights reserved. Built with React.js</p></footer>);
}
