import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { AccordionEstado } from '../../shared/components/accordion-estado/accordion-estado';

@Component({
  selector: 'app-igrejas',
  standalone: true,
  imports: [
    CommonModule,
    PageLayout,
    ContentHeroComponent,
    SectionSideTitle,
    SectionCard,
    SectionContainer,
    AccordionEstado,
  ],
  templateUrl: './igrejas.html',
  styleUrl: './igrejas.css',
})
export class Igrejas implements OnInit {
  // Dados estáticos para o componente
  readonly pageConfig = {
    currentPage: 'Igrejas locais',
    subtitle: 'Localidades',
    title: 'Igrejas de Cristo no Brasil',
    description:
      'Encontre comunidades locais da Igreja de Cristo, conheça páginas regionais, informações de cultos, estudos bíblicos, endereço e contato.',
  };

  // Dados das igrejas por estado
  readonly igrejasData = {
    santaCatarina: {
      estado: 'Santa Catarina',
      aberto: true,
      igrejas: [
        {
          nome: 'Igreja de Cristo em Florianópolis',
          descricao: 'Comunidade da Igreja de Cristo em Florianópolis, Santa Catarina.',
          endereco: 'Rua Prefeito Dib Cherem, 2897 - Capoeiras, Florianópolis - SC, 88090-001',
          link: 'https://linktr.ee/cebfloripa',
          linkExterno: true,
          whatsapp: '5548992222897',
          instagram: 'cebfloripa',
          facebook: 'igrejadecristofloripa',
          site: 'https://linktr.ee/cebfloripa',
          email: 'cebfloripa@gmail.com',
          maps: 'Rua Prefeito Dib Cherem, 2897 - Capoeiras, Florianópolis - SC, 88090-001',
        },
        {
          nome: 'Igreja de Cristo em Garopaba',
          descricao: 'Comunidade da Igreja de Cristo em Garopaba, Santa Catarina.',
          endereco: 'Rua Pinguirito, 41 - Pinguirito, Garopaba - SC, 88495-000',
          link: 'garopaba/',
          linkExterno: false,
          whatsapp: '5551997032022',
          instagram: 'igrejadecristogaropabasc',
          facebook: '',
          site: '',
          email: '',
          maps: 'Rua Pinguirito, 41 - Pinguirito, Garopaba - SC, 88495-000',
        },
      ],
    },
  };

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  /**
   * Configura todas as tags SEO para a página de igrejas
   */
  private setupSEO(): void {
    // ============================================
    // TÍTULO DA PÁGINA - Otimizado com palavras-chave
    // ============================================
    this.title.setTitle('Igrejas de Cristo no Brasil | Encontre uma Comunidade Cristã Próxima');

    // ============================================
    // METADADOS BÁSICOS
    // ============================================
    this.meta.updateTag({
      name: 'description',
      content:
        'Encontre igrejas da Igreja de Cristo no Brasil por Estado e cidade. Veja endereço, contato, horários de cultos, estudos bíblicos e informações sobre comunidades cristãs locais.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'igrejas de Cristo no Brasil, encontrar igreja, comunidade cristã, cultos evangélicos, estudos bíblicos, igreja local, congregação cristã, Igreja de Cristo endereço, igreja perto de mim, Santa Catarina, Paraná, Mato Grosso do Sul',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large',
    });

    this.meta.updateTag({
      name: 'googlebot',
      content: 'index, follow',
    });

    // ============================================
    // OPEN GRAPH (Facebook, LinkedIn, WhatsApp)
    // ============================================
    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Igrejas de Cristo no Brasil | Encontre uma Comunidade Cristã Próxima',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Encontre igrejas da Igreja de Cristo no Brasil por Estado e cidade. Comunidades cristãs locais com endereço, contato e informações de cultos.',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.igrejadecristo.net.br/igrejas',
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
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image-igrejas.jpg',
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
      content: 'Igrejas de Cristo no Brasil - Encontre uma comunidade cristã próxima',
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
      content: 'Igrejas de Cristo no Brasil | Encontre uma Comunidade Cristã Próxima',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Encontre igrejas da Igreja de Cristo no Brasil por Estado e cidade. Comunidades cristãs locais com endereço, contato e informações de cultos.',
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image-igrejas.jpg',
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
   * Adiciona JSON-LD (Dados Estruturados) para melhorar o SEO
   * Específico para páginas de listagem de igrejas
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

    // Pega as igrejas de Santa Catarina para o JSON-LD
    const igrejasSC = this.igrejasData.santaCatarina.igrejas;

    // Constrói o ItemList com as igrejas
    const itemListElement = igrejasSC.map((igreja, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Church',
        name: igreja.nome,
        description: igreja.descricao,
        url: igreja.linkExterno ? igreja.link : `https://www.igrejadecristo.net.br/${igreja.link}`,
        ...(igreja.email && { email: igreja.email }),
        ...(igreja.whatsapp && { telephone: `+55 ${igreja.whatsapp}` }),
        address: {
          '@type': 'PostalAddress',
          streetAddress: igreja.endereco.split(',')[0],
          addressLocality: igreja.endereco.split('-')[1]?.trim()?.split(',')[0] || '',
          addressRegion: igreja.endereco.split('-')[1]?.trim()?.split(',')[1]?.trim() || '',
          addressCountry: 'BR',
        },
        ...(igreja.instagram && {
          sameAs: [
            ...(igreja.instagram ? [`https://www.instagram.com/${igreja.instagram}/`] : []),
            ...(igreja.facebook ? [`https://www.facebook.com/${igreja.facebook}/`] : []),
            ...(igreja.whatsapp ? [`https://wa.me/55${igreja.whatsapp}`] : []),
            ...(igreja.site ? [igreja.site] : []),
          ],
        }),
      },
    }));

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
            'Igreja de Cristo no Brasil - Comunidades cristãs locais comprometidas com Jesus Cristo, o Evangelho e a Bíblia.',
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
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.igrejadecristo.net.br/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.igrejadecristo.net.br/igrejas#webpage',
          url: 'https://www.igrejadecristo.net.br/igrejas',
          name: 'Igrejas de Cristo no Brasil | Encontre uma Comunidade Cristã Próxima',
          description:
            'Encontre igrejas da Igreja de Cristo no Brasil por Estado e cidade. Veja endereço, contato, horários de cultos e estudos bíblicos.',
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': 'https://www.igrejadecristo.net.br/#website',
          },
          about: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.igrejadecristo.net.br/igrejas#breadcrumb',
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Igrejas de Cristo no Brasil por Estado',
            description:
              'Lista de comunidades locais da Igreja de Cristo no Brasil, organizadas por Estado e cidade, com endereço, contato e canais oficiais.',
            itemListElement: itemListElement,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.igrejadecristo.net.br/igrejas#breadcrumb',
          name: 'Breadcrumbs da página de Igrejas',
          description: 'Caminho de navegação para a página de Igrejas locais.',
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
              name: 'Igrejas',
              item: 'https://www.igrejadecristo.net.br/igrejas',
            },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
