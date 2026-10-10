import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { AccordionEstado } from '../../shared/components/accordion-estado/accordion-estado';

import { IgrejasService } from '../../shared/services/igrejas.service';
import { Church } from '../../shared/models/church.model';
import { Contact } from '../../shared/models/contact-model';

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
  private readonly igrejasService = inject(IgrejasService);
  readonly contatos = signal<Contact[]>([]);

  readonly pageConfig = {
    currentPage: 'Igrejas locais',
    subtitle: 'Localidades',
    title: 'Igrejas de Cristo no Brasil',
    description:
      'Encontre a Igreja de Cristo, conheça as igrejas, informações de cultos, estudos bíblicos, endereço e contato.',
  };

  // Igrejas carregadas pela API
  igrejas: Church[] = [];

  estados = signal<
    {
      nome: string;
      uf: string;
      igrejas: Church[];
      aberto: boolean;
    }[]
  >([]);

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.setupSEO();
    this.loadIgrejas();

    this.igrejasService.getContatos().subscribe({
      next: (contatos) => {
        this.contatos.set(contatos);
        console.log('Contatos recebidos:', contatos.length, contatos);
      },
      error: (erro) => {
        console.error('Erro ao buscar contatos:', erro);
      },
    });
  }

  /**
   * Carrega as igrejas através da API
   */
  private loadIgrejas(): void {
    this.igrejasService.getIgrejas().subscribe({
      next: (igrejas) => {
        this.igrejas = igrejas;
        this.organizarPorEstado();

        this.addJsonLd();
      },
      error: (error) => {
        console.error('Erro ao carregar igrejas:', error);
      },
    });
  }

  buscarIgrejas(valor: string, event?: Event): void {
    event?.preventDefault();

    const termo = valor.trim();

    if (!termo) {
      this.loadIgrejas();
      return;
    }

    this.igrejasService.buscarIgrejas(termo).subscribe({
      next: (igrejas) => {
        this.igrejas = igrejas;
        this.organizarPorEstado();
      },
      error: (error) => {
        console.error('Erro ao buscar igrejas:', error);
      },
    });
  }

  private organizarPorEstado(): void {
    const estadosMap = new Map<string, Church[]>();

    this.igrejas.forEach((igreja) => {
      if (!estadosMap.has(igreja.uf)) {
        estadosMap.set(igreja.uf, []);
      }

      estadosMap.get(igreja.uf)!.push(igreja);
    });

    this.estados.set(
      Array.from(estadosMap.entries())
        .map(([uf, igrejas]) => ({
          nome: igrejas[0]?.estado || uf,
          uf,
          igrejas,
          aberto: false,
        }))
        .sort((a, b) => a.nome.localeCompare(b.nome)),
    );
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

    // Constrói o ItemList com as igrejas vindas da API
    const itemListElement = this.igrejas.map((igreja, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Church',
        name: igreja.nomeCongregacao,
        address: {
          '@type': 'PostalAddress',
          streetAddress: [igreja.enderecoLogradouro, igreja.numero, igreja.complemento]
            .filter(Boolean)
            .join(', '),
          addressLocality: igreja.cidade,
          addressRegion: igreja.uf,
          postalCode: igreja.cep || undefined,
          addressCountry: igreja.pais || 'BR',
        },
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
