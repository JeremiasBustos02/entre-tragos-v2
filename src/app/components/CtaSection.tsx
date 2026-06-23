import { WHATSAPP_BASE_URL, WHATSAPP_MESSAGES } from '../constants';
import { useInView } from '../hooks/useInView';
import { useMagneticButton } from '../hooks/useMagneticButton';

export default function CtaSection() {
  const { ref, inView: visible } = useInView<HTMLElement>({ threshold: 0.15 });
  const { ref: magneticRef } = useMagneticButton<HTMLAnchorElement>();

  return (
    <section
      ref={ref}
      className="w-full py-15 noise-overlay"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div
        className="overflow-hidden relative z-[2] glass"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 600ms ease-out, transform 600ms ease-out',
        }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image side */}
          <div
            className="relative lg:w-[45%] min-h-[240px] lg:min-h-0 overflow-hidden"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 700ms ease-out 200ms',
            }}
          >
            <img
              src="/cocktail-cta.png"
              alt="Cocktail preparado por Entre Tragos"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, var(--color-overlay) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* Text side */}
          <div className="flex-1 flex flex-col items-center justify-center p-10 sm:p-14 lg:p-16 text-center max-w-2xl mx-auto">
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(26px, 4.5vw, 40px)',
                color: 'var(--color-text)',
                lineHeight: 1.15,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 500ms ease-out 300ms, transform 500ms ease-out 300ms',
              }}
            >
              ¿Listo para tu evento?
            </h2>

            <p
              className="mt-4 max-w-sm"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 500ms ease-out 400ms, transform 500ms ease-out 400ms',
              }}
            >
              Escribinos y te armamos una propuesta a medida.
            </p>

            <div
              className="mt-5 mb-7 flex flex-col items-center gap-1"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 500ms ease-out 480ms',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '12px',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.08em',
                }}
              >
                Mar del Plata
              </span>
              <div
                style={{
                  width: '20px',
                  height: '2px',
                  backgroundColor: 'var(--color-accent)',
                }}
              />
            </div>

            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 500ms ease-out 550ms, transform 500ms ease-out 550ms',
              }}
            >
              <a
                ref={magneticRef}
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.cta)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  padding: 'clamp(14px, 2.5vw, 16px) clamp(28px, 5vw, 40px)',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
