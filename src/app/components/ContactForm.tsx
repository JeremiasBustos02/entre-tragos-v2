import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

import { BAR_TYPES } from '../types/contact';
import type { FormState } from '../types/contact';
import CustomSelect from './CustomSelect';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const INPUT_CLASSES =
  'bg-white border border-neutral-200 rounded-xl px-4 py-3 w-full text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:ring-2 focus:ring-[#2D5A27]/30 focus:border-[#2D5A27] focus:outline-none transition-all duration-200';

const INPUT_ERROR_CLASSES =
  'bg-white border border-red-400 rounded-xl px-4 py-3 w-full text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:ring-2 focus:ring-red-400/30 focus:border-red-400 focus:outline-none transition-all duration-200';

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
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBarTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, barType: value as FormState['barType'] }));
    if (errors.barType) {
      setErrors((prev) => ({ ...prev, barType: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.eventDate) newErrors.eventDate = 'La fecha es requerida';
    if (!formData.guestCount || Number(formData.guestCount) < 1)
      newErrors.guestCount = 'Mínimo 1 invitado';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

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
    setErrors({});
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
            className="bg-[#2D5A27] text-white rounded-full px-8 py-3 text-sm font-medium shadow-[0_4px_14px_rgba(45,90,39,0.2)] transition-all duration-300 ease-in-out hover:bg-[#244a1f] hover:shadow-[0_8px_24px_rgba(45,90,39,0.3)] hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
          >
            Enviar otra solicitud
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 bg-[#FDFBF7] scroll-mt-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="text-xs sm:text-sm font-medium text-[#8B5A2B] uppercase tracking-[0.2em]">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] leading-tight mt-2">
              Hagamos algo increíble en tu evento.
            </h2>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              Cotiza al instante por correo o resuelve tus dudas directamente por WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <a href="mailto:hola@entrefragos.com" className="group flex items-start gap-4 rounded-xl px-2 py-2 -mx-2 transition-all duration-200 hover:bg-[#2D5A27]/5 focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none">
              <div className="w-10 h-10 rounded-xl bg-[#2D5A27]/8 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#2D5A27]/12">
                <Mail className="w-5 h-5 text-[#2D5A27]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Email</p>
                <p className="text-sm text-neutral-500">hola@entrefragos.com</p>
              </div>
            </a>

            <a href="tel:+521234567890" className="group flex items-start gap-4 rounded-xl px-2 py-2 -mx-2 transition-all duration-200 hover:bg-[#2D5A27]/5 focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none">
              <div className="w-10 h-10 rounded-xl bg-[#2D5A27]/8 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#2D5A27]/12">
                <Phone className="w-5 h-5 text-[#2D5A27]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Teléfono</p>
                <p className="text-sm text-neutral-500">+52 123 456 7890</p>
              </div>
            </a>

      
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-[#2D5A27]/8 flex items-center justify-center transition-colors hover:bg-[#2D5A27]/12 focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 text-[#2D5A27]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-[#2D5A27]/8 flex items-center justify-center transition-colors hover:bg-[#2D5A27]/12 focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 text-[#2D5A27]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppOpen}
            className="cursor-pointer w-full sm:w-auto bg-[#25D366] text-white rounded-full px-8 py-4 inline-flex items-center justify-center gap-2 text-base font-medium shadow-[0_4px_14px_rgba(37,211,102,0.25)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <WhatsAppIcon className="w-5 h-5" aria-hidden="true" />
            Hablemos por WhatsApp ahora
          </button>
        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100">
          <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    Nombre Completo
                    <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={errors.name ? INPUT_ERROR_CLASSES : INPUT_CLASSES}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-0.5" role="alert">
                      {errors.name}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    Correo Electrónico
                    <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={errors.email ? INPUT_ERROR_CLASSES : INPUT_CLASSES}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-0.5" role="alert">
                      {errors.email}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    Teléfono
                    <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={errors.phone ? INPUT_ERROR_CLASSES : INPUT_CLASSES}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-xs mt-0.5" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    Fecha del Evento
                    <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                  </span>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.eventDate}
                    aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
                    className={errors.eventDate ? INPUT_ERROR_CLASSES : INPUT_CLASSES}
                  />
                  {errors.eventDate && (
                    <p id="eventDate-error" className="text-red-500 text-xs mt-0.5" role="alert">
                      {errors.eventDate}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    Cantidad de Invitados
                    <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                  </span>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    required
                    min="1"
                    aria-invalid={!!errors.guestCount}
                    aria-describedby={errors.guestCount ? 'guestCount-error' : undefined}
                    className={errors.guestCount ? INPUT_ERROR_CLASSES : INPUT_CLASSES}
                  />
                  {errors.guestCount && (
                    <p id="guestCount-error" className="text-red-500 text-xs mt-0.5" role="alert">
                      {errors.guestCount}
                    </p>
                  )}
                </label>
              </div>

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
                <p className="sm:col-span-2 text-red-600 text-sm" role="alert">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer sm:col-span-2 w-full bg-[#2D5A27] text-white rounded-full py-4 flex items-center justify-center gap-2 text-sm font-semibold shadow-[0_4px_14px_rgba(45,90,39,0.2)] transition-all duration-300 hover:bg-[#244a1f] hover:shadow-[0_6px_20px_rgba(45,90,39,0.3)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:ring-2 focus-visible:ring-[#2D5A27] focus-visible:ring-offset-2 focus-visible:outline-none"
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
