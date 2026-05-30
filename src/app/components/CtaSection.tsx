export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-20 lg:py-28 rounded-3xl">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #4B4E32, #4B4E32, #4B4E32, #4B4E32)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 15s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Floating animated blobs */}
      <div
        className="absolute w-72 h-72 rounded-full bg-white/[0.05] blur-3xl"
        style={{
          top: '10%',
          left: '10%',
          animation: 'float-cta 20s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute w-56 h-56 rounded-full bg-white/[0.04] blur-3xl"
        style={{
          bottom: '15%',
          right: '15%',
          animation: 'float-cta 15s ease-in-out infinite reverse',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute w-40 h-40 rounded-full bg-[#3D261E]/[0.06] blur-3xl"
        style={{
          top: '50%',
          left: '50%',
          animation: 'float-cta 18s ease-in-out infinite 2s',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase">
          Reservá tu fecha
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-[1.1] tracking-tight mt-2 mb-4 text-white">
          ¿Listo para hacer tu evento <span className="text-[#FEFEFE]">inolvidable</span>?
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
          Cotizá tu barra personalizada y sorprendé a tus invitados con una experiencia única.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-[#4B4E32] rounded-full px-8 py-4 text-base font-semibold shadow-md transition-shadow duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B4E32] focus-visible:outline-none"
          >
            Cotizá Gratis
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white rounded-full px-8 py-4 text-base font-medium backdrop-blur-sm transition-all duration-300 ease-out hover:border-white/60 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B4E32] focus-visible:outline-none active:scale-[0.98]"
          >
            Mirá ejemplos
          </a>
        </div>
      </div>
    </section>
  );
}
