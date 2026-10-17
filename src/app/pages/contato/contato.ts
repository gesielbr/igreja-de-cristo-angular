import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import {
  InstitutionalChannel,
  InstitutionalChannels,
} from '../../shared/components/institutional-channels/institutional-channels';
import { ChurchContactInfo as ChurchContactInfoModel } from '../../shared/models/church-contact-info';
import { ChurchContactInfo } from '../../shared/components/church-contact-info/church-contact-info';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { SeoService } from '../../shared/services/seo.service';

const SITE_URL = 'https://www.igrejadecristo.net.br';
const PAGE_URL = `${SITE_URL}/contato`;

const PAGE_TITLE = 'Contato e Pedido de Oração | Igreja de Cristo';

const PAGE_DESCRIPTION =
  'Entre em contato com a Igreja de Cristo, planeje sua visita, saiba como chegar ou envie seu pedido de oração.';

const PAGE_IMAGE = `${SITE_URL}/assets/img/og-image.jpg`;

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
export class Contato implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  private setupSEO(): void {
    this.seo.update({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      path: '/contato',
      image: PAGE_IMAGE,
      imageAlt: PAGE_TITLE,
      twitterSite: '@igrejadecristo',
    });

    // Define as entidades globais compartilhadas pelo site.
    this.seo.setGlobalJsonLd();

    // Diretivas de indexação específicas desta página.
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({
      name: 'googlebot',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    });

    // Descrição específica para compartilhamento Open Graph.
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Fale com a Igreja de Cristo, planeje sua visita, encontre nosso endereço e envie seu pedido de oração.',
    });

    // Descrição específica para compartilhamento no X/Twitter.
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Fale com a Igreja de Cristo, planeje sua visita, encontre seu endereço e envie seu pedido de oração.',
    });

    this.meta.updateTag({
      name: 'msapplication-TileColor',
      content: '#163b67',
    });
  }

  private addJsonLd(): void {
    const churchId = `${SITE_URL}/#church`;
    const breadcrumbId = `${PAGE_URL}#breadcrumb`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Church',
          '@id': churchId,
          name: 'Igreja de Cristo',
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/assets/img/logo.svg`,
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
            'https://www.youtube.com/@IgrejadeCristoCuritiba',
          ],
        },
        {
          '@type': 'ContactPage',
          '@id': `${PAGE_URL}#contact-page`,
          url: PAGE_URL,
          name: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': `${SITE_URL}/#website`,
          },
          about: {
            '@id': churchId,
          },
          mainEntity: {
            '@id': churchId,
          },
          breadcrumb: {
            '@id': breadcrumbId,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': breadcrumbId,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: `${SITE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contato',
              item: PAGE_URL,
            },
          ],
        },
      ],
    };

    this.seo.setJsonLd(jsonLd, 'json-ld-contato');
  }

  canaisTitle = 'Canais institucionais';

  canaisInstitucionais: InstitutionalChannel[] = [
    {
      icon: 'bi-globe2',
      title: 'Site',
      value: 'igrejadecristo.net.br/',
      url: 'https://www.igrejadecristo.net.br/',
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
