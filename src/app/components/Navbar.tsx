import { useCallback, useEffect, useRef, useState } from 'react';

import { NAV_LINKS } from '../types/navigation';
import { WHATSAPP_BASE_URL, WHATSAPP_MESSAGES } from '../constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    requestAnimationFrame(() => setIsMenuVisible(true));
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  const toggleMenu = () => {
    if (isMenuOpen) closeMenu();
    else openMenu();
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const isScrolled = currentY > 20;

      setScrolled(isScrolled);

      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 5) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - 5) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    closeMenu();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  };

  const linkCount = NAV_LINKS.length;

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HEADER — Slides away when menu opens.
          When closed: visible pill with logo + hamburger.
          When open: translateY(-120%) out of view.
         ═══════════════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-5 md:pt-4"
        style={{
          transform: (hidden || isMenuOpen) ? 'translateY(-120%)' : 'translateY(0)',
          transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: isMenuOpen ? 'none' : 'auto',
        }}
      >
        <nav
          className="flex items-center justify-between"
          style={{
            width: '100%',
            maxWidth: '580px',
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
            borderRadius: '9999px',
            padding: '10px 20px',
            boxShadow: scrolled
              ? '0 4px 24px var(--color-black-35)'
              : '0 2px 12px var(--color-black-20)',
          }}
        >
          {/* Logo */}
          <a
            href="#inicio"
            aria-label="Entre Tragos - Inicio"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-dark)] focus-visible:ring-offset-2 rounded-full"
          >
            <span
              className="text-sm font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-bg)' }}
            >
              EntreTragos
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)] focus-visible:ring-offset-2 rounded-full px-2 py-1 text-[var(--color-bg)] opacity-70 hover:opacity-100 hover:text-[var(--color-bg)]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger → X (only visible when menu closed) */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full"
            style={{ position: 'relative' }}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span
              className="flex flex-col items-center justify-center"
              style={{ width: '20px', height: '14px', position: 'relative' }}
            >
              <span
                style={{
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'var(--color-bg)',
                  borderRadius: '1px',
                }}
              />
              <span
                style={{
                  display: 'block',
                  position: 'absolute',
                  top: '6px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'var(--color-bg)',
                  borderRadius: '1px',
                }}
              />
              <span
                style={{
                  display: 'block',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'var(--color-bg)',
                  borderRadius: '1px',
                }}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* ═══════════════════════════════════════════════
          FULLSCREEN OVERLAY — The ONLY visible layer when open.
          z-[900] covers navbar (z-50), WhatsApp (z-50),
          and all page content. Contains its own close button.
         ═══════════════════════════════════════════════ */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="md:hidden"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 900,
            backgroundColor: 'rgba(10, 10, 10, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            opacity: isMenuVisible ? 1 : 0,
            transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            overflowY: 'auto',
          }}
        >
          {/* Accent gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: 'radial-gradient(ellipse at 50% 0%, var(--color-accent-10) 0%, transparent 50%)',
              opacity: isMenuVisible ? 1 : 0,
              transition: 'opacity 400ms ease-out 50ms',
            }}
          />

          {/* ─── CLOSE BUTTON (X) ─── */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Cerrar menú"
            style={{
              position: 'fixed',
              top: 'max(16px, env(safe-area-inset-top, 0px))',
              right: 'max(16px, env(safe-area-inset-right, 0px))',
              zIndex: 910,
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text)',
              cursor: 'pointer',
              opacity: isMenuVisible ? 1 : 0,
              transform: isMenuVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 250ms ease-out 100ms, transform 300ms cubic-bezier(0.16, 1, 0.3, 1) 100ms, background-color 200ms, border-color 200ms',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="4" x2="14" y2="14" />
              <line x1="14" y1="4" x2="4" y2="14" />
            </svg>
          </button>

          {/* ─── SCROLLABLE CONTENT ─── */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100dvh',
              paddingTop: 'max(80px, env(safe-area-inset-top, 0px))',
              paddingBottom: 'max(32px, env(safe-area-inset-bottom, 0px))',
            }}
          >
            {/* Branding */}
            <div
              className="text-center px-8"
              style={{
                opacity: isMenuVisible ? 1 : 0,
                transform: isMenuVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 300ms ease-out 100ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) 100ms',
              }}
            >
              <span
                className="block"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '20px',
                  letterSpacing: '0.04em',
                  color: 'var(--color-bg)',
                }}
              >
                EntreTragos
              </span>
              <span
                className="block mt-1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '13px',
                  color: 'var(--color-bg)',
                  opacity: 0.8,
                }}
              >
                Barras móviles para eventos
              </span>
            </div>

            {/* Accent line */}
            <div className="flex justify-center mt-6">
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  backgroundColor: 'var(--color-bg)',
                  opacity: isMenuVisible ? 0.4 : 0,
                  transition: 'opacity 300ms ease-out 150ms',
                }}
              />
            </div>

            {/* Navigation links — vertically centered */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className="w-full text-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] text-[var(--color-bg)] hover:text-[var(--color-accent)]"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 'clamp(24px, 7vw, 32px)',
                    letterSpacing: '0.02em',
                    padding: '14px 0',
                    opacity: isMenuVisible ? 1 : 0,
                    transform: isMenuVisible ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 300ms ease-out ${150 + i * 60}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${150 + i * 60}ms, color 200ms`,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div
              className="flex flex-col items-center gap-4 px-8"
              style={{
                opacity: isMenuVisible ? 1 : 0,
                transform: isMenuVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 300ms ease-out ${150 + linkCount * 60}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${150 + linkCount * 60}ms`,
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  backgroundColor: 'var(--color-bg)',
                  opacity: 0.4,
                }}
              />

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.nav)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-accent)]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  backgroundColor: 'var(--color-bg)',
                  color: 'var(--color-accent)',
                  padding: '14px 32px',
                  fontSize: '15px',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  setTimeout(() => {
                    window.open(
                      `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.nav)}`,
                      '_blank',
                    );
                  }, 350);
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
