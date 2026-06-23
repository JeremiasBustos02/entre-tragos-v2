import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Mail, Phone } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

import { BAR_TYPES } from '../types/contact';
import type { FormState } from '../types/contact';
import CustomSelect from './CustomSelect';
import { useReveal } from '../hooks/useReveal';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const INITIAL_FORM_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  barType: 'clasica',
};

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  backgroundColor: 'var(--color-bg)',
  color: 'var(--color-text)',
  border: '1px solid var(--color-border)',
  borderRadius: '12px',
  padding: '12px 16px',
  width: '100%',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 200ms',
};

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: 'var(--color-error)',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: '13px',
  color: 'var(--color-text-secondary)',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const sidebarRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.15 });
  const formRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.1, delay: 100 });
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
    window.open(`https://wa.me/5492235000000?text=${encodedMessage}`, '_blank');
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmitError(null);
    setErrors({});
  };

  if (isSuccess) {
    return (
      <section
        id="contacto"
        className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 scroll-mt-24"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div
          className="max-w-xl mx-auto p-6 sm:p-10 text-center rounded-2xl"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <CheckCircle2
            className="w-14 h-14 mx-auto mb-5"
            style={{ color: 'var(--color-accent)' }}
            aria-hidden="true"
          />
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '24px',
              color: 'var(--color-text)',
              marginBottom: '8px',
            }}
          >
            ¡Solicitud Enviada!
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              marginBottom: '32px',
              maxWidth: '360px',
              margin: '0 auto 32px',
            }}
          >
            Nos pondremos en contacto contigo pronto para confirmar los detalles de tu evento.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="cursor-pointer rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: 'var(--font-sans)',
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-bg)',
            }}
          >
            Enviar otra solicitud
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 scroll-mt-24"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div
          ref={sidebarRef}
          className="lg:col-span-5 rounded-2xl p-6 sm:p-8 flex flex-col justify-center gap-6"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '12px',
                color: 'var(--color-accent)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Contacto
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: 'var(--color-text)',
                lineHeight: 1.15,
                marginTop: '8px',
                marginBottom: '16px',
              }}
            >
              Hagamos algo increíble en tu evento.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '15px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              Cotizá al instante por correo o resolvé tus dudas directamente por WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:hola@entretragos.com"
              className="group flex items-start gap-4 rounded-xl px-3 py-3 -mx-3 transition-all duration-200"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-accent-10)' }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: 'var(--color-text)',
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  hola@entretragos.com
                </p>
              </div>
            </a>

            <a
              href="tel:+5492235000000"
              className="group flex items-start gap-4 rounded-xl px-3 py-3 -mx-3 transition-all duration-200"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-accent-10)' }}
              >
                <Phone className="w-5 h-5" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: 'var(--color-text)',
                  }}
                >
                  Teléfono
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  +54 9 223 500-0000
                </p>
              </div>
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://instagram.com/entretragos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'var(--color-accent-10)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-20)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-10)';
              }}
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" style={{ color: 'var(--color-accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com/entretragos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'var(--color-accent-10)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-20)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-10)';
              }}
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" style={{ color: 'var(--color-accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppOpen}
            className="cursor-pointer w-full rounded-full px-6 py-3.5 inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: 'var(--font-sans)',
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-bg)',
            }}
          >
            <WhatsAppIcon className="w-5 h-5" aria-hidden="true" />
            Hablemos por WhatsApp
          </button>
        </div>

        <div
          ref={formRef}
          className="lg:col-span-7 rounded-2xl p-6 sm:p-8"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            overflow: 'visible',
          }}
        >
          <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="flex flex-col gap-1.5">
                  <span style={labelStyle}>
                    Nombre Completo
                    <span style={{ color: 'var(--color-accent)', marginLeft: '2px' }} aria-hidden="true">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    style={errors.name ? inputErrorStyle : inputStyle}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }} role="alert">
                      {errors.name}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-1.5">
                  <span style={labelStyle}>
                    Correo Electrónico
                    <span style={{ color: 'var(--color-accent)', marginLeft: '2px' }} aria-hidden="true">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    style={errors.email ? inputErrorStyle : inputStyle}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }} role="alert">
                      {errors.email}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-1.5">
                  <span style={labelStyle}>
                    Teléfono
                    <span style={{ color: 'var(--color-accent)', marginLeft: '2px' }} aria-hidden="true">*</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    style={errors.phone ? inputErrorStyle : inputStyle}
                    placeholder="223 500-0000"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }} role="alert">
                      {errors.phone}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-1.5">
                  <span style={labelStyle}>
                    Fecha del Evento
                    <span style={{ color: 'var(--color-accent)', marginLeft: '2px' }} aria-hidden="true">*</span>
                  </span>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.eventDate}
                    aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
                    style={errors.eventDate ? inputErrorStyle : inputStyle}
                  />
                  {errors.eventDate && (
                    <p id="eventDate-error" className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }} role="alert">
                      {errors.eventDate}
                    </p>
                  )}
                </label>
              </div>

              <div>
                <label className="flex flex-col gap-1.5">
                  <span style={labelStyle}>
                    Cantidad de Invitados
                    <span style={{ color: 'var(--color-accent)', marginLeft: '2px' }} aria-hidden="true">*</span>
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
                    style={errors.guestCount ? inputErrorStyle : inputStyle}
                    placeholder="Ej: 80"
                  />
                  {errors.guestCount && (
                    <p id="guestCount-error" className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }} role="alert">
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
                <p className="sm:col-span-2 text-sm" style={{ color: 'var(--color-accent)' }} role="alert">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer sm:col-span-2 w-full rounded-full py-3.5 flex items-center justify-center gap-2 text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  fontFamily: 'var(--font-sans)',
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
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