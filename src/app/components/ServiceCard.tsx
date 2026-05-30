import { ChevronRight, Leaf, Martini, Wine } from 'lucide-react';
import { type LucideProps } from 'lucide-react';

import type { IconType, ServiceCardProps } from '../types/services';

const ICON_MAP: Record<IconType, React.ComponentType<LucideProps>> = {
  martini: Martini,
  wine: Wine,
  leaf: Leaf,
};

export default function ServiceCard({ title, description, price, iconType, tag }: ServiceCardProps) {
  const IconComponent = ICON_MAP[iconType];

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.2)] border border-neutral-100/80 flex flex-col transition-all duration-300 ease-out hover:bg-[#4B4139] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#4B4E32] focus-within:ring-offset-2">
      
      {/* Línea superior: se oculta o cambia en hover para no hacer ruido visual */}
      <div className="h-1.5 w-full bg-[#4B4139] transition-colors duration-300 group-hover:bg-[#F4F4F4]" aria-hidden="true" />

      {tag && (
        <span className="absolute top-4 right-4 bg-[#4B4139] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10 transition-colors duration-300 group-hover:bg-[#F4F4F4] group-hover:text-[#4B4139]">
          {tag}
        </span>
      )}

      <div className="grid grid-rows-[auto_1fr_auto] flex-1 p-5 sm:p-6">
        <div className="flex flex-col gap-3">
          
          {/* Contenedor del ícono: cambia el fondo a un blanco translúcido en hover */}
          <div className="w-12 h-12 rounded-xl bg-[#4B4139]/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
            <IconComponent className="w-6 h-6 text-[#4B4139] transition-colors duration-300 group-hover:text-[#F4F4F4]" aria-hidden="true" />
          </div>

          {/* Título */}
          <h3 className="text-lg sm:text-xl font-semibold text-[#4B4139] leading-snug transition-colors duration-300 group-hover:text-[#F4F4F4]">
            {title}
          </h3>

          {/* Descripción */}
          <p className="text-sm sm:text-[15px] text-neutral-500 leading-relaxed transition-colors duration-300 group-hover:text-[#F4F4F4]/80">
            {description}
          </p>
        </div>

        {/* Contenedor inferior: cambia el color de la línea separadora */}
        <div className="pt-4 mt-4 flex items-center justify-between border-t border-neutral-100 transition-colors duration-300 group-hover:border-white/20">
          
          {/* Precio */}
          <p className="text-base sm:text-lg font-bold text-[#4B4139] transition-colors duration-300 group-hover:text-[#F4F4F4]">
            {price}
          </p>
          
          {/* Enlace "Ver más" */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#4B4139] transition-all duration-300 group-hover:text-[#F4F4F4] group-hover:gap-2 focus-visible:ring-2 focus-visible:ring-[#4B4E32] focus-visible:ring-offset-2 focus-visible:outline-none rounded-md px-2 py-1 -mr-2"
          >
            Ver más
            <ChevronRight className="w-4 h-4 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
}