import { Mail, Phone } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { WHATSAPP_BASE_URL, WHATSAPP_MESSAGES, CONTACT, SOCIAL_LINKS } from '../constants';

export default function ContactSidebar() {

  return (
    <div className="flex flex-col justify-center gap-6">
      <div>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '12px',
            color: 'var(--color-accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Contacto
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: 'var(--color-text)',
            lineHeight: 1.15,
            marginTop: '8px',
            marginBottom: '16px',
          }}
        >
          Hagamos algo increíble en tu evento.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '15px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
          }}
        >
          Cotizá al instante por correo o resolvé tus dudas directamente por WhatsApp.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${CONTACT.email}`}
          className="group flex items-start gap-4 rounded-xl px-3 py-3 -mx-3 transition-all duration-200 hover:bg-[var(--color-accent-5)]"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: 'var(--color-accent-10)' }}
          >
            <Mail className="w-5 h-5" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '13px',
                color: 'var(--color-text)',
              }}
            >
              Email
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
              }}
            >
              {CONTACT.email}
            </p>
          </div>
        </a>

        <a
          href={`tel:${CONTACT.phone}`}
          className="group flex items-start gap-4 rounded-xl px-3 py-3 -mx-3 transition-all duration-200 hover:bg-[var(--color-accent-5)]"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: 'var(--color-accent-10)' }}
          >
            <Phone className="w-5 h-5" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '13px',
                color: 'var(--color-text)',
              }}
            >
              Teléfono
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
              }}
            >
              {CONTACT.phoneFormatted}
            </p>
          </div>
        </a>
      </div>

      <div className="flex gap-3">
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors bg-[var(--color-accent-10)] hover:bg-[var(--color-accent-20)]"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" style={{ color: 'var(--color-accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors bg-[var(--color-accent-10)] hover:bg-[var(--color-accent-20)]"
          aria-label="Facebook"
        >
          <svg className="w-5 h-5" style={{ color: 'var(--color-accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>

      <a
        href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer w-full rounded-full px-6 py-3.5 inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        style={{
          fontFamily: 'var(--font-sans)',
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-bg)',
        }}
      >
        <WhatsAppIcon className="w-5 h-5" aria-hidden="true" />
        Hablemos por WhatsApp
      </a>
    </div>
  );
}
