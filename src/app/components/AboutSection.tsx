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
    <section id="about" className="py-24 px-4 bg-[#FDFBF7]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="relative w-full h-[500px]">
          <div
            className="rounded-3xl w-full h-full bg-gradient-to-br from-[#8B5A2B]/30 via-[#D4C5A9] to-[#2D5A27]/20"
            role="img"
            aria-label="Barra de coctelería de madera natural"
          />

          <div
            className="absolute bottom-4 right-4 w-48 h-48 rounded-2xl border-4 border-white bg-gradient-to-tl from-[#2D5A27]/40 via-[#8B5A2B]/20 to-[#EAE7E0] shadow-lg"
            role="img"
            aria-label="Detalle de ingredientes botánicos"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[#8B5A2B] uppercase text-sm font-semibold tracking-wider">
            Nuestra Esencia
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-[1.15]">
            Barras de diseño en madera natural
          </h2>

          <ul className="flex flex-col gap-4">
            {FEATURES.map((feature) => (
              <li key={feature.text} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2D5A27] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-neutral-700 text-[15px] leading-relaxed">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
