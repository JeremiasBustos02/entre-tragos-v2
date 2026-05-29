import { useEffect, useState } from 'react';
import { ChevronRight, Leaf, Menu, X } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <header className="relative flex justify-center pt-4 sm:pt-6 px-3 sm:px-4">
      <div className="relative w-full max-w-[760px]">
        <nav className="bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-neutral-200 px-4 py-2 w-full flex justify-between items-center">
          <a href="#inicio" aria-label="Entre Tragos - Inicio">
            <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-[#2D5A27]" />
          </a>

          <div className="hidden md:flex gap-6 text-[14px] text-neutral-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#2D5A27] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#cotizar"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#2D5A27] text-white rounded-full px-4 py-2 text-[14px] font-medium hover:bg-[#244a1f] transition-colors"
            >
              Cotizar Evento
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              className="md:hidden p-1 cursor-pointer"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-neutral-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            role="menu"
            className="absolute top-full mt-2 left-0 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-neutral-200 p-4 md:hidden z-50"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className="text-neutral-700 text-[14px] px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-neutral-200 my-1" />
              <a
                href="#cotizar"
                role="menuitem"
                className="flex items-center justify-center gap-1.5 bg-[#2D5A27] text-white rounded-full px-4 py-2.5 text-[14px] font-medium hover:bg-[#244a1f] transition-colors"
                onClick={closeMenu}
              >
                Cotizar Evento
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
