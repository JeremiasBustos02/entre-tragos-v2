import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.15, 60);
  const contentOpacity = Math.max(1 - scrollY / 600, 0);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div
        className="relative z-10 flex flex-col items-center text-center px-6 py-32 max-w-3xl mx-auto w-full"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          opacity: contentOpacity,
          willChange: 'transform, opacity',
        }}
      >
        <h1
          className="leading-[1.05] tracking-tight"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 64px)',
            color: 'var(--color-text)',
            animation: 'heroFadeUp 600ms ease-out both',
          }}
        >
          LA BARRA QUE VA A TU EVENTO
        </h1>

        <p
          className="mt-5 max-w-xl"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            color: 'var(--color-accent)',
            lineHeight: 1.3,
            animation: 'heroFadeIn 600ms ease-out 150ms both',
          }}
        >
          Vos ponés las bebidas, nosotros ponemos la barra.
        </p>

        <p
          className="mt-5 max-w-lg leading-relaxed"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(15px, 2vw, 17px)',
            color: 'var(--color-text-secondary)',
            animation: 'heroFadeIn 600ms ease-out 300ms both',
          }}
        >
          Barras móviles exclusivas para bodas, eventos corporativos y celebraciones privadas en Mar del Plata.
        </p>

        <div
          className="mt-10"
          style={{ animation: 'heroFadeIn 600ms ease-out 450ms both' }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
            style={{
              fontFamily: 'var(--font-sans)',
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-bg)',
              padding: '16px 40px',
              fontSize: '16px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            }}
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
