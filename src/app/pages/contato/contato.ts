import { Component, DOCUMENT, Inject } from '@angular/core';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import {
  InstitutionalChannel,
  InstitutionalChannels,
} from '../../shared/components/institutional-channels/institutional-channels';
import { ChurchContactInfo as ChurchContactInfoModel } from '../../shared/models/church-contact-info';
import { ChurchContactInfo } from '../../shared/components/church-contact-info/church-contact-info';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contato',
  imports: [
    PageLayout,
    ContentHeroComponent,
    SectionSideTitle,
    InstitutionalChannels,
    ChurchContactInfo,
    SectionContainer,
  ],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  private setupSEO(): void {
    this.title.setTitle('Contato e Pedido de Oração | Igreja de Cristo');

    this.meta.updateTag({
      name: 'description',
      content:
        'Entre em contato com a Igreja de Cristo, planeje sua visita, saiba como chegar ou envie seu pedido de oração.',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({
      name: 'theme-color',
      content: '#163b67',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Contato e Pedido de Oração | Igreja de Cristo',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Fale com a Igreja de Cristo, planeje sua visita, encontre nosso endereço e envie seu pedido de oração.',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.igrejadecristo.net.br/contato',
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Igreja de Cristo',
    });

    this.meta.updateTag({
      property: 'og:locale',
      content: 'pt_BR',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image.jpg',
    });

    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'Contato e Pedido de Oração | Igreja de Cristo',
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Contato e Pedido de Oração | Igreja de Cristo',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Fale com a Igreja de Cristo, planeje sua visita, encontre nosso endereço e envie seu pedido de oração.',
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image.jpg',
    });

    this.meta.updateTag({
      name: 'msapplication-TileColor',
      content: '#163b67',
    });
  }

  private addJsonLd(): void {
    const existing = this.document.head.querySelector('script[data-page-jsonld="contato"]');

    existing?.remove();

    const script = this.document.createElement('script');

    script.type = 'application/ld+json';
    script.setAttribute('data-page-jsonld', 'contato');

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Church',
          '@id': 'https://www.igrejadecristo.net.br/#church',
          name: 'Igreja de Cristo',
          url: 'https://www.igrejadecristo.net.br/garopaba/',
          logo: 'https://www.igrejadecristo.net.br/assets/img/logo.svg',
          telephone: '+55-53-98149-3086',
          email: 'gesiel.br@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Pinguirito, 41',
            addressLocality: 'Garopaba',
            addressRegion: 'SC',
            addressCountry: 'BR',
          },
          sameAs: [
            'https://www.instagram.com/igrejadecristogaropabasc/',
            'https://www.facebook.com/IgrejadeCristoCuritibaCentro',
            'https://www.youtube.com/',
          ],
        },
        {
          '@type': 'ContactPage',
          '@id': 'https://www.igrejadecristo.net.br/contato#contact-page',
          url: 'https://www.igrejadecristo.net.br/contato',
          name: 'Contato e Pedido de Oração | Igreja de Cristo',
          description:
            'Entre em contato com a Igreja de Cristo, planeje sua visita, saiba como chegar ou envie seu pedido de oração.',
          mainEntity: {
            '@id': 'https://www.igrejadecristo.net.br/#church',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.igrejadecristo.net.br/contato#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: 'https://www.igrejadecristo.net.br/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contato',
              item: 'https://www.igrejadecristo.net.br/contato',
            },
          ],
        },
      ],
    });

    this.document.head.appendChild(script);
  }

  canaisTitle = 'Canais institucionais';

  canaisInstitucionais: InstitutionalChannel[] = [
    {
      icon: 'bi-globe2',
      title: 'Site',
      value: 'igrejadecristo.net.br/garopaba',
      url: 'https://www.igrejadecristo.net.br/garopaba/',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Visitar site da igreja',
    },
    {
      icon: 'bi-whatsapp',
      title: 'WhatsApp',
      value: '(53) 98149-3086',
      url: 'https://wa.me/5553981493086',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Enviar mensagem no WhatsApp',
    },
    {
      icon: 'bi-envelope',
      title: 'E-mail',
      value: 'gesiel.br@gmail.com',
      url: 'mailto:gesiel.br@gmail.com',
      ariaLabel: 'Enviar e-mail',
    },
    {
      icon: 'bi-facebook',
      title: 'Facebook',
      value: '/IgrejadeCristoCuritibaCentro',
      url: 'https://www.facebook.com/IgrejadeCristoCuritibaCentro',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Visitar página do Facebook',
    },
    {
      icon: 'bi-instagram',
      title: 'Instagram',
      value: '@igrejadecristogaropabasc',
      url: 'https://www.instagram.com/igrejadecristogaropabasc/',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Visitar perfil do Instagram',
    },
  ];

  contatos: ChurchContactInfoModel[] = [
    {
      id: 'address',
      icon: 'bi bi-geo-alt-fill text-gold',
      label: 'Endereço',
      value: 'Rua Pinguirito, 41 · Pinguirito, Garopaba/SC',
    },
    {
      id: 'phone',
      icon: 'bi bi-telephone-fill text-gold',
      label: 'Telefone',
      value: '(53) 98149-3086',
      href: 'tel:+5553981493086',
    },
    {
      id: 'email',
      icon: 'bi bi-envelope-fill text-gold',
      label: 'E-mail',
      value: 'gesiel.br@gmail.com',
      href: 'mailto:gesiel.br@gmail.com',
    },
    {
      id: 'schedule',
      icon: 'bi bi-clock-fill text-gold',
      label: 'Horários',
      value: 'Domingo · 9h30 · Quarta-feira · 19h',
    },
  ];
}
