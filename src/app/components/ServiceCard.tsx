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
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-neutral-100/80 flex flex-col transition-all duration-300 ease-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#2D5A27] focus-within:ring-offset-2">
      <div className="h-1.5 w-full bg-gradient-to-r from-[#2D5A27] via-[#2D5A27] to-[#8B5A2B]" aria-hidden="true" />

      {tag && (
        <span className="absolute top-4 right-4 bg-[#8B5A2B] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10">
          {tag}
        </span>
      )}

      <div className="grid grid-rows-[auto_1fr_auto] flex-1 p-5 sm:p-6">
        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#2D5A27]/8 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#2D5A27]/12">
            <IconComponent className="w-6 h-6 text-[#2D5A27]" aria-hidden="true" />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] leading-snug">{title}</h3>

          <p className="text-sm sm:text-[15px] text-neutral-500 leading-relaxed">{description}</p>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
          <p className="text-base sm:text-lg font-bold text-[#2D5A27]">{price}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#2D5A27] transition-all duration-200 hover:gap-2 hover:text-[#1F3F1A] focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none rounded-md px-2 py-1 -mr-2"
          >
            Ver más
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
