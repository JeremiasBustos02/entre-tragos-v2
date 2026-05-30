import type { ServiceCardProps } from '../types/services';

import ServiceCard from './ServiceCard';

const SERVICES: ServiceCardProps[] = [
  {
    title: 'Clásica',
    description: 'Barra básica con cócteles clásicos para eventos íntimos.',
    price: 'Desde $8,500',
    iconType: 'martini',
  },
  {
    title: 'Premium',
    description: 'Mixología de autor con ingredientes botánicos de temporada.',
    price: 'Desde $15,000',
    iconType: 'wine',
    tag: 'Más Elegido',
  },
  {
    title: 'Sin Alcohol',
    description: 'Cócteles sin alcohol con ingredientes frescos y botánicos.',
    price: 'Desde $6,500',
    iconType: 'leaf',
  },
];

export default function ServicesTray() {
  return (
    <section id="servicios" className="bg-[#E8E3D8] rounded-3xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 w-full max-w-[880px] mx-auto shadow-xl relative z-20 mt-[-4rem] scroll-mt-32 border border-[#D5CFC4]" aria-labelledby="servicios-heading">
      <div className="text-center mb-10">
        <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#8B5A2B]">
          Lo que ofrecemos
        </span>
        <h2 id="servicios-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mt-2 mb-4 text-zinc-900">
          Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5A27] to-[#8B5A2B]">Servicios</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.iconType} {...service} />
        ))}
      </div>
    </section>
  );
}
