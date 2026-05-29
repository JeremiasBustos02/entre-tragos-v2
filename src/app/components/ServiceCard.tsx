import { type LucideProps } from 'lucide-react';
import { Leaf, Martini, Wine } from 'lucide-react';

import type { IconType, ServiceCardProps } from '../types/services';

const ICON_MAP: Record<IconType, React.ComponentType<LucideProps>> = {
  martini: Martini,
  wine: Wine,
  leaf: Leaf,
};

export default function ServiceCard({ title, description, price, iconType, tag }: ServiceCardProps) {
  const IconComponent = ICON_MAP[iconType];

  return (
    <article className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default">
      {tag && (
        <span className="self-end bg-[#8B5A2B]/10 text-[#8B5A2B] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          {tag}
        </span>
      )}

      <IconComponent className="w-8 h-8 text-[#2D5A27]" aria-hidden="true" />

      <h3 className="text-lg font-semibold text-[#1A1A1A]">{title}</h3>

      <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>

      <p className="mt-auto text-base font-bold text-[#2D5A27]">{price}</p>
    </article>
  );
}
