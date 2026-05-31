export default function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #4B4E32, #4B4E32, #4B4E32, #4B4E32)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 15s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute rounded-full blur-[80px]"
        style={{
          width: '450px',
          height: '450px',
          background: '#D6C29A',
          opacity: 0.18,
          top: '-5%',
          left: '-5%',
          animation: 'float-cta 12s ease-in-out infinite',
        }}
      />

      <div
        className="absolute rounded-full blur-[90px]"
        style={{
          width: '350px',
          height: '350px',
          background: '#8B6B4A',
          opacity: 0.15,
          bottom: '-10%',
          right: '0%',
          animation: 'float-cta 10s ease-in-out infinite reverse',
        }}
      />

      <div
        className="absolute rounded-full blur-[70px]"
        style={{
          width: '280px',
          height: '280px',
          background: '#B89A6A',
          opacity: 0.12,
          top: '35%',
          left: '45%',
          animation: 'float-cta 14s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-0">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-0 lg:gap-24 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase">
              Reservá tu fecha
            </span>

            <h2 className="text-5xl lg:text-5xl xl:text-7xl font-serif font-bold mt-4 mb-6 text-white">
              ¿Listo para hacer tu evento inolvidable?
            </h2>

            <p className="text-white/70 text-base sm:text-lg max-w-xl">
              Cotizá tu barra personalizada y sorprendé a tus invitados con una
              experiencia única.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#4B4E32] rounded-full px-8 py-4 text-base font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
              >
                Cotizá Gratis
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white rounded-full px-8 py-4 text-base font-medium transition-all duration-300 ease-out hover:border-white hover:bg-white/20 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] backdrop-blur-sm"
              >
                Mirá ejemplos
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/cocktail-cta.png"
              alt="Cóctel premium"
              className="w-full max-w-lg lg:max-w-3xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}