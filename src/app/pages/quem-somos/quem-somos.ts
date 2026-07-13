import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  /**
   * Configura todas as tags SEO para a página "Quem Somos"
   */
  private setupSEO(): void {
    // ============================================
    // TÍTULO DA PÁGINA - Otimizado com palavras-chave
    // ============================================
    this.title.setTitle('Quem Somos | Igreja de Cristo - História, Fé, Missão e Valores');

    // ============================================
    // METADADOS BÁSICOS - Descrição mais rica
    // ============================================
    this.meta.updateTag({
      name: 'description',
      content:
        'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo. Saiba mais sobre nossa fé e propósito.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'quem somos Igreja de Cristo, história da igreja, missão cristã, visão igreja, valores cristãos, comunidade cristã, fé em Jesus, bíblia, evangelho, declaração de fé, propósito cristão, igreja evangélica Brasil',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large',
    });
    this.meta.updateTag({
      name: 'googlebot',
      content: 'index, follow, max-snippet:-1, max-image-preview:large',
    });
    this.meta.updateTag({
      name: 'revisit-after',
      content: '7 days',
    });

    // ============================================
    // OPEN GRAPH - Otimizado para compartilhamento
    // ============================================
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Quem Somos | Igreja de Cristo - História, Fé, Missão e Valores',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo. Descubra nossa fé e propósito.',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.igrejadecristo.net.br/quem-somos',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'Igreja de Cristo' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image-quem-somos.jpg',
    });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'Igreja de Cristo - Conheça nossa história, fé, missão e valores',
    });

    // ============================================
    // TWITTER CARD - Otimizado
    // ============================================
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Quem Somos | Igreja de Cristo - História, Fé, Missão e Valores',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image-quem-somos.jpg',
    });
    this.meta.updateTag({ name: 'twitter:site', content: '@igrejadecristo' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@igrejadecristo' });

    // ============================================
    // CORES E TEMA - Mantido igual
    // ============================================
    this.meta.updateTag({ name: 'theme-color', content: '#163b67' });
    this.meta.updateTag({ name: 'msapplication-TileColor', content: '#163b67' });
  }

  /**
   * Adiciona JSON-LD (Dados Estruturados) para melhorar o SEO
   */
  private addJsonLd(): void {
    // VERIFICA SE ESTÁ NO NAVEGADOR
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    // Remove JSON-LD antigo se existir
    const oldScript = document.querySelector('script[type="application/ld+json"]');
    if (oldScript) {
      oldScript.remove();
    }

    // Cria o novo script com os dados estruturados
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // ============================================
        // ORGANIZAÇÃO
        // ============================================
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
        // ============================================
        // WEBSITE
        // ============================================
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
        // ============================================
        // ABOUT PAGE - Página Quem Somos
        // ============================================
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
        // ============================================
        // BREADCRUMB LIST
        // ============================================
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

    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
