type GalleryItem = {
  id: string;
  label: string;
  gradient: string;
  featured?: boolean;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'main-bar',
    label: 'Barra principal en evento',
    gradient: 'from-[#8B5A2B]/30 via-[#D4C5A9] to-[#2D5A27]/20',
    featured: true,
  },
  {
    id: 'signature-cocktails',
    label: 'Cócteles de autor',
    gradient: 'from-[#2D5A27]/25 via-[#EAE7E0] to-[#8B5A2B]/15',
  },
  {
    id: 'fresh-ingredients',
    label: 'Ingredientes frescos',
    gradient: 'from-[#EAE7E0] via-[#2D5A27]/20 to-[#8B5A2B]/10',
  },
  {
    id: 'bartender-action',
    label: 'Bartender en acción',
    gradient: 'from-[#8B5A2B]/20 via-[#2D5A27]/15 to-[#EAE7E0]',
  },
  {
    id: 'botanical-details',
    label: 'Detalles botánicos',
    gradient: 'from-[#D4C5A9] via-[#8B5A2B]/25 to-[#2D5A27]/15',
  },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-16 px-4 bg-[#EAE7E0] scroll-mt-24" aria-labelledby="gallery-heading">
      <div className="text-center mb-10">
        <h2 id="gallery-heading" className="text-4xl font-serif text-[#1A1A1A]">
          Galería de Eventos
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`relative group rounded-3xl overflow-hidden ${
              item.featured
                ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]'
                : 'h-[250px] md:h-[292px]'
            }`}
          >
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-500`}
              role="img"
              aria-label={item.label}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
