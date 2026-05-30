import { CheckCircle2 } from 'lucide-react';

type Feature = {
  text: string;
};

const FEATURES: Feature[] = [
  { text: 'Barras artesanales en madera de roble y nogal' },
  { text: 'Ingredientes botánicos frescos de temporada' },
  { text: 'Bartenders certificados con experiencia internacional' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-[#F9F7F4] scroll-mt-24 rounded-3xl" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="relative w-full h-[500px]">
          <div
            className="rounded-3xl w-full h-full bg-gradient-to-br from-[#4B4139]/30 via-[#D4C5A9] to-[#4B4E32]/20"
            role="img"
            aria-label="Barra de coctelería de madera natural"
          />

          <div
            className="absolute bottom-4 right-4 w-48 h-48 rounded-2xl border-4 border-white bg-gradient-to-tl from-[#4B4E32]/40 via-[#4B4139]/20 to-[#EAE7E0] shadow-lg"
            role="img"
            aria-label="Detalle de ingredientes botánicos"
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-xs sm:text-sm font-medium text-[#4B4139] uppercase tracking-[0.2em]">
            Nuestra Esencia
          </span>

          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mt-2 mb-4 text-[#4B4139]">
            Barras de diseño en <span className="text-[#4B4139]">madera natural</span>
          </h2>

          <ul className="flex flex-col gap-4">
            {FEATURES.map((feature) => (
              <li key={feature.text} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4B4139] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-neutral-700 text-[15px] leading-relaxed">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
