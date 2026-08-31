import { Component, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Event } from '../../shared/models/event.model';

import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { EventCard } from '../../shared/components/event-card/event-card';
import { Schedule } from '../../shared/components/schedule/schedule';

@Component({
  selector: 'app-eventos',
  imports: [PageLayout, SectionContainer, ContentHeroComponent, EventCard, Schedule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos implements OnInit {
  /**
   * Programação recorrente atualmente cadastrada.
   *
   * A página /eventos representa a agenda nacional da
   * Igreja de Cristo no Brasil, mas os primeiros eventos
   * cadastrados nesta fase são da congregação de Garopaba.
   *
   * Futuramente outras congregações poderão ser adicionadas
   * sem alterar a estrutura principal da página.
   */
  events = signal<Event[]>([
    {
      id: 'culto-celebracao-garopaba',
      day: 'DOM',
      time: '9h30',
      frequency: 'Todos os domingos',
      title: 'Culto de Celebração',
      address: 'Rua Pinguirito, 41 - Garopaba - SC',
      buttonText: 'Planejar minha visita',
      buttonLink: '/contato',
    },
    {
      id: 'noite-de-estudos-garopaba',
      day: 'QUA',
      time: '19h',
      frequency: 'Todas as quartas-feiras',
      title: 'Noite de Estudos',
      address: 'Rua Pinguirito, 41 - Garopaba - SC',
      buttonText: 'Saber mais',
      buttonLink: '/contato',
    },
    {
      id: 'culto-jovem-garopaba',
      day: 'SÁB',
      time: '19h30',
      frequency: 'Aos sábados',
      title: 'Culto Jovem',
      address: 'Rua Pinguirito, 41 - Garopaba - SC',
      buttonText: 'Participar',
      buttonLink: '/contato',
    },
    {
      id: 'escola-dominical-garopaba',
      day: 'DOM',
      time: '8h',
      frequency: 'Todos os domingos',
      title: 'Escola Dominical',
      address: 'Rua Pinguirito, 41 - Garopaba - SC',
      buttonText: 'Conhecer',
      buttonLink: '/contato',
    },
  ]);

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  /**
   * Configura os metadados SEO da página de eventos.
   */
  private setupSEO(): void {
    // ============================================
    // TÍTULO DA PÁGINA
    // ============================================

    this.title.setTitle('Eventos da Igreja de Cristo no Brasil | Cultos, Congressos e Encontros');

    // ============================================
    // META DESCRIPTION
    // ============================================

    this.meta.updateTag({
      name: 'description',
      content:
        'Confira a programação e os eventos da Igreja de Cristo no Brasil, incluindo cultos, estudos bíblicos, congressos, conferências e encontros nacionais e regionais realizados por congregações em diferentes cidades.',
    });

    // ============================================
    // KEYWORDS
    // ============================================

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Igreja de Cristo no Brasil, eventos Igreja de Cristo, eventos da Igreja de Cristo, cultos Igreja de Cristo, programação Igreja de Cristo, culto Igreja de Cristo, estudos bíblicos, congressos cristãos, conferências cristãs, encontros nacionais, encontros regionais, eventos cristãos no Brasil, igrejas de Cristo no Brasil, agenda Igreja de Cristo',
    });

    // ============================================
    // ROBOTS
    // ============================================

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large',
    });

    this.meta.updateTag({
      name: 'googlebot',
      content: 'index, follow',
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
      content: 'Eventos da Igreja de Cristo no Brasil | Cultos, Congressos e Encontros',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Encontre cultos, estudos bíblicos, congressos, conferências e encontros da Igreja de Cristo em diferentes cidades e regiões do Brasil.',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.igrejadecristo.net.br/eventos',
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
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image-eventos.jpg',
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
      content:
        'Eventos da Igreja de Cristo no Brasil - Cultos, congressos, conferências e encontros',
    });

    // ============================================
    // TWITTER / X
    // ============================================

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Eventos da Igreja de Cristo no Brasil | Cultos, Congressos e Encontros',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Confira cultos, estudos bíblicos, congressos, conferências e encontros da Igreja de Cristo em diferentes regiões do Brasil.',
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image-eventos.jpg',
    });

    this.meta.updateTag({
      name: 'twitter:site',
      content: '@igrejadecristo',
    });

    // ============================================
    // TEMA
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
   * Adiciona dados estruturados JSON-LD específicos
   * para a página nacional de eventos.
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

    const oldScripts = document.querySelectorAll('script[data-page-jsonld="eventos"]');

    oldScripts.forEach((script) => script.remove());

    // ============================================
    // JSON-LD
    // ============================================

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        // ==========================================
        // ORGANIZAÇÃO
        // ==========================================

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
            'Igreja de Cristo no Brasil - Comunidades cristãs locais comprometidas com Jesus Cristo, o Evangelho, a Bíblia, a comunhão e a vida cristã.',
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
          '@id': 'https://www.igrejadecristo.net.br/#website',
          name: 'Igreja de Cristo',
          url: 'https://www.igrejadecristo.net.br/',
          publisher: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          inLanguage: 'pt-BR',
        },

        // ==========================================
        // WEBPAGE
        // ==========================================

        {
          '@type': 'WebPage',
          '@id': 'https://www.igrejadecristo.net.br/eventos#webpage',
          name: 'Eventos da Igreja de Cristo no Brasil | Cultos, Congressos e Encontros',
          description:
            'Agenda de eventos da Igreja de Cristo no Brasil com cultos, estudos bíblicos, congressos, conferências e encontros nacionais e regionais realizados por congregações em diferentes cidades brasileiras.',
          url: 'https://www.igrejadecristo.net.br/eventos',
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': 'https://www.igrejadecristo.net.br/#website',
          },
          about: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.igrejadecristo.net.br/eventos#breadcrumb',
          },
        },

        // ==========================================
        // BREADCRUMB
        // ==========================================

        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.igrejadecristo.net.br/eventos#breadcrumb',
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
              name: 'Eventos',
              item: 'https://www.igrejadecristo.net.br/eventos',
            },
          ],
        },

        // ==========================================
        // EVENTOS RECORRENTES
        // ==========================================

        ...this.events().map((event) => ({
          '@type': 'Event',
          '@id': `https://www.igrejadecristo.net.br/eventos#${event.id}`,
          name: event.title,
          description: `${event.title} da Igreja de Cristo em Garopaba. Programação recorrente realizada ${event.frequency.toLowerCase()}.`,
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          location: {
            '@type': 'Place',
            name: 'Igreja de Cristo em Garopaba',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rua Pinguirito, 41',
              addressLocality: 'Garopaba',
              addressRegion: 'SC',
              addressCountry: 'BR',
            },
          },
          organizer: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          isAccessibleForFree: true,
          inLanguage: 'pt-BR',
        })),
      ],
    };

    // ============================================
    // INSERE JSON-LD
    // ============================================

    const script = document.createElement('script');

    script.type = 'application/ld+json';
    script.setAttribute('data-page-jsonld', 'eventos');
    script.textContent = JSON.stringify(jsonLd);

    document.head.appendChild(script);
  }
}
