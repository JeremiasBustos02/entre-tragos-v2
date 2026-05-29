import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Loader2 } from 'lucide-react';

import { BAR_TYPES } from '../types/contact';
import type { FormState } from '../types/contact';

const INITIAL_FORM_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  barType: 'clasica',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setFormData(INITIAL_FORM_STATE);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#FDFBF7] max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
        <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label className="flex flex-col gap-1.5 text-[14px] font-medium text-neutral-700">
              Nombre
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-[#F4F1EB] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#2D5A27]/50 focus:outline-none text-[14px] text-[#1A1A1A]"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-[14px] font-medium text-neutral-700">
              Correo Electrónico
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-[#F4F1EB] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#2D5A27]/50 focus:outline-none text-[14px] text-[#1A1A1A]"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-[14px] font-medium text-neutral-700">
              Teléfono
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-[#F4F1EB] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#2D5A27]/50 focus:outline-none text-[14px] text-[#1A1A1A]"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-[14px] font-medium text-neutral-700">
              Fecha del Evento
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                required
                className="bg-[#F4F1EB] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#2D5A27]/50 focus:outline-none text-[14px] text-[#1A1A1A]"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-[14px] font-medium text-neutral-700 sm:col-span-2">
              Tipo de Barra
              <select
                name="barType"
                value={formData.barType}
                onChange={handleInputChange}
                className="bg-[#F4F1EB] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#2D5A27]/50 focus:outline-none text-[14px] text-[#1A1A1A] appearance-none cursor-pointer"
              >
                {BAR_TYPES.map((bar) => (
                  <option key={bar.value} value={bar.value}>
                    {bar.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="col-span-1 sm:col-span-2 bg-[#2D5A27] text-white rounded-xl py-4 flex items-center justify-center gap-2 text-[15px] font-medium hover:bg-[#244a1f] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
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
    </section>
  );
}
