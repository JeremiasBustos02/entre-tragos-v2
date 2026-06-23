import { CONTACT, SOCIAL_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer
      className="w-full px-5 sm:px-8 lg:px-12 pt-16 pb-8"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
      role="contentinfo"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="flex flex-col gap-3">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '18px',
                color: 'var(--color-text)',
              }}
            >
              EntreTragos
            </span>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              Servicio de barras móviles para eventos en Mar del Plata. Diseñamos
              experiencias líquidas inolvidables.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '16px',
                color: 'var(--color-accent)',
                marginTop: '4px',
              }}
            >
              Cada evento merece su barra.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '13px',
                color: 'var(--color-text)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Navegación
            </span>
            <nav className="flex flex-col gap-2" aria-label="Navegación del footer">
              {[
                { href: '#paquetes', label: 'Paquetes' },
                { href: '#carta', label: 'Carta' },
                { href: '#galeria', label: 'Galería' },
                { href: '#faq', label: 'FAQ' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-normal text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '13px',
                color: 'var(--color-text)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Servicios
            </span>
            <div className="flex flex-col gap-2">
              {['Bodas', 'Cumpleaños', 'Eventos corporativos', 'Fiestas privadas'].map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '13px',
                color: 'var(--color-text)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Contacto
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-normal text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="font-normal text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {CONTACT.phoneFormatted}
              </a>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Mar del Plata y alrededores
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '12px',
              color: 'var(--color-text-secondary)',
            }}
          >
            © 2026 Entre Tragos. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 text-[var(--color-text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 text-[var(--color-text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-200"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 text-[var(--color-text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
