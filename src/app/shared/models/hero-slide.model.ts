export interface HeroSlideModel {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  imageClass?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  buttonAriaLabel?: string;
  buttonIcon?: string; // <-- APENAS esta linha adicionada
}
