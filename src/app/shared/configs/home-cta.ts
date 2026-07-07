import { CtaAsideSection } from '../models/cta-aside-section.model';

export const HOME_CTA: CtaAsideSection[] = [
  {
    title: 'Igrejas perto de você',
    id: 'igrejas-aside',
    links: [
      {
        label: 'Encontre uma igreja',
        href: '#igrejas-locais',
        ariaLabel: 'Encontrar uma Igreja de Cristo no Brasil',
        icon: 'bi-geo-alt',
        variant: 'outline',
      },
    ],
  },
  {
    title: 'Precisa de oração?',
    id: 'oracao-aside',
    links: [
      {
        label: 'Pedido de oração',
        href: 'https://wa.me/5551997032022?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20ora%C3%A7%C3%A3o.',
        ariaLabel: 'Enviar pedido de oração pelo WhatsApp em uma nova aba',
        icon: 'bi-whatsapp',
        variant: 'gold',
        external: true,
      },
    ],
  },
];
