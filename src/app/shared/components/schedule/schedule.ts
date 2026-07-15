import { Component, signal } from '@angular/core';

interface ScheduleItem {
  day: string;
  meeting: string;
  time: string;
  location: string;
}

@Component({
  selector: 'app-schedule',
  imports: [],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class Schedule {
  // Signal com os dados da programação
  scheduleItems = signal<ScheduleItem[]>([
    {
      day: 'Domingo',
      meeting: 'Culto de Celebração',
      time: '9h30',
      location: 'Rua Pinguirito, 41 - Garopaba - SC',
    },
    {
      day: 'Quarta-feira',
      meeting: 'Noite de Estudos',
      time: '19h',
      location: 'Rua Pinguirito, 41 - Garopaba - SC',
    },
  ]);

  // Signal para o título (caption)
  caption = signal('Programação Semanal - Igreja de Cristo em Garopaba');

  // Signal para os cabeçalhos (colunas)
  columns = signal([
    { key: 'day', label: 'Dia' },
    { key: 'meeting', label: 'Encontro' },
    { key: 'time', label: 'Horário' },
    { key: 'location', label: 'Local' },
  ]);
}
