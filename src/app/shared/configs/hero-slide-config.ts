import { HeroSlideModel } from '../models/hero-slide.model';

export const HOME_HERO: HeroSlideModel[] = [
  {
    image: '/assets/img/closeup-shot-jesus-christ-lending-hand-help.webp',
    alt: 'Imagem mão de Jesus Cristo estendida para ajudar alguém',
    kicker: 'Igreja de Cristo',
    title: 'Evangelho, Bíblia, fé e comunhão em Cristo',
    description:
      'Uma comunidade cristã comprometida com Jesus Cristo, com a Palavra de Deus e com a missão de anunciar o Evangelho.',
    buttonText: 'Encontrar igreja',
    buttonLink: '#igrejas-locais',
    imageClass: 'hero-slide-mobile-right',
    loading: 'eager',
    fetchPriority: 'high',
  },
  {
    image: '/assets/img/resurrection-concept-crucifixion-jesus-christ-cross-sunset.webp',
    alt: 'Silhueta de uma cruz ao pôr do sol',
    kicker: 'Nossa fé',
    title: 'Cristo no centro de tudo',
    description:
      'Cremos na autoridade das Escrituras, na graça de Deus, na comunhão dos santos e na vida transformada pelo Evangelho.',
    buttonText: 'Conheça nossa fé',
    buttonLink: 'quem-somos',
    imageClass: 'hero-slide-mobile-right',
    loading: 'lazy',
  },
  {
    image: '/assets/img/silhouette-handsome-asian-man-praying.webp',
    alt: 'Pessoas em comunhão ao pôr do sol',
    kicker: 'Comunhão e missão',
    title: 'Uma igreja presente em comunidades locais',
    description:
      'A Igreja de Cristo se reúne em diferentes cidades para adorar a Deus, servir pessoas e proclamar a Palavra.',
    buttonText: 'Ver igrejas',
    buttonLink: '#igrejas-locais',
    loading: 'lazy',
  },
];
