import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    question: '¿Cuánto tiempo antes debo reservar?',
    answer:
      'Recomendamos reservar con al menos dos semanas de anticipación, pero aceptamos eventos con hasta 72 horas de anticipación según disponibilidad.',
  },
  {
    question: '¿Puedo personalizar el menú de cócteles?',
    answer:
      'Sí, diseñamos un menú a la medida de tus gustos y la temática de tu evento, incluyendo opciones signature creadas especialmente para la ocasión.',
  },
  {
    question: '¿Cuál es el número mínimo de invitados?',
    answer:
      'Trabajamos desde 20 invitados. Para eventos más pequeños contáctanos directamente y buscaremos una opción especial para ti.',
  },
  {
    question: '¿Cuánto tiempo toma la instalación?',
    answer:
      'Llegamos dos horas antes del evento para montaje y decoración. El servicio de barra tiene una duración de 4 a 6 horas dependiendo del paquete contratado.',
  },
  {
    question: '¿Incluyen opciones sin alcohol?',
    answer:
      'Por supuesto. Ofrecemos mocktails botánicos, aguas frescas artesanales y opciones para todos los gustos, incluso para quienes prefieren no tomar alcohol.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 scroll-mt-24 rounded-3xl"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-medium text-[#8B5A2B] uppercase tracking-[0.2em]">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mt-2 mb-4 text-zinc-900"
          >
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5A27] to-[#8B5A2B]">Frecuentes</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'bg-white border-[#2D5A27]/20 shadow-md'
                    : 'bg-white border-neutral-200 hover:border-[#2D5A27]/20 hover:shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="cursor-pointer w-full flex items-center justify-between gap-4 py-5 px-5 sm:px-6 text-left transition-all duration-200 hover:bg-stone-50 focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <span
                    className={`text-base sm:text-lg font-medium transition-colors duration-200 ${
                      isOpen ? 'text-[#2D5A27]' : 'text-[#1A1A1A]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#2D5A27]/10 rotate-180'
                        : 'bg-neutral-100'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#2D5A27]" />
                  </div>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden min-h-0">
                    <p className="px-5 sm:px-6 pb-5 text-sm sm:text-[15px] text-neutral-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-neutral-500 text-sm mt-10">
          ¿No encuentras lo que buscas?{' '}
          <a
            href="#contact"
            className="text-[#2D5A27] font-medium hover:underline focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none rounded-md"
          >
            Contáctanos
          </a>
        </p>
      </div>
    </section>
  );
}
