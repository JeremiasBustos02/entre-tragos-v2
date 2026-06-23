export const WHATSAPP_NUMBER = '5492235000000';

export const WHATSAPP_MESSAGES = {
  default: 'Hola, me gustaría cotizar un evento.',
  cta: 'Hola, me interesa consultar disponibilidad para un evento',
  nav: 'Hola, me interesa cotizar un evento',
} as const;

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/entretragos',
  facebook: 'https://facebook.com/entretragos',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
} as const;

export const CONTACT = {
  email: 'hola@entretragos.com',
  phone: '+5492235000000',
  phoneFormatted: '+54 9 223 500-0000',
} as const;
