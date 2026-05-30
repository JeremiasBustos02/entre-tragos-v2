import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    // Agregamos md:p-4 en el contenedor padre externo para armar el margen flotante solo en desktop
    <div className="w-full md:p-4">
      <section
        id="inicio"
        // Cambiamos rounded-b-3xl por rounded-none en mobile, y md:rounded-3xl en desktop
        className="rounded-none md:rounded-3xl relative w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden"
      >
        {/* Fallback: gradientes oscuros */}
        <div
          className="rounded-none md:rounded-3xl absolute inset-0 bg-gradient-to-br from-[#261713] via-[#3A3D28] to-[#261713]"
          aria-hidden="true"
        />

        {/* Video de fondo */}
        <video
          className="rounded-none md:rounded-3xl absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/435674703.hd.mp4?s=6f431e01b1de29b207558f0ef1a1fb6384fa6b21&profile_id=174&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>

        {/* Overlay verde oscuro */}
        <div
          className="rounded-none md:rounded-3xl absolute inset-0 bg-[#4B4E32]/40"
          aria-hidden="true"
        />

        {/* Vignette de profundidad */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"
          aria-hidden="true"
        />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 h-full max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.15)] border border-white/20 text-[13px] text-[#FEFEFE]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
            Coctelería Premium
          </div>

          <h1
            id="hero-heading"
            className="text-[clamp(48px,12vw,80px)] leading-[1.05] font-serif font-bold mt-4 text-white"
          >
            Elevando la{' '}
            <span className="italic">
              Coctelería
            </span>
            <br />
            en tu evento
          </h1>

          <p className="text-white/70 mt-6 max-w-xl text-[clamp(15px,3.5vw,18px)] leading-relaxed">
            Barras móviles premium para bodas, cumpleaños, eventos corporativos y celebraciones especiales.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-[#4B4E32] rounded-full px-8 py-4 text-base font-semibold shadow-md transition-all duration-300 hover:bg-[#4B4E32] hover:text-white hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B4E32] focus-visible:outline-none"            >
              Cotizá Gratis
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white rounded-full px-8 py-4 text-base font-medium transition-all duration-300 ease-out hover:border-white hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B4E32] focus-visible:outline-none backdrop-blur-sm">
              Ver servicios
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}