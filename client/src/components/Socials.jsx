import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { socials, waLink } from '../data/socials';
const map = {
  github: [FaGithub, 'Open GitHub', socials.github], linkedin: [FaLinkedinIn, 'Open LinkedIn', socials.linkedin],
  facebook: [FaFacebookF, 'Open Facebook', socials.facebook], instagram: [FaInstagram, 'Open Instagram', socials.instagram],
  whatsapp: [FaWhatsapp, 'Contact on WhatsApp', waLink], email: [FaEnvelope, 'Send an email', `mailto:${socials.email}`],
};
export default function Socials({ items = ['github', 'linkedin', 'facebook', 'instagram', 'whatsapp'], labels = false }) {
  return (
    <ul className={`socials ${labels ? 'socials--cards' : ''}`}>
      {items.map((k) => { const [Icon, label, href] = map[k]; const ok = !href.startsWith('YOUR_');
        return (<li key={k}><a href={ok ? href : '#'} target={k === 'email' ? undefined : '_blank'} rel="noreferrer" aria-label={label} data-tip={label}>
          <Icon aria-hidden="true" />{labels && <span>{k[0].toUpperCase() + k.slice(1)}</span>}</a></li>); })}
    </ul>
  );
}
