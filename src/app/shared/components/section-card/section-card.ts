import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.html',
  styleUrl: './section-card.css',
})
export class SectionCard {
  icon = input<string>('');
  title = input<string>('');
  description = input<string>('');
  bgClass = input<string>('bg-white');
}
