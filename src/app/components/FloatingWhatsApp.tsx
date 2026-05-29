import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Hola, me gustaría cotizar un evento.',
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#1fb855] transition-colors animate-pulse-whatsapp focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none cursor-pointer"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </button>
  );
}
