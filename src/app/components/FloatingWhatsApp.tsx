import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Hola, me gustaría cotizar un evento.',
    );
    window.open(`https://wa.me/5492235000000?text=${message}`, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center animate-pulse-whatsapp transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 focus-visible:outline-none cursor-pointer"
      style={{
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-bg)',
        boxShadow: '0 4px 12px var(--color-accent-40)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)';
        e.currentTarget.style.boxShadow = '0 6px 20px var(--color-accent-50)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-accent)';
        e.currentTarget.style.boxShadow = '0 4px 12px var(--color-accent-40)';
      }}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </button>
  );
}