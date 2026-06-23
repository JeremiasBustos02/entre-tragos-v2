import { useEffect, useRef, useState } from 'react';
import heroImg from '../../assets/hero.png';
import { useMagneticButton } from '../hooks/useMagneticButton';

const HEADING = 'LA BARRA QUE VA A TU EVENTO';

function splitHeading(text: string): { char: string; isSpace: boolean }[] {
  return text.split('').map((char) => ({ char, isSpace: char === ' ' }));
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [charsVisible, setCharsVisible] = useState(false);
  const ticking = useRef(false);
  const { ref: magneticRef } = useMagneticButton<HTMLAnchorElement>();

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

  // Trigger character reveal after mount
  useEffect(() => {
    const t = setTimeout(() => setCharsVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const contentOpacity = Math.max(1 - scrollY / 600, 0);
  const contentY = Math.min(scrollY * 0.12, 50);
  const bgY = Math.min(scrollY * 0.3, 120);
  const headingChars = splitHeading(HEADING);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform' }}
      >
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${bgY}px) scale(1.1)`,
            opacity: 0.08,
            willChange: 'transform',
          }}
        />
      </div>

      {/* Content — parallax + opacity fade */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 py-32 max-w-3xl mx-auto w-full"
        style={{
          transform: `translateY(${contentY}px)`,
          opacity: contentOpacity,
          willChange: 'transform, opacity',
        }}
      >
        {/* Heading — character-by-character reveal */}
        <h1
          className="leading-[1.05] tracking-tight"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 64px)',
            color: 'var(--color-text)',
          }}
          aria-label={HEADING}
        >
          {headingChars.map(({ char, isSpace }, i) =>
            isSpace ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <span
                key={i}
                className={`hero-char ${charsVisible ? 'is-visible' : ''}`}
                style={{
                  animationDelay: `${i * 25}ms`,
                }}
                aria-hidden="true"
              >
                {char}
              </span>
            )
          )}
        </h1>

        <p
          className={`mt-5 max-w-xl hero-subtitle ${charsVisible ? 'is-visible' : ''}`}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            color: 'var(--color-accent)',
            lineHeight: 1.3,
            transition: 'opacity 600ms ease-out 500ms, transform 600ms ease-out 500ms',
          }}
        >
          Vos ponés las bebidas, nosotros ponemos la barra.
        </p>

        <p
          className={`mt-5 max-w-lg leading-relaxed hero-subtitle ${charsVisible ? 'is-visible' : ''}`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(15px, 2vw, 17px)',
            color: 'var(--color-text-secondary)',
            transition: 'opacity 600ms ease-out 650ms, transform 600ms ease-out 650ms',
          }}
        >
          Barras móviles exclusivas para bodas, eventos corporativos y celebraciones privadas en Mar del Plata.
        </p>

        <div
          className={`mt-10 hero-cta ${charsVisible ? 'is-visible' : ''}`}
          style={{
            transition: 'opacity 600ms ease-out 800ms, transform 600ms ease-out 800ms',
          }}
        >
          <a
            ref={magneticRef}
            href="#contacto"
            className="magnetic-btn inline-flex items-center justify-center rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)]"
            style={{
              fontFamily: 'var(--font-sans)',
              padding: '16px 40px',
              fontSize: '16px',
            }}
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
