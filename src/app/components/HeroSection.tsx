import { useEffect, useRef, useState } from 'react';
import heroImg from '/hero.png';
import { useMagneticButton } from '../hooks/useMagneticButton';

// NOTE: Navbar alignment issue lives in Navbar.tsx — out of scope here

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
  const headingChars = splitHeading(HEADING);

  return (
    <section
      id="inicio"
      className="grid grid-cols-1 md:grid-cols-[3fr_1.2fr] 2xl:grid-cols-[2fr_1fr] min-h-screen overflow-hidden"
    >
      {/* Left panel — content */}
      <div className="
  relative
  flex
  flex-col
  items-center
  justify-center
  px-6
  pt-20
  md:pt-0
  md:pl-16
  md:pr-8
  min-h-[60vh]
  md:min-h-0
  overflow-hidden
">
        {/* Floating ambient elements — left panel only */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[15%] left-[8%] w-2 h-2 rounded-full"
            style={{
              backgroundColor: 'var(--color-accent)',
              opacity: 0.12,
              animation: 'float-gentle 8s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-[25%] right-[12%] w-3 h-3 rounded-full"
            style={{
              backgroundColor: 'var(--color-accent)',
              opacity: 0.08,
              animation: 'float-gentle 10s ease-in-out infinite 1s',
            }}
          />
          <div
            className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: 'var(--color-accent)',
              opacity: 0.1,
              animation: 'float-gentle 7s ease-in-out infinite 2s',
            }}
          />
          <div
            className="absolute bottom-[20%] right-[8%] w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: 'var(--color-accent)',
              opacity: 0.06,
              animation: 'float-gentle 9s ease-in-out infinite 0.5s',
            }}
          />
        </div>

        {/* Content — parallax + opacity fade */}
        <div
          className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left px-6 py-16 md:py-32 max-w-3xl w-full"
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
              fontSize: 'clamp(28px, 8vw, 36px)',
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
              fontSize: 'clamp(18px, 5vw, 24px)',
              color: 'var(--color-accent)',
              lineHeight: 1.3,
              transition: 'opacity 600ms ease-out 500ms, transform 600ms ease-out 500ms',
            }}
          >
            Vos ponés las bebidas, nosotros ponemos la barra.
          </p>

          <p
            className={`mt-5 max-w-[85%] md:max-w-lg leading-relaxed hero-subtitle ${charsVisible ? 'is-visible' : ''}`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2vw, 17px)',
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
            <div className="flex flex-col items-center gap-3">
              <a
                ref={magneticRef}
                href="#contacto"
                className="magnetic-btn inline-flex items-center justify-center rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)] w-full max-w-[280px] md:w-auto md:max-w-none py-4 px-8 md:py-4 md:px-10"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                }}
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — image (desktop) */}
      <div
        className="relative hidden md:block overflow-hidden"
        style={{ boxShadow: 'inset 8px 0 24px rgba(0,0,0,0.08)' }}
      >
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile image — stacked below text */}
      <div className="relative md:hidden overflow-hidden h-[40vh]">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
