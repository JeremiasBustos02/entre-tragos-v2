export interface FormState {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  barType: 'clasica' | 'premium';
}

export const BAR_TYPES = [
  { value: 'clasica' as const, label: 'Clásica' },
  { value: 'premium' as const, label: 'Premium' },
];
