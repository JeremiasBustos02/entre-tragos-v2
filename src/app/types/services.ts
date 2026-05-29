export type IconType = 'martini' | 'wine' | 'leaf';

export interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  iconType: IconType;
}
