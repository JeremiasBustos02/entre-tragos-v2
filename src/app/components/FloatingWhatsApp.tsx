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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#4B4E32] text-white shadow-[0_4px_12px_rgba(75,78,50,0.4)] flex items-center justify-center animate-pulse-whatsapp transition-all duration-300 ease-in-out hover:bg-[#3A3D28] hover:shadow-[0_6px_20px_rgba(75,78,50,0.5)] hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#4B4E32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FEFEFE] focus-visible:outline-none cursor-pointer"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </button>
  );
}
