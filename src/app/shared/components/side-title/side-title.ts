import { Component, input } from '@angular/core';

@Component({
  selector: 'app-side-title',
  imports: [],
  templateUrl: './side-title.html',
  styleUrl: './side-title.css',
})
export class SideTitle {
  // Propriedades de configuração
  bgClass = input<string>('bg-white');
  sectionId = input<string>('');
  labelledBy = input<string>('');

  // Propriedades do header
  kicker = input<string>('');
  title = input<string>('');
  description = input<string>('');
  subDescription = input<string>('');
  headerId = input<string>('');

  // Nova propriedade para inverter colunas
  invertColumns = input<boolean>(false);
}
