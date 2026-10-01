import { useState } from 'react';
import { sendContact } from '../services/api';
import { socials, waLink } from '../data/socials';
import Socials from './Socials';
import { FaWhatsapp } from 'react-icons/fa';
const empty = { name: '', email: '', subject: '', message: '' };
const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject.';
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.';
  return e;
};
export default function Contact() {
  const [v, setV] = useState(empty); const [err, setErr] = useState({}); const [state, setState] = useState('idle'); const [msg, setMsg] = useState(''); const [copied, setCopied] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const copy = async () => { try { await navigator.clipboard.writeText(socials.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* ignore */ } };
  const submit = async (e) => {
    e.preventDefault(); const es = validate(v); setErr(es); if (Object.keys(es).length) return;
    setState('loading');
    try { await sendContact(v); setMsg('Message sent successfully.'); setState('success'); setV(empty); }
    catch (x) { setMsg(x.message.includes('Something went wrong') || x.message === 'Request failed' ? 'Something went wrong. Please try again.' : x.message); setState('error'); }
  };
  return (
    <section id="contact" className="wrap sec">
      <div className="two">
        <div><h2>Let's build something together.</h2><p className="lead">Have a project, idea or opportunity? Let's talk.</p>
          <div className="row"><a href={`mailto:${socials.email}`}>{socials.email}</a><button type="button" className="btn btn--ghost btn--sm" onClick={copy}>{copied ? 'Email copied!' : 'Copy email'}</button></div>
          <p className="muted">Nepal</p>
          <a className="btn" href={waLink} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> Chat on WhatsApp</a></div>
        <form onSubmit={submit} noValidate className="card form">
          {['name', 'email', 'subject'].map((k) => (<label key={k}>{k[0].toUpperCase() + k.slice(1)}
            <input value={v[k]} onChange={set(k)} type={k === 'email' ? 'email' : 'text'} aria-invalid={!!err[k]} />{err[k] && <small role="alert">{err[k]}</small>}</label>))}
          <label>Message<textarea rows="5" value={v.message} onChange={set('message')} aria-invalid={!!err.message} />{err.message && <small role="alert">{err.message}</small>}</label>
          <button className="btn" disabled={state === 'loading'}>{state === 'loading' ? 'Sending...' : 'Send Message'}</button>
          <p role="status" className={state === 'error' ? 'bad' : 'ok'}>{state === 'success' || state === 'error' ? msg : ''}</p>
        </form>
      </div>
      <h3 className="connect">Connect With Me</h3>
      <Socials items={['facebook', 'instagram', 'whatsapp', 'github', 'linkedin', 'email']} labels />
    </section>
  );
}
