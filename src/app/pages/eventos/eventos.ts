import { Component, OnInit, inject, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { Event } from '../../shared/models/event.model';

import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { EventCard } from '../../shared/components/event-card/event-card';
import { Schedule } from '../../shared/components/schedule/schedule';

import { SeoService } from '../../shared/services/seo.service';

const SITE_URL = 'https://www.igrejadecristo.net.br';
const PAGE_URL = `${SITE_URL}/eventos`;

const PAGE_TITLE = 'Eventos da Igreja de Cristo no Brasil | Cultos, Congressos e Encontros';

const PAGE_DESCRIPTION =
  'Confira a programação e os eventos da Igreja de Cristo no Brasil, incluindo cultos, estudos bíblicos, congressos, conferências e encontros nacionais e regionais realizados por congregações em diferentes cidades.';

const PAGE_IMAGE = `${SITE_URL}/assets/img/og-image-eventos.jpg`;
const JSON_LD_ID = 'json-ld-eventos';

const KEYWORDS =
  'Igreja de Cristo no Brasil, eventos Igreja de Cristo, eventos da Igreja de Cristo, cultos Igreja de Cristo, programação Igreja de Cristo, culto Igreja de Cristo, estudos bíblicos, congressos cristãos, conferências cristãs, encontros nacionais, encontros regionais, eventos cristãos no Brasil, igrejas de Cristo no Brasil, agenda Igreja de Cristo';

const OG_DESCRIPTION =
  'Encontre cultos, estudos bíblicos, congressos, conferências e encontros da Igreja de Cristo em diferentes cidades e regiões do Brasil.';

const TWITTER_DESCRIPTION =
  'Confira cultos, estudos bíblicos, congressos, conferências e encontros da Igreja de Cristo em diferentes regiões do Brasil.';

const IMAGE_ALT =
  'Eventos da Igreja de Cristo no Brasil - Cultos, congressos, conferências e encontros';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [PageLayout, SectionContainer, ContentHeroComponent, EventCard, Schedule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly meta = inject(Meta);

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

    /* 
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
    */
  ]);

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  /**
   * Configura os metadados SEO usando o SeoService.
   * Os metadados sociais específicos são preservados abaixo
   * porque possuem descrições diferentes da descrição principal.
   */

  private setupSEO(): void {
    this.seo.update({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      path: '/eventos',
      image: PAGE_IMAGE,
      imageAlt: IMAGE_ALT,
      keywords: KEYWORDS,
      twitterSite: '@igrejadecristo',
    });

    // Define as entidades globais compartilhadas pelo site.
    this.seo.setGlobalJsonLd();

    /*
     * Metadados complementares preservados da implementação anterior.
     * O SeoService continua responsável pelos metadados principais,
     * pelo canonical, robots, Open Graph e Twitter Cards.
     */
    this.meta.updateTag({
      property: 'og:description',
      content: OG_DESCRIPTION,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: TWITTER_DESCRIPTION,
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
      name: 'msapplication-TileColor',
      content: '#163b67',
    });
  }

  /**
   * Converte o dia da programação para o vocabulário Schema.org.
   */
  private obterDiaSchema(dia: string): string | undefined {
    const dias: Record<string, string> = {
      DOM: 'https://schema.org/Sunday',
      SEG: 'https://schema.org/Monday',
      TER: 'https://schema.org/Tuesday',
      QUA: 'https://schema.org/Wednesday',
      QUI: 'https://schema.org/Thursday',
      SEX: 'https://schema.org/Friday',
      SÁB: 'https://schema.org/Saturday',
      SAB: 'https://schema.org/Saturday',
    };

    return dias[dia.toUpperCase()];
  }

  /**
   * Converte horários como 9h30 e 19h para o formato 09:30 e 19:00.
   */
  private formatarHoraSchema(hora: string): string {
    const resultado = hora.match(/^(\d{1,2})h(?:(\d{2}))?$/i);

    if (!resultado) {
      return hora;
    }

    const horas = resultado[1].padStart(2, '0');
    const minutos = resultado[2] ?? '00';

    return `${horas}:${minutos}`;
  }

  /**
   * JSON-LD específico da página nacional de eventos.
   *
   * Organization e WebSite são globais e já são definidos
   * na estrutura geral do site. Aqui apenas os referenciamos
   * por seus @id, evitando duplicar essas entidades.
   */
  private addJsonLd(): void {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${PAGE_URL}#webpage`,
          name: PAGE_TITLE,
          description:
            'Agenda de eventos da Igreja de Cristo no Brasil com cultos, estudos bíblicos, congressos, conferências e encontros nacionais e regionais realizados por congregações em diferentes cidades brasileiras.',
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
            '@id': `${PAGE_URL}#lista-eventos`,
          },
        },
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
              name: 'Eventos',
              item: PAGE_URL,
            },
          ],
        },
        {
          '@type': 'ItemList',
          '@id': `${PAGE_URL}#lista-eventos`,
          name: 'Programação de cultos e eventos da Igreja de Cristo',
          numberOfItems: this.events().length,
          itemListElement: this.events().map((event, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Event',
              '@id': `${PAGE_URL}#${event.id}`,
              name: event.title,
              description: `${event.title} da Igreja de Cristo em Garopaba. Programação recorrente realizada ${event.frequency.toLowerCase()}.`,
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              eventSchedule: {
                '@type': 'Schedule',
                repeatFrequency: 'P1W',
                byDay: this.obterDiaSchema(event.day),
                startTime: this.formatarHoraSchema(event.time),
                scheduleTimezone: 'America/Sao_Paulo',
              },
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
                '@id': `${SITE_URL}/#organization`,
              },
              isAccessibleForFree: true,
              inLanguage: 'pt-BR',
            },
          })),
        },
      ],
    };

    this.seo.setJsonLd(jsonLd, JSON_LD_ID);
  }
}
