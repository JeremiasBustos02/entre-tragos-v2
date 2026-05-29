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
      className="py-20  sm:py-14 scroll-mt-24 rounded-3xl"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 ">
        <h2
          id="faq-heading"
          className="text-center text-3xl sm:text-4xl font-serif text-[#1A1A1A] mb-10"
        >
          Preguntas Frecuentes
        </h2>

        <div className="divide-y divide-neutral-200">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;

            return (
              <div key={index} className="py-1">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="cursor-pointer w-full flex items-center justify-between gap-4 py-4 text-left text-base font-medium text-[#1A1A1A] hover:bg-[#FDFBF7] -mx-4 px-4 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#2D5A27]/50 focus-visible:outline-none"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden min-h-0">
                    <p className="pb-4 text-sm text-neutral-600 leading-relaxed">
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
            className="text-[#2D5A27] font-medium hover:underline"
          >
            Contáctanos
          </a>
        </p>
      </div>
    </section>
  );
}
