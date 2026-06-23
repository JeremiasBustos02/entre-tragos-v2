import { useReveal } from '../hooks/useReveal';

type GalleryItem = {
  id: string;
  label: string;
  image: string;
  featured?: boolean;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'main-bar',
    label: 'Barra principal en evento',
    image: '/gallery-1.webp',
    featured: true,
  },
  {
    id: 'signature-cocktails',
    label: 'Cócteles de autor',
    image: '/gallery-2.webp',
  },
  {
    id: 'fresh-ingredients',
    label: 'Ingredientes frescos',
    image: '/gallery-3.webp',
  },
  {
    id: 'bartender-action',
    label: 'Bartender en acción',
    image: '/gallery-4.jpg',
  },
  {
    id: 'botanical-details',
    label: 'Detalles botánicos',
    image: '/gallery-5.jpg',
  },
];

export default function GallerySection() {
  const headerRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2 });
  const gridRef = useReveal<HTMLDivElement>({ type: 'mask', threshold: 0.1 });

  return (
    <section id="galeria" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="gallery-heading">
      <div className="max-w-[1100px] mx-auto">
        <div ref={headerRef} className="mb-10">
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
            Trabajos
          </span>
          <h2
            id="gallery-heading"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
              marginTop: '8px',
            }}
          >
            Galería de Eventos
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              marginTop: '8px',
            }}
          >
            Momentos, detalles y la dedicación detrás de cada barra.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-xl cursor-default ${
                item.featured
                  ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto lg:h-full'
                  : 'aspect-[4/3]'
              }`}
              style={{ border: '1px solid var(--color-border)' }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="absolute bottom-4 left-4 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-y-2 md:group-hover:translate-y-0"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: 'var(--color-text)',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
