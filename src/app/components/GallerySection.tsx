type GalleryItem = {
  id: string;
  label: string;
  image: string; // Cambiado gradient por la ruta de la imagen
  featured?: boolean;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'main-bar',
    label: 'Barra principal en evento',
    image: '/gallery-1.webp', // Ruta apuntando a public/galeria-barra.jpeg
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
  return (
    <section id="galeria" className="py-16 px-4 bg-[#F9F7F4] scroll-mt-24 rounded-3xl" aria-labelledby="gallery-heading">
      
      <div className="text-left mb-10 max-w-6xl mx-auto px-2">
        <span className="text-xs sm:text-sm font-medium text-[#4B4139] uppercase tracking-[0.2em] block">
          Trabajos
        </span>
        <h2 id="gallery-heading" className="text-4xl sm:text-5xl font-serif font-bold leading-tight mt-2 text-[#4B4139]">
          Galería de Eventos
        </h2>
        <span className="text-neutral-700 text-[15px] leading-relaxed">Momentos, detalles y la dedicación detrás de cada barra.</span>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`relative group rounded-3xl overflow-hidden bg-neutral-100 ${
              item.featured
                ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]'
                : 'h-[250px] md:h-[292px]'
            }`}
          >
            {/* Imagen real en lugar del div con gradiente */}
            <img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />

            {/* Overlay sutil oscuro que se intensifica al hacer hover para que el texto blanco resalte siempre */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Texto de la etiqueta */}
            <div className="absolute bottom-5 left-5 text-white text-base font-medium z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}