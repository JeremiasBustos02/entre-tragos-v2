import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-react';

import { BAR_TYPES } from '../types/contact';
import type { FormState } from '../types/contact';
import CustomSelect from './CustomSelect';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const INPUT_CLASSES =
  'bg-white border border-neutral-200 rounded-2xl px-4 py-3.5 w-full text-sm text-[#1A1A1A] focus:ring-2 focus:ring-[#2D5A27]/20 focus:border-[#2D5A27] focus:outline-none transition-colors';

const INITIAL_FORM_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  barType: 'clasica',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBarTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, barType: value as FormState['barType'] }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }

      setIsSuccess(true);
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Ocurrió un error inesperado',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppOpen = () => {
    const barLabel =
      BAR_TYPES.find((b) => b.value === formData.barType)?.label ?? '';

    const message = [
      'Hola, me gustaría cotizar un evento.',
      `Nombre: ${formData.name}`,
      `Barra: ${barLabel}`,
      `Invitados: ${formData.guestCount}`,
      `Fecha: ${formData.eventDate}`,
    ]
      .filter(Boolean)
      .join('\n');

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmitError(null);
  };

  if (isSuccess) {
    return (
      <section
        id="contact"
        className="py-20 bg-[#FDFBF7] max-w-4xl mx-auto px-4 scroll-mt-24"
      >
        <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 p-6 sm:p-10 text-center">
          <CheckCircle2
            className="w-14 h-14 text-[#2D5A27] mx-auto mb-5"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
            ¡Solicitud Enviada!
          </h2>
          <p className="text-neutral-600 mb-8 max-w-sm mx-auto">
            Nos pondremos en contacto contigo pronto para confirmar los detalles
            de tu evento.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="bg-[#2D5A27] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#244a1f] transition-colors"
          >
            Enviar otra solicitud
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#FDFBF7] scroll-mt-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Copy + WhatsApp */}
        <div className="lg:col-span-5 lg:top-8 flex flex-col gap-6">
          <div>
            <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight">
              Hagamos algo increíble en tu evento.
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Cotiza al instante por correo o resuelve tus dudas directamente por WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={handleWhatsAppOpen}
            className="w-full sm:w-auto bg-[#25D366] text-[#1A1A1A] rounded-full px-8 py-4 inline-flex items-center justify-center gap-2 text-base font-medium hover:bg-[#1fb855] transition-colors focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Hablemos por WhatsApp ahora
          </button>
        </div>

        {/* RIGHT COLUMN: Compact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100">
          <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700 sm:col-span-2">
                Nombre Completo
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={INPUT_CLASSES}
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                Correo Electrónico
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={INPUT_CLASSES}
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                Teléfono
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={INPUT_CLASSES}
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                Fecha del Evento
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                  className={INPUT_CLASSES}
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                Cantidad de Invitados
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className={INPUT_CLASSES}
                />
              </label>

              <div className="sm:col-span-2">
                <CustomSelect
                  options={BAR_TYPES}
                  value={formData.barType}
                  onChange={handleBarTypeChange}
                  label="Tipo de Barra"
                  name="barType"
                />
              </div>

              {submitError && (
                <p className="sm:col-span-2 text-red-600 text-sm">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="sm:col-span-2 w-full bg-[#2D5A27] text-white rounded-full py-4 flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#244a1f] transition-colors disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:outline-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      className="w-5 h-5 animate-spin"
                      aria-hidden="true"
                    />
                    Enviando...
                  </>
                ) : (
                  'Enviar Cotización'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
