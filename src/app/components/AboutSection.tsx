import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const FEATURES = [
  'Barras artesanales que elevan la estética de tu evento',
  'Propuestas adaptadas a bodas, cumpleaños, eventos empresariales y más',
  'Atención profesional para que vos solo te ocupes de disfrutar',
];

export default function AboutSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const imageRef = useReveal<HTMLDivElement>({ type: 'mask', threshold: 0.2 });
  const contentRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2, delay: 100 });

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="about-heading">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          ref={imageRef}
          className="relative w-full aspect-[4/3] lg:aspect-[3/4] order-2 lg:order-1 overflow-hidden rounded-2xl"
        >
          <img
            src="/barra-trago.jpg"
            alt="Barra de coctelería de madera natural"
            className="w-full h-full object-cover"
          />
          {isDesktop && (
            <img
              src="/madera.jpg"
              alt="Detalle de ingredientes botánicos"
              className="absolute bottom-4 right-4 w-40 h-40 rounded-xl object-cover"
              style={{ border: '2px solid var(--color-border)' }}
            />
          )}
        </div>

        <div ref={contentRef} className="flex flex-col gap-5 order-1 lg:order-2">
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
            Nuestra Esencia
          </span>

          <h2
            id="about-heading"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
            }}
          >
            Barras de diseño en madera natural
          </h2>

          <ul className="flex flex-col gap-3 mt-2">
            {FEATURES.map((text) => (
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
