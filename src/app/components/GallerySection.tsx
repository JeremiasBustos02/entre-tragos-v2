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
    gradient: 'from-[#3D261E]/30 via-[#D4C5A9] to-[#4B4E32]/20',
    featured: true,
  },
  {
    id: 'signature-cocktails',
    label: 'Cócteles de autor',
    gradient: 'from-[#4B4E32]/25 via-[#FEFEFE] to-[#3D261E]/15',
  },
  {
    id: 'fresh-ingredients',
    label: 'Ingredientes frescos',
    gradient: 'from-[#FEFEFE] via-[#4B4E32]/20 to-[#3D261E]/10',
  },
  {
    id: 'bartender-action',
    label: 'Bartender en acción',
    gradient: 'from-[#3D261E]/20 via-[#4B4E32]/15 to-[#FEFEFE]',
  },
  {
    id: 'botanical-details',
    label: 'Detalles botánicos',
    gradient: 'from-[#D4C5A9] via-[#3D261E]/25 to-[#4B4E32]/15',
  },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-16 px-4 bg-[#F9F7F4] scroll-mt-24 rounded-3xl" aria-labelledby="gallery-heading">
      <div className="text-center mb-10">
        <span className="text-xs sm:text-sm font-medium text-[#4B4139] uppercase tracking-[0.2em]">
          Trabajos
        </span>
        <h2 id="gallery-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mt-2 mb-4 text-[#4B4139]">
          Galería de <span className="text-[#4B4139]">Eventos</span>
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
