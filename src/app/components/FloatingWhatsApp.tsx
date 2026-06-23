import { WHATSAPP_BASE_URL, WHATSAPP_MESSAGES } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.default);
    window.open(`${WHATSAPP_BASE_URL}?text=${message}`, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center animate-pulse-whatsapp transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 focus-visible:outline-none cursor-pointer bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)] shadow-[0_4px_12px_var(--color-accent-40)] hover:shadow-[0_6px_20px_var(--color-accent-50)]"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </button>
  );
}
