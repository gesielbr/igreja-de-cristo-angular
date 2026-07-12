import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { SectionContainer } from '../../shared/components/section-container/section-container';

@Component({
  selector: 'app-igrejas',
  standalone: true,
  imports: [
    CommonModule,
    PageLayout,
    ContentHeroComponent,
    SectionSideTitle,
    SectionCard,
    SectionContainer,
  ],
  templateUrl: './igrejas.html',
  styleUrl: './igrejas.css',
})
export class Igrejas {
  // Dados estáticos para o componente
  readonly pageConfig = {
    currentPage: 'Igrejas locais',
    subtitle: 'Localidades',
    title: 'Igrejas de Cristo no Brasil',
    description:
      'Encontre comunidades locais da Igreja de Cristo, conheça páginas regionais, informações de cultos, estudos bíblicos, endereço e contato.',
  };
}
