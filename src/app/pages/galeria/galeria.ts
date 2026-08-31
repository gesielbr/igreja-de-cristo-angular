import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { AlbumCard } from '../../shared/components/album-card/album-card';
import { AlbumPhoto } from '../../shared/models/album-photo';
import { GalleryFeatureLeft } from '../../shared/components/gallery-feature-left/gallery-feature-left';
import { GalleryFeatureRight } from '../../shared/components/gallery-feature-right/gallery-feature-right';

@Component({
  selector: 'app-galeria',
  imports: [
    PageLayout,
    ContentHeroComponent,
    SectionContainer,
    AlbumCard,
    GalleryFeatureLeft,
    GalleryFeatureRight,
  ],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria implements OnInit {
  /**
   * Álbum de batismos.
   *
   * Atualmente reúne registros da congregação de Garopaba.
   * Futuramente outros álbuns e congregações poderão ser adicionados
   * sem alterar a estrutura principal da página.
   */
  batismos: AlbumPhoto[] = [
    {
      src: '/assets/img/garopaba/batismo_1.jpg',
      alt: 'Batismo na água durante celebração da comunidade da Igreja de Cristo em Garopaba',
      caption: 'Um momento de alegria e fé para toda a comunidade.',
      title: 'Batismos',
    },
    {
      src: '/assets/img/garopaba/batismo_2.jpg',
      alt: 'Abraços e celebração após batismo na água na Igreja de Cristo em Garopaba',
      caption: 'Gratidão por mais um irmão que decidiu seguir a Cristo.',
      title: 'Batismos',
    },
    {
      src: '/assets/img/garopaba/batismo_2.png',
      alt: 'Batismo na água com celebração da comunidade da Igreja de Cristo',
      caption: 'Gratidão por mais um irmão que decidiu seguir a Cristo.',
      title: 'Batismos',
    },
  ];

  /**
   * Álbum de estudos bíblicos.
   *
   * Atualmente reúne registros da congregação de Garopaba.
   */
  estudoBiblico: AlbumPhoto[] = [
    {
      src: '/assets/img/garopaba/estudo_biblico_02.jpg',
      alt: 'Reunião de estudo bíblico com participação da comunidade da Igreja de Cristo',
      caption: 'Servindo com alegria e dedicação.',
      title: 'Estudo da Palavra',
    },
    {
      src: '/assets/img/garopaba/estudo_biblico_03.png',
      alt: 'Mão segurando a Bíblia durante estudo bíblico em grupo',
      caption: 'Uma comunidade que estuda rigorosamente as Escrituras para crescer na fé.',
      title: 'Estudo da Palavra',
    },
    {
      src: '/assets/img/garopaba/estudo_biblico_01.jpg',
      alt: 'Pessoas reunidas em estudo bíblico e oração em ambiente acolhedor',
      caption: 'Congregação unida em estudo, oração e confraternização.',
      title: 'Estudo da Palavra',
    },
  ];

  /**
   * Primeiro conjunto de imagens em destaque.
   *
   * Atualmente representa momentos da congregação de Garopaba.
   */
  galeriaDestaque: AlbumPhoto[] = [
    {
      src: '/assets/img/garopaba/irmao_paulo_pregando.jpeg',
      alt: 'Irmão pregando a Palavra de Deus durante culto da Igreja de Cristo em Garopaba',
      title: 'Pregação da Palavra',
      caption: 'Momento de adoração e ensino da Palavra de Deus durante o culto.',
    },
    {
      src: '/assets/img/garopaba/congregacao_01.jpg',
      alt: 'Irmãos e visitantes reunidos em adoração e estudo na Igreja de Cristo',
      title: 'Comunidade reunida',
      caption: 'Irmãos e visitantes reunidos para adoração, comunhão e estudo da Palavra.',
    },
    {
      src: '/assets/img/garopaba/congregacao_02.jpg',
      alt: 'Pessoas reunidas após reunião da Igreja de Cristo em Garopaba',
      title: 'Comunhão após a reunião',
      caption: 'Momentos de convivência e comunhão entre os irmãos após a reunião.',
    },
    {
      src: '/assets/img/garopaba/evento_1.png',
      alt: 'Irmãos reunidos à mesa durante evento da comunidade cristã',
      title: 'Comunhão à mesa',
      caption: 'Irmãos reunidos à mesa em um momento de comunhão e confraternização.',
    },
  ];

  /**
   * Segundo conjunto de imagens em destaque.
   */
  galeriaDestaqueRight: AlbumPhoto[] = [
    {
      src: '/assets/img/garopaba/congregacao_06.jpg',
      alt: 'Pessoas da comunidade reunidas em frente à Igreja de Cristo em Garopaba',
      title: 'Comunidade reunida',
      caption: 'Irmãos reunidos em um momento de comunhão e convivência.',
    },
    {
      src: '/assets/img/garopaba/congregacao_05.jpeg',
      alt: 'Grupo da Igreja de Cristo reunido em comunhão e estudo bíblico',
      title: 'Comunhão e estudo',
      caption:
        'A comunidade reunida para fortalecer a fé por meio da comunhão e do estudo da Palavra.',
    },
    {
      src: '/assets/img/garopaba/caderno_de_pedido_de_oracao.jpg',
      alt: 'Irmão entregando um caderno de pedidos de oração para outro irmão da igreja',
      title: 'Pedidos de oração',
      caption:
        'Um momento de cuidado e oração, compartilhando pedidos entre os irmãos da comunidade.',
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
   * Configura as informações SEO da página de galeria.
   */
  private setupSEO(): void {
    // ============================================
    // TÍTULO DA PÁGINA
    // ============================================
    this.title.setTitle(
      'Galeria da Igreja de Cristo no Brasil | Fotos de Cultos, Batismos e Estudos Bíblicos',
    );

    // ============================================
    // META DESCRIPTION
    // ============================================
    this.meta.updateTag({
      name: 'description',
      content:
        'Veja fotos da Igreja de Cristo no Brasil em momentos de culto, batismos, estudos bíblicos, oração, comunhão e encontros. Confira registros da comunidade de Garopaba e acompanhe futuras galerias de outras congregações.',
    });

    // ============================================
    // KEYWORDS
    // ============================================
    this.meta.updateTag({
      name: 'keywords',
      content:
        'galeria Igreja de Cristo, fotos Igreja de Cristo, Igreja de Cristo no Brasil, fotos de cultos, fotos de batismos, fotos de estudos bíblicos, fotos de igreja cristã, eventos Igreja de Cristo, momentos de comunhão, Igreja de Cristo Garopaba, congregações Igreja de Cristo, comunidade cristã no Brasil',
    });

    // ============================================
    // ROBOTS
    // ============================================
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    });

    this.meta.updateTag({
      name: 'googlebot',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    });

    // ============================================
    // OPEN GRAPH
    // ============================================
    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Galeria da Igreja de Cristo no Brasil | Fotos de Cultos, Batismos e Estudos Bíblicos',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Confira fotos de cultos, batismos, estudos bíblicos, oração, comunhão e encontros da Igreja de Cristo. Veja registros atuais da congregação de Garopaba.',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.igrejadecristo.net.br/galeria',
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
      content: 'https://www.igrejadecristo.net.br/assets/img/garopaba/irmao_paulo_pregando.jpeg',
    });

    this.meta.updateTag({
      property: 'og:image:width',
      content: '1200',
    });

    this.meta.updateTag({
      property: 'og:image:height',
      content: '630',
    });

    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'Galeria da Igreja de Cristo no Brasil com registros de cultos, batismos e comunhão',
    });

    // ============================================
    // TWITTER CARD
    // ============================================
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Galeria da Igreja de Cristo no Brasil | Fotos de Cultos, Batismos e Estudos Bíblicos',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Fotos de cultos, batismos, estudos bíblicos, oração e momentos de comunhão da Igreja de Cristo no Brasil.',
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/garopaba/irmao_paulo_pregando.jpeg',
    });

    this.meta.updateTag({
      name: 'twitter:image:alt',
      content: 'Galeria de fotos da Igreja de Cristo com registros de cultos e comunhão',
    });

    this.meta.updateTag({
      name: 'twitter:site',
      content: '@igrejadecristo',
    });

    // ============================================
    // CORES E TEMA
    // ============================================
    this.meta.updateTag({
      name: 'theme-color',
      content: '#163b67',
    });

    this.meta.updateTag({
      name: 'msapplication-TileColor',
      content: '#163b67',
    });
  }

  /**
   * Adiciona dados estruturados JSON-LD.
   *
   * A página /galeria pertence à estrutura nacional da Igreja de Cristo.
   * As imagens atualmente disponíveis são registros da congregação
   * de Garopaba, mas a estrutura foi preparada para receber outras
   * congregações futuramente.
   */
  private addJsonLd(): void {
    // ============================================
    // SSR / SSG
    // ============================================
    if (typeof document === 'undefined') {
      return;
    }

    // ============================================
    // REMOVE JSON-LD ANTERIOR DA PÁGINA
    // ============================================
    const oldScripts = document.querySelectorAll('script[data-page-jsonld="galeria"]');

    oldScripts.forEach((script) => script.remove());

    // ============================================
    // URL BASE
    // ============================================
    const siteUrl = 'https://www.igrejadecristo.net.br';
    const pageUrl = `${siteUrl}/galeria`;

    // ============================================
    // IMAGENS DA GALERIA
    // ============================================
    const galleryPhotos: AlbumPhoto[] = [
      ...this.galeriaDestaque,
      ...this.galeriaDestaqueRight,
      ...this.batismos,
      ...this.estudoBiblico,
    ];

    const imageObjects = galleryPhotos.map((photo, index) => ({
      '@type': 'ImageObject',
      '@id': `${pageUrl}#image-${index + 1}`,
      name: photo.title,
      description: photo.caption,
      contentUrl: `${siteUrl}${photo.src}`,
      url: `${siteUrl}${photo.src}`,
      caption: photo.caption,
      inLanguage: 'pt-BR',
    }));

    // ============================================
    // JSON-LD
    // ============================================
    const jsonLd = {
      '@context': 'https://schema.org',

      '@graph': [
        // ==========================================
        // ORGANIZATION
        // ==========================================
        {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'Igreja de Cristo',
          url: `${siteUrl}/`,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/assets/img/logo.svg`,
          },
          description:
            'Igreja de Cristo no Brasil - Comunidades cristãs locais comprometidas com Jesus Cristo, o Evangelho, a Bíblia, a fé e a comunhão.',
          sameAs: [
            'https://www.instagram.com/igrejadecristogaropabasc/',
            'https://www.facebook.com/IgrejadeCristoCuritibaCentro',
            'https://www.youtube.com/@IgrejadeCristoCuritiba',
          ],
        },

        // ==========================================
        // WEBSITE
        // ==========================================
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          name: 'Igreja de Cristo',
          url: `${siteUrl}/`,
          publisher: {
            '@id': `${siteUrl}/#organization`,
          },
          inLanguage: 'pt-BR',
        },

        // ==========================================
        // WEBPAGE
        // ==========================================
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          name: 'Galeria da Igreja de Cristo no Brasil | Fotos de Cultos, Batismos e Estudos Bíblicos',
          description:
            'Galeria de fotos da Igreja de Cristo com registros de cultos, batismos, estudos bíblicos, oração, comunhão e encontros. Atualmente com registros da congregação de Garopaba.',
          url: pageUrl,
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': `${siteUrl}/#website`,
          },
          about: {
            '@id': `${siteUrl}/#organization`,
          },
          breadcrumb: {
            '@id': `${pageUrl}#breadcrumb`,
          },
          primaryImageOfPage: {
            '@id': `${pageUrl}#image-1`,
          },
        },

        // ==========================================
        // IMAGE GALLERY
        // ==========================================
        {
          '@type': 'ImageGallery',
          '@id': `${pageUrl}#image-gallery`,
          name: 'Galeria de fotos da Igreja de Cristo',
          description:
            'Fotos de cultos, batismos, estudos bíblicos, oração, comunhão e encontros da Igreja de Cristo.',
          url: pageUrl,
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': `${pageUrl}#webpage`,
          },
          image: imageObjects.map((image) => ({
            '@id': image['@id'],
          })),
        },

        // ==========================================
        // IMAGENS
        // ==========================================
        ...imageObjects,

        // ==========================================
        // BREADCRUMB
        // ==========================================
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          name: 'Breadcrumbs da página de galeria',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: `${siteUrl}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Galeria',
              item: pageUrl,
            },
          ],
        },
      ],
    };

    // ============================================
    // INSERE JSON-LD NO HEAD
    // ============================================
    const script = document.createElement('script');

    script.type = 'application/ld+json';
    script.setAttribute('data-page-jsonld', 'galeria');
    script.textContent = JSON.stringify(jsonLd);

    document.head.appendChild(script);
  }
}
