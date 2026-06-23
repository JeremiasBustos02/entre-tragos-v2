import { useReveal } from '../hooks/useReveal';

const ITEMS = [
  { label: 'Cumpleaños', icon: CakeIcon },
  { label: 'Fiestas Privadas', icon: StarIcon },
  { label: 'Casamientos', icon: RingsIcon },
  { label: 'Eventos Empresariales', icon: BriefcaseIcon },
  { label: 'Egreso / Reuniones', icon: GraduationIcon },
];

function CakeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="28" width="32" height="14" rx="2" />
      <rect x="12" y="22" width="24" height="6" rx="1" />
      <line x1="24" y1="22" x2="24" y2="16" />
      <path d="M24 16 C24 14 22 13 22 11 C22 9 24 8 24 8 C24 8 26 9 26 11 C26 13 24 14 24 16" />
      <line x1="8" y1="35" x2="40" y2="35" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="24,6 28,18 40,18 30,26 34,38 24,30 14,38 18,26 8,18 20,18" />
      <line x1="24" y1="2" x2="24" y2="4" />
      <line x1="40" y1="12" x2="42" y2="10" />
      <line x1="44" y1="26" x2="42" y2="26" />
      <line x1="6" y1="12" x2="4" y2="10" />
      <line x1="4" y1="26" x2="6" y2="26" />
    </svg>
  );
}

function RingsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="19" cy="24" r="10" />
      <circle cx="29" cy="24" r="10" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="18" width="36" height="22" rx="3" />
      <path d="M16 18 V14 C16 11.8 17.8 10 20 10 H28 C30.2 10 32 11.8 32 14 V18" />
      <line x1="6" y1="28" x2="42" y2="28" />
      <rect x="20" y="25" width="8" height="6" rx="1" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="24,8 2,20 24,32 46,20" />
      <polyline points="10,22 10,34 24,42 38,34 38,22" />
      <line x1="44" y1="20" x2="44" y2="36" />
    </svg>
  );
}

export default function IdealForSection() {
  const headerRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2 });
  const gridRef = useReveal<HTMLDivElement>({ type: 'scale', threshold: 0.15 });

  return (
    <section
      className="w-full px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        <div ref={headerRef}>
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
            Tipos de Evento
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
            Ideal para
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-10">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl cursor-default transition-all duration-300 ease-out"
                style={{
                  border: '1px solid var(--color-border)',
                  padding: '24px 8px',
                  minHeight: '130px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.3,
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
