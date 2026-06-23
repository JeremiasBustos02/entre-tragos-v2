import { useReveal } from '../hooks/useReveal';
import galleryImg from '/services.png';

const INCLUSIONS = [
  'Barra móvil elegante y profesional para cualquier tipo de evento',
  'Cristalería y utensilios incluidos para que no tengas que preocuparte por nada',
  'Decoración y presentación coordinadas para una experiencia impecable',
  'Organización integral para que vos solo disfrutes',
  'Bartender profesional incluido según el paquete contratado',
];

export default function ServiceInclusions() {
  const imageRef = useReveal<HTMLDivElement>({ type: 'mask', threshold: 0.2 });
  const contentRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2, delay: 100 });

  return (
    <section
      id="servicio"
      aria-labelledby="servicio-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        {/* Image panel — LEFT */}
        <div
          ref={imageRef}
          className="relative overflow-hidden order-2 md:order-1 max-h-[300px] md:max-h-[600px]"
        >
          <img
            src={galleryImg}
            alt="Servicio de coctelería profesional"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text panel — RIGHT */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center py-20 px-8 lg:px-12 order-1 md:order-2"
          style={{ backgroundColor: 'var(--color-bg-alt)' }}
        >
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
            Servicio
          </span>

          <h2
            id="servicio-heading"
            className="mt-3"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
            }}
          >
            ¿Qué incluye nuestro servicio?
          </h2>

          <ul className="flex flex-col gap-3 mt-6">
            {INCLUSIONS.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <polyline points="4,10 8,14 16,6" />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    fontSize: '15px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
