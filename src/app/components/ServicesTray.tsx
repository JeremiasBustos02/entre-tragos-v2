import { useInView } from '../hooks/useInView';
import { useReveal } from '../hooks/useReveal';
import { useMagneticButton } from '../hooks/useMagneticButton';
import ServiceCard from './ServiceCard';

const PACKAGES = [
  {
    people: '20–60 personas',
    modules: '1 módulo',
    label: 'Ideal para cumpleaños',
    options: [
      { bartenders: 1, price: '$370.000' },
      { bartenders: 2, price: '$450.000' },
    ],
    recommended: false,
  },
  {
    people: '60–100 personas',
    modules: '2 módulos',
    label: 'Eventos medianos',
    options: [{ bartenders: 3, price: '$510.000' }],
    recommended: false,
  },
  {
    people: '100–150 personas',
    modules: '2 módulos',
    label: 'La más elegida',
    options: [{ bartenders: 4, price: '$680.000' }],
    recommended: true,
  },
  {
    people: '150+ personas',
    modules: '2+ módulos',
    label: 'Grandes celebraciones',
    options: [{ bartenders: 5, price: '$850.000' }],
    recommended: false,
  },
];

export default function ServicesTray() {
  const { ref, inView: visible } = useInView<HTMLElement>({ threshold: 0.1 });
  const headerRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2 });
  const ctaRef = useReveal<HTMLDivElement>({ type: 'scale', threshold: 0.2, delay: 200 });
  const { ref: magneticRef } = useMagneticButton<HTMLAnchorElement>();

  return (
    <section
      ref={ref}
      id="paquetes"
      className="w-full px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1100px] mx-auto">
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
            Paquetes
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
            Elegí tu paquete
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
            Todos incluyen barra, cristalería, utensilios y personal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((pkg, i) => (
            <ServiceCard key={pkg.people} pkg={pkg} index={i} visible={visible} />
          ))}
        </div>

        <div ref={ctaRef} className="mt-12">
          <div
            className="rounded-2xl p-6 sm:p-8 text-center"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
          >
            <p
              className="mb-5"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '15px',
                color: 'var(--color-text-secondary)',
              }}
            >
              ¿Algo distinto? Diseñamos una propuesta a medida para tu evento.
            </p>
            <a
              ref={magneticRef}
              href="#contacto"
              className="magnetic-btn inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}