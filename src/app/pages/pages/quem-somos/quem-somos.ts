import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageLayout } from '../../../shared/components/page-layout/page-layout';
import { SectionContainer } from '../../../shared/components/section-container/section-container';
import { SectionSideTitle } from '../../../shared/components/side-title/section-side-title';
import { SectionCard } from '../../../shared/components/section-card/section-card';
import { ContentHeroComponent } from '../../../shared/components/content-hero/content-hero';
import { MissionCard } from '../../../shared/components/mission-card/mission-card';

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
    // TÍTULO DA PÁGINA (ESPECÍFICO E RICO EM PALAVRAS-CHAVE)
    // ============================================
    this.title.setTitle('Quem Somos | Igreja de Cristo - História, Fé e Missão');

    // ============================================
    // METADADOS BÁSICOS (DESCRIÇÃO CONVINCENTE E OTIMIZADA)
    // ============================================
    this.meta.updateTag({
      name: 'description',
      content:
        'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'quem somos Igreja de Cristo, história da igreja, missão cristã, visão igreja, valores cristãos, comunidade cristã, fé em Jesus, bíblia, evangelho',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large',
    });
    this.meta.updateTag({ name: 'googlebot', content: 'index, follow' });

    // ============================================
    // OPEN GRAPH (PARA COMPARTILHAMENTO EM REDES SOCIAIS)
    // ============================================
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Quem Somos | Igreja de Cristo - História, Fé e Missão',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo.',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.igrejadecristo.net.br/quem-somos',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'Igreja de Cristo' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image.jpg',
    });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'Igreja de Cristo - Conheça nossa história e missão',
    });

    // ============================================
    // TWITTER CARD
    // ============================================
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Quem Somos | Igreja de Cristo - História, Fé e Missão',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image.jpg',
    });
    this.meta.updateTag({ name: 'twitter:site', content: '@igrejadecristo' });

    // ============================================
    // CORES E TEMA
    // ============================================
    this.meta.updateTag({ name: 'theme-color', content: '#163b67' });
    this.meta.updateTag({ name: 'msapplication-TileColor', content: '#163b67' });
  }

  /**
   * Adiciona JSON-LD (Dados Estruturados) para melhorar o SEO
   * Isso ajuda o Google a entender melhor o conteúdo do site
   */
  private addJsonLd(): void {
    // VERIFICA SE ESTÁ NO NAVEGADOR
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return; // Sai da função se não estiver no navegador
    }

    // Remove JSON-LD antigo se existir (evita duplicação)
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
        {
          '@type': 'Organization',
          '@id': 'https://www.igrejadecristo.net.br/#organization',
          name: 'Igreja de Cristo',
          url: 'https://www.igrejadecristo.net.br/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.igrejadecristo.net.br/assets/img/logo.svg',
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
        {
          '@type': 'WebSite',
          '@id': 'https://www.igrejadecristo.net.br/#website',
          name: 'Igreja de Cristo',
          url: 'https://www.igrejadecristo.net.br/',
          publisher: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          inLanguage: 'pt-BR',
        },
        {
          '@type': 'AboutPage',
          '@id': 'https://www.igrejadecristo.net.br/quem-somos#webpage',
          name: 'Quem Somos | Igreja de Cristo',
          description:
            'Conheça a história, missão, visão e valores da Igreja de Cristo. Uma comunidade cristã firmada na Bíblia, em Jesus Cristo e no amor ao próximo.',
          url: 'https://www.igrejadecristo.net.br/quem-somos',
          isPartOf: {
            '@id': 'https://www.igrejadecristo.net.br/#website',
          },
          about: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Nossa história',
                description: 'Conheça a origem da Igreja de Cristo.',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Nossa fé',
                description: 'Acreditamos em Jesus Cristo e na Bíblia como nossa regra de fé.',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Nossa missão',
                description: 'Anunciar o Evangelho e servir ao próximo.',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Nossos valores',
                description: 'Fundamentados na Bíblia, vivemos em comunhão e amor.',
              },
            ],
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.igrejadecristo.net.br/quem-somos#breadcrumb',
          name: 'Breadcrumbs da página Quem Somos',
          description: 'Caminho de navegação para a página Quem Somos.',
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
