import { ChevronRight, Star, Users, MapPin } from 'lucide-react';

export default function HeroSection() {
  const testimonials = [
    { name: 'Ana P.', text: 'El mejor servicio de barra móvil. ¡Cocteles increíbles!' },
    { name: 'Carlos R.', text: 'Profesionalismo total en nuestro evento corporativo.' },
  ];

  return (
    <div className="w-full md:p-4">
      <section
        id="inicio"
        className="rounded-none md:rounded-3xl relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* --- CAPAS DE FONDO --- */}
        <div
          className="rounded-none md:rounded-3xl absolute inset-0 bg-gradient-to-br from-[#261713] via-[#3A3D28] to-[#261713]"
          aria-hidden="true"
        />

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

        <div
          className="rounded-none md:rounded-3xl absolute inset-0 bg-[#4B4E32]/50"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
          aria-hidden="true"
        />

        {/* --- CONTENIDO PRINCIPAL --- */}
        {/* Cambiado de md:grid a lg:grid para proteger las pantallas medianas */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 py-20 md:py-32 h-full max-w-7xl mx-auto w-full">
          
          {/* COLUMNA IZQUIERDA: Texto y Acciones */}
          {/* Ahora se mantiene centrado en mobile y tablets (md), y se alinea a la izquierda solo en pantallas grandes (lg) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.15)] border border-white/20 text-[13px] text-[#FEFEFE]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
              Coctelería Premium para Eventos
            </div>

            <h1
              id="hero-heading"
              className="text-[clamp(42px,10vw,72px)] leading-[1.05] font-serif font-bold mt-4 text-white"
            >
              Elevando la{' '}
              <span className="italic text-[#D9C4A9]">
                Coctelería
              </span>
              <br />
              en tu celebración
            </h1>

            <p className="text-white/80 mt-6 max-w-xl text-[clamp(16px,3.5vw,19px)] leading-relaxed">
              Barras móviles exclusivas para bodas, eventos corporativos y celebraciones privadas. Creamos experiencias líquidas inolvidables.
            </p>

            {/* ⭐ Rating adaptado para pantallas Mobile y Medias (Oculto en pantallas grandes lg:) */}
            <div className="flex lg:hidden items-center gap-2 mt-6 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D9C4A9] fill-[#D9C4A9]" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">4.9/5</span>
              <span className="text-white/30 text-xs">|</span>
              <span className="text-white/80 text-xs">Mar del Plata</span>
            </div>

            {/* BOTONES DE ACCIÓN */}
            {/* flex-row por defecto, justificado al centro en móvil/tablet, a la izquierda en lg: */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-4 mt-8 md:mt-10 w-full">
              <a
                href="#contact"
                className="group w-auto inline-flex items-center justify-center gap-2 bg-white text-[#4B4E32] rounded-full px-6 sm:px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                Cotizá Gratis
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#servicios"
                className="w-auto inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white rounded-full px-6 sm:px-8 py-4 text-base font-medium transition-all duration-300 ease-out hover:border-white hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none backdrop-blur-sm"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: Widget de Reputación (Solo Desktop Real `lg:`) */}
          {/* Cambiado hidden md:flex por hidden lg:flex para que no interfiera en pantallas medianas */}
          <div className="hidden lg:flex flex-col items-center justify-center order-2 h-full relative">
            
            {/* Tarjeta Principal de Rating */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 w-full max-w-sm transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-[#D9C4A9] fill-[#D9C4A9]" />
                ))}
              </div>
              <p className="text-white text-5xl font-serif font-bold">4.9 / 5</p>
              <p className="text-white/70 text-sm text-center">Calificación media de más de 100 eventos exitosos</p>
              
              <div className="w-full h-px bg-white/10 my-2" />
              
              <div className="flex items-center gap-6 text-white/90">
                 <div className='flex items-center gap-2'>
                    <Users className='w-5 h-5 text-[#D9C4A9]' />
                    <span className='font-semibold'>100+</span> <span className='text-xs text-white/60'>Eventos</span>
                 </div>
                 <div className='flex items-center gap-2'>
                    <MapPin className='w-5 h-5 text-[#D9C4A9]' />
                    <span className='font-semibold'>Mar del Plata</span>
                 </div>
              </div>
            </div>

            {/* Reseñas flotantes */}
            <div className="absolute -top-[-4] -left-16 bg-white p-4 rounded-xl shadow-xl flex flex-col gap-1 w-48 transform -rotate-6 animate-float-slow">
                <p className="text-[#4B4E32] font-semibold text-sm">{testimonials[0].name}</p>
                <p className="text-[#4B4E32]/80 text-xs line-clamp-2">"{testimonials[0].text}"</p>
                <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#B89A6A] fill-[#B89A6A]" />)}
                </div>
            </div>

            <div className="absolute -bottom-8 -right-12 bg-white p-4 rounded-xl shadow-xl flex flex-col gap-1 w-56 transform rotate-3 animate-float-slow animation-delay-1000">
                <p className="text-[#4B4E32] font-semibold text-sm">{testimonials[1].name}</p>
                <p className="text-[#4B4E32]/80 text-xs line-clamp-2">"{testimonials[1].text}"</p>
                <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#B89A6A] fill-[#B89A6A]" />)}
                </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}