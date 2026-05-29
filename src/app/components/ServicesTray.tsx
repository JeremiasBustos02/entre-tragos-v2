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
    <section id="servicios" className="bg-[#F4F1EB] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto shadow-xl relative z-20 mt-[-4rem] scroll-mt-24" aria-labelledby="servicios-heading">
      <h2 id="servicios-heading" className="text-center text-3xl sm:text-4xl font-serif text-[#1A1A1A] mb-6 sm:mb-8">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.iconType} {...service} />
        ))}
      </div>
    </section>
  );
}
