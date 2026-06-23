import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const COUNTERS = [
  { value: 250, suffix: '+', label: 'Eventos realizados' },
  { value: 5000, suffix: '+', label: 'Cocktails servidos' },
  { value: 100, suffix: '%', label: 'Satisfacción' },
];

const TESTIMONIALS = [
  {
    name: 'Lucía M.',
    event: 'Casamiento en Mar del Plata',
    text: 'La barra fue el punto focal de la fiesta. Los invitados no paraban de felicitarnos por la calidad de los cócteles y la atención.',
  },
  {
    name: 'Martín R.',
    event: 'Evento corporativo',
    text: 'Profesionales de punta a punta. Armaron una propuesta perfecta para nuestro evento empresarial con más de 150 asistentes.',
  },
  {
    name: 'Sofía P.',
    event: 'Cumpleaños de 15',
    text: 'Superaron todas nuestras expectativas. El mocktail de frutos rojos fue la sensación de la noche.',
  },
];

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span
        className="tabular-nums"
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: 'clamp(36px, 5vw, 52px)',
          color: 'var(--color-accent)',
          lineHeight: 1,
        }}
      >
        {count}{suffix}
      </span>
      <span
        className="mt-2"
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof TESTIMONIALS[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.15, stagger: index });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-3 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex flex-col gap-0.5 mt-auto pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--color-text)',
          }}
        >
          {testimonial.name}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '13px',
            color: 'var(--color-accent)',
          }}
        >
          {testimonial.event}
        </span>
      </div>
    </div>
  );
}

export default function TrustSignals() {
  const headerRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2 });

  return (
    <section className="w-full px-5 py-15 sm:px-8 sm:py-15 lg:px-12" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-[1100px] mx-auto">
        <div ref={headerRef} className="text-center mb-14">
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
            Confianza
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
            }}
          >
            Números que hablan
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          {COUNTERS.map((counter) => (
            <AnimatedCounter key={counter.label} value={counter.value} suffix={counter.suffix} label={counter.label} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
