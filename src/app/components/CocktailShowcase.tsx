'use client';

import { useState } from 'react';
import { FileText } from 'lucide-react';

type CocktailTag = 'sin-alcohol' | 'recomendado' | 'temporada' | 'fuerte';

type CocktailCategory = 'todos' | 'de-autor' | 'clasicos' | 'sin-alcohol' | 'compartir';

type CocktailItem = {
  id: string;
  name: string;
  ingredients: string;
  gradient: string;
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

const TAG_STYLES: Record<CocktailTag, { label: string; classes: string }> = {
  'sin-alcohol': {
    label: 'Sin Alcohol',
    classes: 'bg-[#2D5A27]/10 text-[#2D5A27]',
  },
  recomendado: {
    label: 'Recomendado',
    classes: 'bg-[#8B5A2B]/10 text-[#8B5A2B]',
  },
  temporada: {
    label: 'Temporada',
    classes: 'bg-[#D4A574]/20 text-[#8B5A2B]',
  },
  fuerte: {
    label: 'Fuerte',
    classes: 'bg-[#8B0000]/10 text-[#8B0000]',
  },
};

const COCKTAILS: CocktailItem[] = [
  {
    id: 'negroni-de-autor',
    name: 'Negroni de Autor',
    ingredients: 'Gin, Campari, Vermouth Rosso, Naranja deshidratada',
    gradient: 'from-[#8B0000]/30 via-[#D4C5A9] to-[#1A1A1A]/10',
    category: 'de-autor',
    tags: ['recomendado'],
  },
  {
    id: 'gin-tonic-botanico',
    name: 'Gin Tonic Botánico',
    ingredients: 'Gin London Dry, Tónica artesanal, Romero, Eneldo',
    gradient: 'from-[#2D5A27]/25 via-[#EAE7E0] to-[#8B5A2B]/10',
    category: 'de-autor',
    tags: ['temporada'],
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    ingredients: 'Bourbon, Azúcar mascabado, Angostura, Naranja',
    gradient: 'from-[#5C2E0E]/30 via-[#D4C5A9] to-[#D2691E]/10',
    category: 'clasicos',
    tags: ['fuerte'],
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    ingredients: 'Aperol, Prosecco, Soda, Naranja, Hielo',
    gradient: 'from-[#FF6B35]/25 via-[#FDFBF7] to-[#FF8C00]/10',
    category: 'compartir',
    tags: ['temporada'],
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    ingredients: 'Vodka, Espresso, Licor de café, Jarabe de vainilla',
    gradient: 'from-[#3C1414]/30 via-[#2D1B1B] to-[#8B4513]/20',
    category: 'de-autor',
    tags: ['recomendado'],
  },
];

export default function CocktailShowcase() {
  const [activeCategory, setActiveCategory] = useState<CocktailCategory>('todos');

  const filteredCocktails =
    activeCategory === 'todos'
      ? COCKTAILS
      : COCKTAILS.filter((c) => c.category === activeCategory);

  return (
    <section
      id="carta"
      className="py-16 sm:py-20 bg-[#EAE7E0] overflow-x-hidden rounded-3xl"
      aria-labelledby="carta-heading"
    >
      <div className="text-center mb-4 px-4">
        <span className="text-xs sm:text-sm font-medium text-[#8B5A2B] uppercase tracking-[0.2em]">
          Nuestra Carta
        </span>
        <h2
          id="carta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mt-2 mb-4 text-zinc-900"
        >
          Cócteles <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5A27] to-[#8B5A2B]">Destacados</span>
        </h2>
      </div>

      <div
        className="flex flex-wrap justify-center gap-2 md:gap-4 w-full px-4 mb-6"
        role="tablist"
        aria-label="Filtrar por categoría"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === cat.id
                ? 'bg-[#2D5A27] text-white shadow-[0_4px_14px_rgba(45,90,39,0.2)]'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 hover:shadow-sm border border-neutral-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {filteredCocktails.map((cocktail) => (
          <article
            key={cocktail.id}
            className="group bg-[#FDFBF7] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#2D5A27] focus-within:ring-offset-2"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cocktail.gradient} transition-transform duration-500 ease-out group-hover:scale-105`}
                role="img"
                aria-label={cocktail.name}
              />
            </div>

            <div className="p-4 sm:p-5 flex flex-col gap-2">
              {cocktail.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {cocktail.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${TAG_STYLES[tag].classes}`}
                    >
                      {TAG_STYLES[tag].label}
                    </span>
                  ))}
                </div>
              )}

              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] leading-snug">
                {cocktail.name}
              </h3>

              <p className="text-sm text-neutral-500 leading-relaxed">
                {cocktail.ingredients}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/carta.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2D5A27] text-[#2D5A27] font-medium hover:bg-[#2D5A27] hover:text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <FileText className="w-4 h-4" />
          Ver carta completa
        </a>
      </div>
    </section>
  );
}
