interface PackageOption {
  bartenders: number;
  price: string;
}

interface Package {
  people: string;
  modules: string;
  label: string;
  options: PackageOption[];
  recommended: boolean;
}

interface ServiceCardProps {
  pkg: Package;
  index: number;
  visible: boolean;
}

function PeopleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );
}

function BartenderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function ServiceCard({ pkg, index, visible }: ServiceCardProps) {
  const isRecommended = pkg.recommended;

  return (
    <article
      className="group relative flex flex-col overflow-hidden transition-all duration-400"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.95)',
        transition: `opacity 400ms ease-out ${index * 100}ms, transform 400ms ease-out ${index * 100}ms, border-color 200ms`,
        backgroundColor: 'var(--color-surface)',
        border: `1px solid ${isRecommended ? 'var(--color-accent)' : 'var(--color-border)'}`,
        borderRadius: '16px',
      }}
    >
      {isRecommended && (
        <span
          className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            fontFamily: 'var(--font-sans)',
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-bg)',
          }}
        >
          La más elegida
        </span>
      )}

      <div className="flex-1 p-5 sm:p-6 flex flex-col">
        <span
          className="text-[11px] font-bold uppercase tracking-wider mb-4"
          style={{
            fontFamily: 'var(--font-sans)',
            color: isRecommended ? 'var(--color-accent)' : 'var(--color-text-secondary)',
          }}
        >
          {pkg.label}
        </span>

        <div className="flex flex-col gap-2.5 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="flex-shrink-0 w-5 flex justify-center"><PeopleIcon /></span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--color-text)',
              }}
            >
              {pkg.people}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex-shrink-0 w-5 flex justify-center"><BarIcon /></span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
              }}
            >
              {pkg.modules}
            </span>
          </div>
        </div>

        <div
          className="mb-5"
          style={{ height: '1px', backgroundColor: 'var(--color-border)', opacity: 0.5 }}
        />

        <div className="flex flex-col gap-1 mb-5">
          <div className="flex items-baseline gap-1.5">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
              }}
            >
              desde
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '32px',
                color: 'var(--color-accent)',
                lineHeight: 1,
              }}
            >
              {pkg.options[0].price}
            </span>
          </div>
          {pkg.options.length > 1 && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '12px',
                color: 'var(--color-text-secondary)',
              }}
            >
              o {pkg.options[1].price} con {pkg.options[1].bartenders} bartenders
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-auto pt-1">
          <span className="flex-shrink-0 flex justify-center"><BartenderIcon /></span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
            }}
          >
            {pkg.options[0].bartenders} bartender{pkg.options[0].bartenders > 1 ? 's' : ''} incluido{pkg.options[0].bartenders > 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <a
          href="#contacto"
          className="block w-full text-center py-3 rounded-full font-medium transition-all duration-300 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '14px' }}
        >
          Consultar
        </a>
      </div>
    </article>
  );
}