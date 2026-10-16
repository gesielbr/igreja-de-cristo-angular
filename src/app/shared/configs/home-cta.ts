import { CtaAsideSection } from '../models/cta-aside-section.model';

/**
 * Regras de acessibilidade usadas neste arquivo:
 * - cada `id` é único: padrão `cta-<página>-<seção>`
 * - o `ariaLabel` sempre COMEÇA com o texto visível do botão (WCAG 2.5.3, "Label in Name")
 * - links externos avisam "(abre em nova aba)"
 * - hrefs internos começam com "/" para funcionar de qualquer rota
 */

// CONFIGURAÇÃO DA HOME
export const HOME_CTA: CtaAsideSection[] = [
  {
    title: 'Igrejas perto de você',
    id: 'cta-home-igrejas',
    links: [
      {
        label: 'Encontre uma igreja',
        href: '/igrejas',
        ariaLabel: 'Encontre uma igreja de Cristo no Brasil',
        icon: 'bi-geo-alt',
        variant: 'outline',
      },
    ],
  },
  {
    title: 'Precisa de oração?',
    id: 'cta-home-oracao',
    links: [
      {
        label: 'Pedido de oração',
        href: 'https://wa.me/5551997032022?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20ora%C3%A7%C3%A3o.',
        ariaLabel: 'Pedido de oração pelo WhatsApp (abre em nova aba)',
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
    id: 'cta-igrejas-cadastro',
    links: [
      {
        label: 'Cadastrar congregação',
        href: 'https://wa.me/5551997032022?text=Quero%20colocar%20a%20minha%20congrega%C3%A7%C3%A3o%20no%20site%20da%20Igreja%20de%20Cristo.',
        ariaLabel:
          'Cadastrar congregação no site da Igreja de Cristo pelo WhatsApp (abre em nova aba)',
        icon: 'bi-plus-circle',
        variant: 'outline',
        external: true,
      },
    ],
  },
  {
    title: 'Precisa de oração?',
    id: 'cta-igrejas-oracao',
    links: [
      {
        label: 'Pedido de oração',
        href: 'https://wa.me/5551997032022?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20ora%C3%A7%C3%A3o.',
        ariaLabel: 'Pedido de oração pelo WhatsApp (abre em nova aba)',
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
    id: 'cta-eventos-encontros',
    links: [
      {
        label: 'Domingo · 9h30',
        href: '/eventos/domingo',
        ariaLabel: 'Domingo · 9h30: culto de domingo',
        icon: 'bi-calendar-event',
        variant: 'outline',
      },
      {
        label: 'Quarta-feira · 19h',
        href: '/eventos/quarta',
        ariaLabel: 'Quarta-feira · 19h: culto de quarta-feira',
        icon: 'bi-calendar-event',
        variant: 'outline',
      },
    ],
  },
  {
    title: 'Como chegar',
    id: 'cta-eventos-endereco',
    links: [
      {
        label: 'Ver endereço',
        href: '/eventos/local',
        ariaLabel: 'Ver endereço dos encontros',
        icon: 'bi-geo-alt',
        variant: 'outline',
      },
    ],
  },
];

// MAPEAMENTO: cada página usa qual CTA
export const CTA_CONFIGS = {
  home: HOME_CTA,
  about: HOME_CTA, // Quem Somos = igual à home
  churches: CHURCH_CTA,
  events: EVENTS_CTA,
  gallery: HOME_CTA, // Galeria = igual à home
  contact: HOME_CTA, // Contato = igual à home (depois customizamos)
  church: CHURCH_CTA, // Página de igreja específica
};
