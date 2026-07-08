import {
  Component,
  input,
  ContentChildren,
  TemplateRef,
  AfterContentInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.html',
  styleUrl: './section-container.css',
})
export class SectionContainer {
  // Propriedades de configuração
  bgClass = input<string>('bg-white'); // bg-white ou bg-soft
  sectionId = input<string>('');
  labelledBy = input<string>('');

  // Propriedades do header
  kicker = input<string>('');
  title = input<string>('');
  description = input<string>('');
  headerId = input<string>('');
  headerMaxWidth = input<string>('46rem'); // 46rem ou 48rem
}
