import { CtaAsideSection } from '../models/cta-aside-section.model';

// CONFIGURAÇÃO DA HOME
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
        variant: 'outline', // ← ESSE É O ESTILO QUE VOCÊ QUER
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

// CONFIGURAÇÃO PARA IGREJAS
export const CHURCH_CTA: CtaAsideSection[] = [
  {
    title: 'Igrejas Locais',
    id: 'igrejas-locais-aside',
    links: [
      {
        label: 'Cadastrar congregação',
        href: 'https://wa.me/5551997032022?text=Quero%20colocar%20a%20minha%20congrega%C3%A7%C3%A3o%20no%20site%20da%20Igreja%20de%20Cristo.',
        ariaLabel:
          'Cadastrar uma congregação no site da Igreja de Cristo pelo WhatsApp em uma nova aba',
        icon: 'bi-plus-circle',
        variant: 'outline', // ← MESMO ESTILO DO BOTÃO "Encontre uma igreja"
        external: true,
      },
    ],
  },
  {
    title: 'Precisa de oração?',
    id: 'oracao-church-aside',
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

// CONFIGURAÇÃO PARA EVENTOS
export const EVENTS_CTA: CtaAsideSection[] = [
  {
    title: 'Encontros',
    id: 'encontros-aside',
    links: [
      {
        label: 'Quarta · 19h - Domingo · 9h30',
        href: '/eventos/domingo',
        ariaLabel: 'Culto de domingo às 9h30',
        icon: 'bi-calendar-event',
        variant: 'outline',
      },
      /* {
        label: 'Quarta-feira · 19h',
        href: '/eventos/quarta',
        ariaLabel: 'Culto de quarta-feira às 19h',
        icon: 'bi-calendar-event',
        variant: 'outline',
      }, */
    ],
  },
  {
    title: 'Como chegar',
    id: 'endereco-aside',
    links: [
      {
        label: 'Ver endereço',
        href: '/eventos/local',
        ariaLabel: 'Ver endereço dos eventos',
        icon: 'bi-geo-alt',
        variant: 'outline',
      },
    ],
  },
];

// MAPEAMENTO: cada página usa qual CTA
export const CTA_CONFIGS = {
  home: HOME_CTA,
  about: HOME_CTA,
  churches: CHURCH_CTA,
  events: EVENTS_CTA,
  gallery: HOME_CTA,
  contact: HOME_CTA,
  church: CHURCH_CTA,
};
