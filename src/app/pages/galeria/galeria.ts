import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { AlbumCard } from '../../shared/components/album-card/album-card';
import { AlbumPhoto } from '../../shared/models/album-photo';
import { GalleryFeatureLeft } from '../../shared/components/gallery-feature-left/gallery-feature-left';
import { GalleryFeatureRight } from '../../shared/components/gallery-feature-right/gallery-feature-right';

import { SeoService } from '../../shared/services/seo.service';

const SITE_URL = 'https://www.igrejadecristo.net.br';
const PAGE_URL = `${SITE_URL}/galeria`;

const PAGE_TITLE =
  'Galeria da Igreja de Cristo no Brasil | Fotos de Cultos, Batismos e Estudos Bíblicos';

const PAGE_DESCRIPTION =
  'Veja fotos da Igreja de Cristo no Brasil em momentos de culto, batismos, estudos bíblicos, oração, comunhão e encontros. Confira registros da comunidade de Garopaba e acompanhe futuras galerias de outras congregações.';

const PAGE_IMAGE = `${SITE_URL}/assets/img/garopaba/irmao_paulo_pregando.jpeg`;

const PAGE_IMAGE_ALT =
  'Galeria da Igreja de Cristo no Brasil com registros de cultos, batismos e comunhão';

const JSON_LD_ID = 'json-ld-galeria';

const KEYWORDS =
  'galeria Igreja de Cristo, fotos Igreja de Cristo, Igreja de Cristo no Brasil, fotos de cultos, fotos de batismos, fotos de estudos bíblicos, fotos de igreja cristã, eventos Igreja de Cristo, momentos de comunhão, Igreja de Cristo Garopaba, congregações Igreja de Cristo, comunidade cristã no Brasil';

const OG_DESCRIPTION =
  'Confira fotos de cultos, batismos, estudos bíblicos, oração, comunhão e encontros da Igreja de Cristo. Veja registros atuais da congregação de Garopaba.';

const TWITTER_DESCRIPTION =
  'Fotos de cultos, batismos, estudos bíblicos, oração e momentos de comunhão da Igreja de Cristo no Brasil.';

@Component({
  selector: 'app-galeria',
  standalone: true,
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
  private readonly seo = inject(SeoService);
  private readonly meta = inject(Meta);

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

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  /**
   * Configura o SEO por meio do serviço centralizado.
   * Os metadados sociais complementares da implementação anterior
   * são preservados abaixo.
   */
  private setupSEO(): void {
    this.seo.update({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      path: '/galeria',
      image: PAGE_IMAGE,
      imageAlt: PAGE_IMAGE_ALT,
      keywords: KEYWORDS,
      twitterSite: '@igrejadecristo',
    });

    // Define as entidades globais compartilhadas pelo site.
    this.seo.setGlobalJsonLd();

    // Preserva as descrições específicas dos compartilhamentos.
    this.meta.updateTag({
      property: 'og:description',
      content: OG_DESCRIPTION,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: TWITTER_DESCRIPTION,
    });

    // Preserva as dimensões declaradas da imagem Open Graph.
    this.meta.updateTag({
      property: 'og:image:width',
      content: '1200',
    });

    this.meta.updateTag({
      property: 'og:image:height',
      content: '630',
    });

    // Preserva o texto alternativo específico do Twitter.
    this.meta.updateTag({
      name: 'twitter:image:alt',
      content: 'Galeria de fotos da Igreja de Cristo com registros de cultos e comunhão',
    });

    // Preserva as diretivas de indexação utilizadas anteriormente.
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    });

    this.meta.updateTag({
      name: 'googlebot',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    });

    // Mantém a cor usada para a identificação do aplicativo no sistema.
    this.meta.updateTag({
      name: 'msapplication-TileColor',
      content: '#163b67',
    });
  }

  /**
   * Reúne todas as imagens utilizadas nos álbuns e destaques.
   */
  private obterFotos(): AlbumPhoto[] {
    return [
      ...this.galeriaDestaque,
      ...this.galeriaDestaqueRight,
      ...this.batismos,
      ...this.estudoBiblico,
    ];
  }

  /**
   * JSON-LD específico da página de galeria.
   *
   * Organization e WebSite são entidades globais e são
   * referenciadas pelos seus @id, sem duplicar suas definições.
   */
  private addJsonLd(): void {
    const fotos = this.obterFotos();

    const imageObjects = fotos.map((foto, index) => ({
      '@type': 'ImageObject',
      '@id': `${PAGE_URL}#image-${index + 1}`,
      name: foto.title,
      description: foto.caption,
      contentUrl: `${SITE_URL}${foto.src}`,
      url: `${SITE_URL}${foto.src}`,
      caption: foto.caption,
      inLanguage: 'pt-BR',
    }));

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${PAGE_URL}#webpage`,
          name: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          url: PAGE_URL,
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': `${SITE_URL}/#website`,
          },
          about: {
            '@id': `${SITE_URL}/#organization`,
          },
          breadcrumb: {
            '@id': `${PAGE_URL}#breadcrumb`,
          },
          mainEntity: {
            '@id': `${PAGE_URL}#image-gallery`,
          },
          primaryImageOfPage: {
            '@id': `${PAGE_URL}#image-1`,
          },
        },
        {
          '@type': 'ImageGallery',
          '@id': `${PAGE_URL}#image-gallery`,
          name: 'Galeria de fotos da Igreja de Cristo',
          description:
            'Fotos de cultos, batismos, estudos bíblicos, oração, comunhão e encontros da Igreja de Cristo.',
          url: PAGE_URL,
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': `${PAGE_URL}#webpage`,
          },
          image: imageObjects.map((imagem) => ({
            '@id': imagem['@id'],
          })),
        },
        ...imageObjects,
        {
          '@type': 'BreadcrumbList',
          '@id': `${PAGE_URL}#breadcrumb`,
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
              name: 'Galeria',
              item: PAGE_URL,
            },
          ],
        },
      ],
    };

    this.seo.setJsonLd(jsonLd, JSON_LD_ID);
  }
}
