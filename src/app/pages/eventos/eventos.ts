import { Component, signal } from '@angular/core';
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
export class Eventos {
  events = signal<Event[]>([
    {
      id: 'culto-celebracao',
      day: 'DOM',
      time: '9h30',
      frequency: 'Todos os domingos',
      title: 'Culto de Celebração',
      address: 'Rua Pinguirito, 41 - Garopaba - SC',
      buttonText: 'Planejar minha visita',
      buttonLink: '/contato',
    },
    {
      id: 'noite-de-estudos',
      day: 'QUA',
      time: '19h',
      frequency: 'Todas as quartas-feiras',
      title: 'Noite de Estudos',
      address: 'Rua Pinguirito, 41 - Garopaba - SC',
      buttonText: 'Saber mais',
      buttonLink: '/contato',
    },
    {
      id: 'culto-jovens',
      day: 'SÁB',
      time: '19h30',
      frequency: 'Aos sábados',
      title: 'Culto Jovem',
      address: 'Rua Pinguirito, 41 - Garopaba - SC',
      buttonText: 'Participar',
      buttonLink: '/contato',
    },
    {
      id: 'escola-dominical',
      day: 'DOM',
      time: '8h',
      frequency: 'Todos os domingos',
      title: 'Escola Dominical',
      address: 'Rua Pinguirito, 41 - Garopaba - SC',
      buttonText: 'Conhecer',
      buttonLink: '/contato',
    },
  ]);
}
