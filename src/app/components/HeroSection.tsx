import { ChevronDown, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className=" rounded-3xl relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Fallback: gradientes oscuros (se ven si el video no carga) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D3A2D] to-[#1A1A1A]"
        aria-hidden="true"
      />

      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://player.vimeo.com/external/435674703.hd.mp4?s=6f431e01b1de29b207558f0ef1a1fb6384fa6b21&profile_id=174&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Overlay verde oscuro para legibilidad */}
      <div
        className="absolute inset-0 bg-[#2D5A27]/40"
        aria-hidden="true"
      />

      {/* Vignette de profundidad */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 h-full max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.15)] border border-white/20 text-[13px] text-white/90">
          <span className="w-2 h-2 rounded-full bg-[#2D5A27] animate-pulse" aria-hidden="true" />
          Coctelería Premium
        </div>

        <span className="text-xs sm:text-sm font-medium text-white/60 uppercase tracking-[0.2em] mt-6">
          Experiencia Premium
        </span>

        <h1
          id="hero-heading"
          className="text-[clamp(40px,8vw,80px)] leading-[1.05] font-serif font-bold mt-4 text-white"
        >
          Elevando la{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Coctelería
          </span>
          <br />
          en tu evento
        </h1>

        <p className="text-white/70 mt-6 max-w-xl text-[clamp(15px,3.5vw,18px)] leading-relaxed">
          Barras móviles de diseño, ingredientes botánicos y bartenders profesionales.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-[#2D5A27] rounded-full px-8 py-4 text-base font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D5A27] focus-visible:outline-none"
          >
            Cotizá Gratis
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white rounded-full px-8 py-4 text-base font-medium transition-all duration-300 ease-out hover:border-white/60 hover:bg-white/10 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D5A27] focus-visible:outline-none"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
