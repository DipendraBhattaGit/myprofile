import { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';

import { socials, waLink } from '../data/socials';

const map = {
  github: [FaGithub, 'Open GitHub', socials.github],
  linkedin: [FaLinkedinIn, 'Open LinkedIn', socials.linkedin],
  facebook: [FaFacebookF, 'Open Facebook', socials.facebook],
  instagram: [FaInstagram, 'Open Instagram', socials.instagram],
  whatsapp: [FaWhatsapp, 'Contact on WhatsApp', waLink],
  email: [FaEnvelope, 'Email', `mailto:${socials.email}`],
};

export default function Socials({
  items = [
    'github',
    'linkedin',
    'facebook',
    'instagram',
    'whatsapp',
    'email',
  ],
  labels = false,
}) {
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      // Modern browser
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(socials.email);
      } else {
        // Fallback
        const textarea = document.createElement('textarea');

        textarea.value = socials.email;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        document.execCommand('copy');

        document.body.removeChild(textarea);
      }

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <>
      <ul className={`socials ${labels ? 'socials--cards' : ''}`}>
        {items.map((k) => {
          const [Icon, label, href] = map[k];

          const ok = href && !href.startsWith('YOUR_');

          // EMAIL
          if (k === 'email') {
            return (
              <li key={k}>
                <button
                  type="button"
                  className="social-icon-button"
                  onClick={() => setEmailOpen(true)}
                  aria-label="Email"
                  data-tip="Email"
                >
                  <Icon aria-hidden="true" />

                  {labels && <span>Email</span>}
                </button>
              </li>
            );
          }

          // OTHER SOCIAL ICONS
          return (
            <li key={k}>
              <a
                href={ok ? href : '#'}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-tip={label}
              >
                <Icon aria-hidden="true" />

                {labels && (
                  <span>
                    {k[0].toUpperCase() + k.slice(1)}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>

      {/* EMAIL POPUP */}
      {emailOpen && (
        <div
          className="email-modal"
          onClick={() => setEmailOpen(false)}
        >
          <div
            className="email-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="email-close"
              onClick={() => setEmailOpen(false)}
            >
              ×
            </button>

            <FaEnvelope className="email-modal-icon" />

            <h3>Contact Me</h3>

            <p className="email-address">
              {socials.email}
            </p>

            <div className="email-actions">
             <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(socials.email)}`}
  target="_blank"
  rel="noreferrer"
  className="email-open-btn"
>
  <FaEnvelope />
  Open Email
</a>

              <button
                type="button"
                onClick={copyEmail}
                className="email-copy-btn"
              >
                {copied ? '✓ Copied!' : '📋 Copy Email'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}