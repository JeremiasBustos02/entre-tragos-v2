export type IconType = 'martini' | 'wine' | 'leaf' | 'sparkles';

export interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  iconType: IconType;
  tag?: string;
}
