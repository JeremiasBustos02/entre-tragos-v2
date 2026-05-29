export interface FormState {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  barType: 'clasica' | 'premium' | 'sin-alcohol';
}

export const BAR_TYPES = [
  { value: 'clasica' as const, label: 'Clásica' },
  { value: 'premium' as const, label: 'Premium' },
  { value: 'sin-alcohol' as const, label: 'Sin Alcohol' },
];
