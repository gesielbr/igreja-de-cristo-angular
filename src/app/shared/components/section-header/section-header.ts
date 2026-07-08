import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeader {
  kicker = input<string>('');
  title = input<string>('');
  description = input<string>('');
  id = input<string>('');
}
