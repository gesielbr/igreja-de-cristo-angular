import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-side-title',
  imports: [],
  templateUrl: './section-side-title.html',
  styleUrl: './section-side-title.css',
})
export class SectionSideTitle {
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

  // Propriedades de layout
  invertColumns = input<boolean>(false);
  leftColumnClass = input<string>('col-lg-6');
  rightColumnClass = input<string>('col-lg-6');
}

/**
 * Componente SideTitle
 *
 * @description
 * Componente que exibe um título com descrição em uma coluna e conteúdo projetado na outra,
 * com suporte para inversão de colunas e customização de tamanhos usando Bootstrap Grid.
 *
 * @example
 * Uso básico:
 * ```
 * <app-side-title
 *   sectionId="declaracao-fe"
 *   labelledBy="declaracao-fe"
 *   headerId="declaracao-fe"
 *   title="Nossa declaração de fé"
 *   kicker="No que cremos"
 *   description="Cremos nas verdades centrais da fé cristã..."
 *   subDescription='"Essas verdades nos unem como comunidade..."'
 * >
 *   <p>Conteúdo da coluna direita</p>
 * </app-side-title>
 * ```
 *
 * @example
 * Com inversão de colunas:
 * ```
 * <app-side-title
 *   [invertColumns]="true"
 *   sectionId="declaracao-fe"
 *   labelledBy="declaracao-fe"
 *   headerId="declaracao-fe"
 *   title="Nossa declaração de fé"
 * >
 *   <p>Este conteúdo aparecerá na esquerda</p>
 * </app-side-title>
 * ```
 *
 * @example
 * Com colunas customizadas (7/5):
 * ```
 * <app-side-title
 *   sectionId="declaracao-fe"
 *   labelledBy="declaracao-fe"
 *   headerId="declaracao-fe"
 *   title="Nossa declaração de fé"
 *   leftColumnClass="col-12 col-lg-7"
 *   rightColumnClass="col-12 col-lg-5"
 * >
 *   <p>Conteúdo da direita</p>
 * </app-side-title>
 * ```
 */
