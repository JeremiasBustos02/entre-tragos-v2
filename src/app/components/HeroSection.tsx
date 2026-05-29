import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen overflow-hidden bg-[#EAE7E0] rounded-3xl flex flex-col items-center justify-center scroll-mt-24"
    >
      <div
        className="absolute inset-0 w-full h-full object-cover pointer-events-none bg-gradient-to-br from-[#8B5A2B]/20 via-[#EAE7E0] to-[#2D5A27]/10"
        role="img"
        aria-label="Ambiente de barra de coctelería con madera y botánicos"
      />

      <div className="absolute inset-0 bg-[#FDFBF7]/60 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[13px] text-neutral-700">
          <span className="w-2 h-2 rounded-full bg-[#2D5A27]" aria-hidden="true" />
          Coctelería Premium
        </div>

        <h1
          id="hero-heading"
          className="text-[clamp(36px,8vw,72px)] leading-[1.05] font-medium mt-6 text-[#1A1A1A]"
        >
          Elevando la{' '}
          <span className="font-serif italic text-[#2D5A27]">
            Coctelería
          </span>
          <br />
          en tu evento
        </h1>

        <p className="text-neutral-700 mt-6 max-w-lg text-[clamp(13px,3.5vw,16px)]">
          Barras móviles de diseño, ingredientes botánicos y bartenders profesionales.
        </p>

        <a
          href="#cotizar"
          className="mt-8 inline-flex items-center gap-1.5 bg-[#8B5A2B] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#744a22] transition-colors focus-visible:ring-2 focus-visible:ring-[#8B5A2B] focus-visible:outline-none"
        >
          Cotiza tu evento
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
