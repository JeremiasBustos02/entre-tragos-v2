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
    <section id="servicios" className="bg-[#F4F1EB] rounded-3xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 w-full max-w-[880px] mx-auto shadow-xl relative z-20 mt-[-4rem] scroll-mt-24" aria-labelledby="servicios-heading">
      <p className="text-center text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#2D5A27] mb-3">
        Lo que ofrecemos
      </p>
      <h2 id="servicios-heading" className="text-center text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight mb-8 sm:mb-10">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.iconType} {...service} />
        ))}
      </div>
    </section>
  );
}
