import type { ServiceCardProps } from '../types/services';

import ServiceCard from './ServiceCard';

const SERVICES: ServiceCardProps[] = [
  {
    title: 'Clásica',
    description: 'Todo lo esencial para que tu evento brille sin complicaciones.',
    price: 'Desde $8,500',
    iconType: 'martini',
  },
  {
    title: 'Premium',
    description: 'Cocteles de autor creados con ingredientes de temporada y mucho detalle.',
    price: 'Desde $15,000',
    iconType: 'wine',
    tag: 'Más Elegido',
  },
  {
    title: 'Sin Alcohol',
    description: 'Mocktails creativos con la misma dedicación y frescura que nuestros cocteles.',
    price: 'Desde $6,500',
    iconType: 'leaf',
  },
  {
    title: 'A Medida',
    description: 'Diseñamos juntos la barra, la carta y la estética para que tu evento sea exactamente como lo imaginaste.',
    price: 'Cotizá tu experiencia',
    iconType: 'sparkles',
  },
];

export default function ServicesTray() {
  return (
    <section id="servicios" className="bg-[#FEFEFE] rounded-3xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-12 w-full max-w-[1100px] mx-auto shadow-xl relative z-20 mt-[-4rem] scroll-mt-32" aria-labelledby="servicios-heading">
      <div className="text-center mb-10">
        <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#4B4139]">
          Adaptamos cada barra a tu evento
        </span>
        <h2 id="servicios-heading" className="text-5xl font-serif font-bold leading-tight mt-2 mb-4 text-[#4B4139]">
          Elegí la barra ideal</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.iconType} {...service} />
        ))}
      </div>
    </section>
  );
}
