import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { MissionCard } from '../../shared/components/mission-card/mission-card';

@Component({
  selector: 'app-quem-somos',
  imports: [
    PageLayout,
    SectionContainer,
    SectionSideTitle,
    SectionCard,
    ContentHeroComponent,
    MissionCard,
  ],
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.css',
})
export class QuemSomos implements OnInit {
  private readonly seo = inject(SeoService);

  // Dados do Hero
  heroSlides = [
    {
      title: 'Quem Somos',
      subtitle: 'Conheça nossa história, fé e missão',
      description:
        'A Igreja de Cristo é uma comunidade cristã comprometida com Jesus Cristo, o Evangelho e a Bíblia.',
      image: '/assets/img/quem-somos/hero.webp',
      alt: 'Igreja de Cristo - Nossa história e missão',
      ctaText: 'Saiba mais',
      ctaLink: '#historia',
    },
  ];

  // Dados dos valores
  valores = [
    {
      icon: 'bi bi-book',
      title: 'Fundamentados na Bíblia',
      description: 'A Palavra de Deus é nossa única regra de fé e prática.',
    },
    {
      icon: 'bi bi-heart',
      title: 'Comunhão e Amor',
      description: 'Vivemos como irmãos, cuidando uns dos outros com amor genuíno.',
    },
    {
      icon: 'bi bi-megaphone',
      title: 'Anunciando o Evangelho',
      description: 'Levamos a mensagem de salvação a todos os povos.',
    },
    {
      icon: 'bi bi-people',
      title: 'Serviço ao Próximo',
      description: 'Expressamos nossa fé através de ações concretas de amor.',
    },
  ];

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  /**
   * Configura os metadados SEO da página Quem Somos.
   */
  private setupSEO(): void {
    this.seo.update({
      title: 'Quem Somos | Igreja de Cristo - História, Fé, Missão e Valores',
      description:
        'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo. Saiba mais sobre nossa fé e propósito.',
      path: '/quem-somos',
      image: 'https://www.igrejadecristo.net.br/assets/img/og-image-quem-somos.jpg',
      imageAlt: 'Igreja de Cristo - Conheça nossa história, fé, missão e valores',
      keywords:
        'quem somos Igreja de Cristo, história da igreja, missão cristã, visão igreja, valores cristãos, comunidade cristã, fé em Jesus, bíblia, evangelho, declaração de fé, propósito cristão, igreja evangélica Brasil',
      revisitAfter: '7 days',
      twitterSite: '@igrejadecristo',
      twitterCreator: '@igrejadecristo',
    });
  }

  /**
   * Adiciona os dados estruturados JSON-LD da página.
   */
  private addJsonLd(): void {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // ORGANIZAÇÃO
        {
          '@type': 'Organization',
          '@id': 'https://www.igrejadecristo.net.br/#organization',
          name: 'Igreja de Cristo',
          alternateName: ['Igreja de Cristo no Brasil', 'Comunidade Cristã Igreja de Cristo'],
          url: 'https://www.igrejadecristo.net.br/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.igrejadecristo.net.br/assets/img/logo.svg',
            width: '300',
            height: '120',
          },
          description:
            'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo.',
          sameAs: [
            'https://www.instagram.com/igrejadecristogaropabasc/',
            'https://www.facebook.com/IgrejadeCristoCuritibaCentro',
            'https://www.youtube.com/@IgrejadeCristoCuritiba',
            'https://wa.me/5553981493086',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+55-53-98149-3086',
            contactType: 'General Inquiries',
            availableLanguage: ['Portuguese'],
          },
        },

        // WEBSITE
        {
          '@type': 'WebSite',
          '@id': 'https://www.igrejadecristo.net.br/#website',
          name: 'Igreja de Cristo',
          alternateName: 'Igreja de Cristo no Brasil',
          url: 'https://www.igrejadecristo.net.br/',
          publisher: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          inLanguage: 'pt-BR',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.igrejadecristo.net.br/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        },

        // ABOUT PAGE — QUEM SOMOS
        {
          '@type': 'AboutPage',
          '@id': 'https://www.igrejadecristo.net.br/quem-somos#webpage',
          name: 'Quem Somos | Igreja de Cristo - História, Fé, Missão e Valores',
          description:
            'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo. Saiba mais sobre nossa fé e propósito.',
          url: 'https://www.igrejadecristo.net.br/quem-somos',
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': 'https://www.igrejadecristo.net.br/#website',
          },
          about: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.igrejadecristo.net.br/quem-somos#breadcrumb',
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'O que acreditamos na Igreja de Cristo',
            description:
              'Conheça os pilares da nossa fé: história, missão, visão e valores da Igreja de Cristo.',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Nossa história',
                description: 'Conheça a origem da Igreja de Cristo e sua trajetória.',
                url: 'https://www.igrejadecristo.net.br/quem-somos#historia',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Nossa fé',
                description: 'Acreditamos em Jesus Cristo e na Bíblia como nossa regra de fé.',
                url: 'https://www.igrejadecristo.net.br/quem-somos#fe',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Nossa missão',
                description: 'Anunciar o Evangelho e servir ao próximo com amor.',
                url: 'https://www.igrejadecristo.net.br/quem-somos#missao',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Nossos valores',
                description: 'Fundamentados na Bíblia, vivemos em comunhão e amor.',
                url: 'https://www.igrejadecristo.net.br/quem-somos#valores',
              },
            ],
          },
        },

        // BREADCRUMB LIST
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.igrejadecristo.net.br/quem-somos#breadcrumb',
          name: 'Breadcrumbs da página Quem Somos',
          description: 'Caminho de navegação para a página Quem Somos da Igreja de Cristo.',
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
              name: 'Quem Somos',
              item: 'https://www.igrejadecristo.net.br/quem-somos',
            },
          ],
        },
      ],
    };

    this.seo.setJsonLd(jsonLd);
  }
}
