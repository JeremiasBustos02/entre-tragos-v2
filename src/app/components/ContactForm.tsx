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
            onClick={() => setIsSuccess(false)}
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
