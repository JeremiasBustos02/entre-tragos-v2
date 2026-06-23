import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Loader2 } from 'lucide-react';
import { BAR_TYPES } from '../types/contact';
import type { FormState } from '../types/contact';
import CustomSelect from './CustomSelect';
import { FORMSPREE_ENDPOINT } from '../constants';

interface ContactFormFieldsProps {
  onSuccess: () => void;
}

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

export default function ContactFormFields({ onSuccess }: ContactFormFieldsProps) {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

      onSuccess();
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Ocurrió un error inesperado',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
  );
}
