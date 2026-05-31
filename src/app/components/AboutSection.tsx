import { CheckCircle2 } from 'lucide-react';

type Feature = {
  text: string;
};

const FEATURES: Feature[] = [
  { text: 'Barras artesanales que elevan la estética de tu evento' },
  { text: 'Propuestas adaptadas a bodas, cumpleaños, eventos empresariales y más.' },
  { text: 'Atención profesional para que vos solo te ocupes de disfrutar' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-[#F9F7F4] scroll-mt-24 rounded-3xl" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        
        {/* CONTENEDOR DE FOTOS */}
        <div className="relative w-full h-[500px] order-2 lg:order-1">
          {/* Foto Principal (Reemplaza al gradiente grande) */}
          <img
            src="/barra-trago.jpg"
            alt="Barra de coctelería de madera natural"
            className="rounded-3xl w-full h-full object-cover shadow-sm"
            loading="lazy"
          />

          {/* Foto Secundaria Flotante (Reemplaza al segundo gradiente pequeño) */}
          <img
            src="/madera.jpg"
            alt="Detalle de ingredientes botánicos"
            className="absolute bottom-4 right-4 w-48 h-48 rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        {/* CONTENEDOR DE TEXTO */}
        <div className="flex flex-col gap-4 order-1 lg:order-2">
          <span className="text-xs sm:text-sm font-medium text-[#4B4139] uppercase tracking-[0.2em]">
            Nuestra Esencia
          </span>

          <h2 id="about-heading" className="text-5xl font-serif font-bold leading-tight text-[#4B4139]">
            Barras de diseño en madera natural
          </h2>

          <ul className="flex flex-col gap-2">
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