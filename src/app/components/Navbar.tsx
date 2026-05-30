import { useEffect, useState } from 'react';
import { ChevronRight, Leaf, Menu, X } from 'lucide-react';

import { NAV_LINKS } from '../../types/navigation';

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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] max-w-[760px]">
      <nav className="bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-neutral-200 px-4 py-2 w-full flex justify-between items-center">
          <a
            href="#inicio"
            aria-label="Entre Tragos - Inicio"
            className="focus-visible:ring-2 focus-visible:ring-[#4B4E32] focus-visible:ring-offset-2 focus-visible:outline-none rounded-full flex flex-row items-center gap-2 text-sm font-medium text-[#261713] transition-opacity duration-200 hover:opacity-80"
          >
            <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-[#4B4E32]" />
            <p className="font-medium font-bold">EntreTragos</p>
          </a>

          <div className="hidden md:flex gap-6 text-sm text-neutral-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#4B4E32] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#4B4E32] focus-visible:ring-offset-2 focus-visible:outline-none rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#4B4E32] text-white rounded-full px-4 py-2 text-sm font-medium shadow-[0_2px_6px_rgba(45,90,39,0.2)] transition-all duration-300 ease-in-out hover:bg-[#3A3D28] hover:shadow-[0_8px_24px_rgba(45,90,39,0.3)] hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#4B4E32] focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
            >
              Cotizar Evento
            </a>

            <button
              className="md:hidden p-2.5 cursor-pointer hover:bg-neutral-100 rounded-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#4B4E32] focus-visible:ring-offset-2 focus-visible:outline-none"
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
                  className="text-neutral-700 text-sm px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#4B4E32] focus-visible:ring-offset-2 focus-visible:outline-none"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-neutral-200 my-1" />
              <a
                href="#contact"
                role="menuitem"
                className="flex items-center justify-center gap-1.5 bg-[#4B4E32] text-white rounded-full px-4 py-2.5 text-sm font-medium shadow-[0_2px_4px_rgba(45,90,39,0.1)] transition-all duration-300 ease-in-out hover:bg-[#3A3D28] hover:shadow-[0_2px_4px_rgba(45,90,39,0.1)] hover:scale-[1.01] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#4B4E32] focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
                onClick={closeMenu}
              >
                Cotizar Evento
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
    </header>
  );
}
