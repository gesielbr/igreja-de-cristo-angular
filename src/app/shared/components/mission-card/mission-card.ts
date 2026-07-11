import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mission-card',
  standalone: true,
  imports: [],
  templateUrl: './mission-card.html',
  styleUrl: './mission-card.css',
})
export class MissionCard {
  icon = input<string>('');
  title = input<string>('');
  description = input<string>('');
}
