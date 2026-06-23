import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

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
      'Trabajamos desde 20 invitados. Para eventos más pequeños contanos directamente y buscaremos una opción especial para vos.',
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

function FaqItem({ item, index, isOpen, onToggle }: {
  item: typeof FAQ_DATA[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const itemRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.1, stagger: index });
  const contentId = `faq-answer-${index}`;

  return (
    <div
      ref={itemRef}
      className="rounded-xl transition-all duration-200"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: `1px solid ${isOpen ? 'var(--color-accent)' : 'var(--color-border)'}`,
      }}
    >
      <button
        id={`faq-question-${index}`}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="cursor-pointer w-full flex items-center justify-between gap-4 py-5 px-5 sm:px-6 text-left transition-colors duration-200"
        style={{ backgroundColor: 'transparent' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '15px',
            color: isOpen ? 'var(--color-accent)' : 'var(--color-text)',
          }}
        >
          {item.question}
        </span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            backgroundColor: isOpen ? 'var(--color-accent-10)' : 'var(--color-bg-alt)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4,6 8,10 12,6" />
          </svg>
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
          <p
            className="px-5 sm:px-6 pb-5 leading-relaxed"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
            }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2 });

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-15 px-5 sm:px-8 lg:px-12"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[700px] mx-auto">
        <div ref={headerRef} className="text-center mb-10">
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '12px',
              color: 'var(--color-accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            FAQ
          </span>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
              marginTop: '8px',
            }}
          >
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_DATA.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        <p
          className="text-center mt-10"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
          }}
        >
          ¿No encontrás lo que buscas?{' '}
          <a
            href="#contacto"
            style={{ color: 'var(--color-accent)', fontWeight: 500 }}
            className="hover:underline"
          >
            Contactanos
          </a>
        </p>
      </div>
    </section>
  );
}