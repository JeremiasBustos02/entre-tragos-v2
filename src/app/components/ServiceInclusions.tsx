import { useReveal } from '../hooks/useReveal';

const INCLUSIONS = [
  { feature: 'Barra móvil elegante y profesional', benefit: 'Tu evento se ve profesional' },
  { feature: 'Cristalería y utensilios de coctelería', benefit: 'No comprás ni limpiás nada' },
  { feature: 'Decoración de la barra', benefit: 'Todo coordinado, sin estrés' },
  { feature: 'Organización y presentación', benefit: 'Vos solo disfrutás' },
  { feature: 'Bartender incluido según paquete', benefit: 'Cocteles perfectos, cero preocupación' },
];

function CheckCircle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="8,12 11,15 16,9" />
    </svg>
  );
}

function InclusionItem({ item, index }: { item: typeof INCLUSIONS[number]; index: number }) {
  const itemRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.1, stagger: index });

  return (
    <div
      ref={itemRef}
      className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 ease-out cursor-default bg-transparent border border-transparent hover:bg-[var(--color-surface)] hover:border-[var(--color-border)] hover:-translate-y-px"
    >
      <div
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-accent-10)' }}
      >
        <CheckCircle />
      </div>
      <div className="flex flex-col gap-0.5">
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '15px',
            color: 'var(--color-text)',
          }}
        >
          {item.feature}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
          }}
        >
          {item.benefit}
        </span>
      </div>
    </div>
  );
}

export default function ServiceInclusions() {
  const headerRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2 });

  return (
    <section
      id="servicio"
      className="w-full px-5 py-20 sm:px-8 sm:py-28 lg:px-12 noise-overlay"
      style={{ backgroundColor: 'var(--color-bg-alt)' }}
    >
      <div className="max-w-[900px] mx-auto relative z-[2]">
        <div ref={headerRef} className="text-center mb-12">
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
            Incluido
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
            }}
          >
            ¿Qué incluye nuestro servicio?
          </h2>
          <p
            className="mt-3 max-w-md mx-auto"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
            }}
          >
            Todo lo que necesitás para que tu evento sea perfecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INCLUSIONS.map((item, i) => (
            <InclusionItem key={item.feature} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
