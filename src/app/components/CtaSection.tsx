import { ChevronRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#2D5A27] py-24 sm:py-20 lg:py-28 rounded-3xl">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.15) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase">
          Reservá tu fecha
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-[1.1] tracking-tight">
          ¿Listo para hacer tu evento inolvidable?
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
          Cotizá tu barra personalizada y sorprendé a tus invitados con una experiencia única.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-[#2D5A27] rounded-full px-8 py-4 text-base font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D5A27] focus-visible:outline-none"
          >
            Cotizá Gratis
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white rounded-full px-8 py-4 text-base font-medium backdrop-blur-sm transition-all duration-300 ease-out hover:border-white/60 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D5A27] focus-visible:outline-none active:scale-[0.98]"
          >
            Mirá ejemplos
          </a>
        </div>
      </div>
    </section>
  );
}
