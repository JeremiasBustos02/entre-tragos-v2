import { type LucideProps } from 'lucide-react';
import { Leaf, Martini, Wine } from 'lucide-react';

import type { IconType, ServiceCardProps } from '../types/services';

const ICON_MAP: Record<IconType, React.ComponentType<LucideProps>> = {
  martini: Martini,
  wine: Wine,
  leaf: Leaf,
};

export default function ServiceCard({ title, description, price, iconType }: ServiceCardProps) {
  const IconComponent = ICON_MAP[iconType];

  return (
    <article className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 flex flex-col gap-3">
      <IconComponent className="w-7 h-7 text-[#2D5A27]" aria-hidden="true" />

      <h3 className="text-[16px] font-semibold text-[#1A1A1A]">{title}</h3>

      <p className="text-[14px] text-neutral-600 leading-relaxed">{description}</p>

      <p className="mt-auto text-[15px] font-semibold text-[#2D5A27]">{price}</p>
    </article>
  );
}
