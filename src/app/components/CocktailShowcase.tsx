import { FileText } from 'lucide-react';

type CocktailItem = {
  id: string;
  name: string;
  ingredients: string;
  gradient: string;
};

const COCKTAILS: CocktailItem[] = [
  {
    id: 'negroni-de-autor',
    name: 'Negroni de Autor',
    ingredients: 'Gin, Campari, Vermouth Rosso, Naranja deshidratada',
    gradient: 'from-[#8B0000]/30 via-[#D4C5A9] to-[#1A1A1A]/10',
  },
  {
    id: 'gin-tonic-botanico',
    name: 'Gin Tonic Botánico',
    ingredients: 'Gin London Dry, Tónica artesanal, Romero, Eneldo',
    gradient: 'from-[#2D5A27]/25 via-[#EAE7E0] to-[#8B5A2B]/10',
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    ingredients: 'Bourbon, Azúcar mascabado, Angostura, Naranja',
    gradient: 'from-[#5C2E0E]/30 via-[#D4C5A9] to-[#D2691E]/10',
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    ingredients: 'Aperol, Prosecco, Soda, Naranja, Hielo',
    gradient: 'from-[#FF6B35]/25 via-[#FDFBF7] to-[#FF8C00]/10',
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    ingredients: 'Vodka, Espresso, Licor de café, Jarabe de vainilla',
    gradient: 'from-[#3C1414]/30 via-[#2D1B1B] to-[#8B4513]/20',
  },
];

export default function CocktailShowcase() {
  return (
    <section
      className="py-14 bg-[#EAE7E0] overflow-hidden rounded-3xl"
      aria-labelledby="cocktail-heading"
    >
      <div className="text-center mb-12 px-4">
        <span className="text-sm font-medium text-[#8B5A2B] uppercase tracking-[0.2em]">
          Nuestra Carta
        </span>
        <h2
          id="cocktail-heading"
          className="font-serif text-4xl text-[#1A1A1A] mt-3"
        >
          Cócteles Destacados
        </h2>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-4 md:px-8 pb-8">
        {COCKTAILS.map((cocktail) => (
          <article
            key={cocktail.id}
            className="min-w-[280px] md:min-w-[320px] snap-center bg-[#FDFBF7] rounded-3xl p-4 shadow-sm border border-neutral-200 transition-transform hover:-translate-y-2"
          >
            <div
              className={`w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br ${cocktail.gradient}`}
              role="img"
              aria-label={cocktail.name}
            />
            <h3 className="font-serif text-2xl text-[#1A1A1A]">
              {cocktail.name}
            </h3>
            <p className="text-sm text-neutral-500 mt-2">
              {cocktail.ingredients}
            </p>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <a
          href="/carta.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2D5A27] text-[#2D5A27] font-medium hover:bg-[#2D5A27] hover:text-white transition-colors duration-300"
        >
          <FileText className="w-4 h-4" />
          Ver carta completa
        </a>
      </div>
    </section>
  );
}
