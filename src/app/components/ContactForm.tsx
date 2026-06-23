import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { useReveal } from '../hooks/useReveal';
import ContactSidebar from './ContactSidebar';
import ContactFormFields from './ContactFormFields';

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const sidebarRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.15 });
  const formRef = useReveal<HTMLDivElement>({ type: 'fade', threshold: 0.1, delay: 100 });

  if (isSuccess) {
    return (
      <section
        id="contacto"
        className="py-15 sm:py-15 px-5 sm:px-8 lg:px-12 scroll-mt-24"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div
          className="max-w-xl mx-auto p-6 sm:p-10 text-center rounded-2xl"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Success animation: expanding ring + check */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            {/* Expanding ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid var(--color-accent)',
                animation: 'success-ring 600ms ease-out forwards',
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid var(--color-accent)',
                animation: 'success-ring 600ms ease-out 150ms forwards',
              }}
            />
            {/* Check icon */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                animation: 'success-pop 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms both',
              }}
            >
              <CheckCircle2
                className="w-14 h-14"
                style={{ color: 'var(--color-accent)' }}
                aria-hidden="true"
              />
            </div>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '24px',
              color: 'var(--color-text)',
              marginBottom: '8px',
              animation: 'fade-up 500ms ease-out 350ms both',
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
              maxWidth: '360px',
              margin: '0 auto 32px',
              animation: 'fade-up 500ms ease-out 450ms both',
            }}
          >
            Nos pondremos en contacto contigo pronto para confirmar los detalles de tu evento.
          </p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="cursor-pointer rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: 'var(--font-sans)',
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-bg)',
              animation: 'fade-up 500ms ease-out 550ms both',
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
          className="lg:col-span-5 rounded-2xl p-6 sm:p-8"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <ContactSidebar />
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
          <ContactFormFields onSuccess={() => setIsSuccess(true)} />
        </div>
      </div>
    </section>
  );
}
