import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

type CocktailTag = 'sin-alcohol' | 'recomendado' | 'temporada' | 'fuerte';

type CocktailCategory = 'todos' | 'de-autor' | 'clasicos' | 'sin-alcohol' | 'compartir';

type CocktailItem = {
  id: string;
  name: string;
  ingredients: string;
  image: string;
  category: CocktailCategory;
  tags: CocktailTag[];
};

const CATEGORIES: { id: CocktailCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'de-autor', label: 'De Autor' },
  { id: 'clasicos', label: 'Clásicos' },
  { id: 'sin-alcohol', label: 'Sin Alcohol' },
  { id: 'compartir', label: 'Para Compartir' },
];

const TAG_STYLES: Record<CocktailTag, { label: string; bg: string; color: string }> = {
  'sin-alcohol': {
    label: 'Sin Alcohol',
    bg: 'var(--color-accent-10)',
    color: 'var(--color-accent)',
  },
  recomendado: {
    label: 'Recomendado',
    bg: 'var(--color-accent-15)',
    color: 'var(--color-accent)',
  },
  temporada: {
    label: 'Temporada',
    bg: 'var(--color-accent-10)',
    color: 'var(--color-accent-hover)',
  },
  fuerte: {
    label: 'Fuerte',
    bg: 'var(--color-accent-8)',
    color: 'var(--color-text-secondary)',
  },
};

const COCKTAILS: CocktailItem[] = [
  {
    id: 'negroni-de-autor',
    name: 'Negroni de Autor',
    ingredients: 'Gin, Campari, Vermouth Rosso, Naranja deshidratada',
    image: '/foto-cocktail-2.webp',
    category: 'de-autor',
    tags: ['recomendado'],
  },
  {
    id: 'gin-tonic-botanico',
    name: 'Gin Tonic Botánico',
    ingredients: 'Gin London Dry, Tónica artesanal, Romero, Eneldo',
    image: '/foto-cocktail-2.webp',
    category: 'de-autor',
    tags: ['temporada'],
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    ingredients: 'Bourbon, Azúcar mascabado, Angostura, Naranja',
    image: '/foto-cocktail-2.webp',
    category: 'clasicos',
    tags: ['fuerte'],
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    ingredients: 'Aperol, Prosecco, Soda, Naranja, Hielo',
    image: '/foto-cocktail-2.webp',
    category: 'compartir',
    tags: ['temporada'],
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    ingredients: 'Vodka, Espresso, Licor de café, Jarabe de vainilla',
    image: '/foto-cocktail-2.webp',
    category: 'de-autor',
    tags: ['recomendado'],
  },
];

function CocktailCard({ cocktail, index }: { cocktail: CocktailItem; index: number }) {
  const cardRef = useReveal<HTMLDivElement>({ type: 'scale', threshold: 0.1, stagger: index });

  return (
    <article
      ref={cardRef}
      className="group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={cocktail.image}
          alt={cocktail.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-2">
        {cocktail.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {cocktail.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                style={{
                  fontFamily: 'var(--font-sans)',
                  backgroundColor: TAG_STYLES[tag].bg,
                  color: TAG_STYLES[tag].color,
                }}
              >
                {TAG_STYLES[tag].label}
              </span>
            ))}
          </div>
        )}

        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '18px',
            color: 'var(--color-text)',
            lineHeight: 1.3,
          }}
        >
          {cocktail.name}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '13px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
          }}
        >
          {cocktail.ingredients}
        </p>
      </div>
      
    </article>
  );
}

export default function CocktailShowcase() {
  const [activeCategory, setActiveCategory] = useState<CocktailCategory>('todos');
  const headerRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2 });
  const filtersRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.2, delay: 80 });

  const filteredCocktails =
    activeCategory === 'todos'
      ? COCKTAILS
      : COCKTAILS.filter((c) => c.category === activeCategory);

  return (
    <section
      id="carta"
      className="py-15 px-5 sm:px-8 lg:px-12"
      aria-labelledby="carta-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        <div ref={headerRef} className="text-center mb-10">
          <h2
            id="carta-heading"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
              marginTop: '8px',
            }}
          >
            Cócteles Destacados
          </h2>
        </div>

        <div
          ref={filtersRef}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filtrar por categoría"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="cursor-pointer px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '13px',
                backgroundColor: activeCategory === cat.id ? 'var(--color-accent)' : 'var(--color-surface)',
                color: activeCategory === cat.id ? 'var(--color-bg)' : 'var(--color-text-secondary)',
                border: `1px solid ${activeCategory === cat.id ? 'var(--color-accent)' : 'var(--color-border)'}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5 cocktail-scroll sm:cocktail-scroll-reset hide-scrollbar">
          {filteredCocktails.map((cocktail, i) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/carta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Ver carta completa
          </a>
        </div>
      </div>
    </section>
  );
}