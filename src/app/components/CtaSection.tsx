import { ChevronRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#2D5A27] py-20 sm:py-12 rounded-3xl">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.12) 50%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.12) 50%, transparent 52%)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.15]">
          ¿Listo para hacer tu evento inolvidable?
        </h2>

        <p className="text-white/80 text-base sm:text-lg max-w-xl">
          Cotiza tu barra personalizada y sorprende a tus invitados con una experiencia única.
        </p>

        <a
          href="#cotizar"
          className="mt-2 inline-flex items-center gap-2 bg-white text-[#2D5A27] rounded-full px-8 py-4 text-base font-semibold hover:bg-neutral-100 transition-colors shadow-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        >
          Cotiza Ahora
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
