import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { AccordionEstado } from '../../shared/components/accordion-estado/accordion-estado';

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
    AccordionEstado,
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

  // Dados das igrejas por estado
  readonly igrejasData = {
    santaCatarina: {
      estado: 'Santa Catarina',
      aberto: true,
      igrejas: [
        {
          nome: 'Igreja de Cristo em Florianópolis',
          descricao: 'Comunidade da Igreja de Cristo em Florianópolis, Santa Catarina.',
          endereco: 'Rua Prefeito Dib Cherem, 2897 - Capoeiras, Florianópolis - SC, 88090-001',
          link: 'https://linktr.ee/cebfloripa',
          linkExterno: true,
          whatsapp: '5548992222897',
          instagram: 'cebfloripa',
          facebook: 'igrejadecristofloripa',
          site: 'https://linktr.ee/cebfloripa',
          email: 'cebfloripa@gmail.com',
          maps: 'Rua Prefeito Dib Cherem, 2897 - Capoeiras, Florianópolis - SC, 88090-001',
        },
        {
          nome: 'Igreja de Cristo em Garopaba',
          descricao: 'Comunidade da Igreja de Cristo em Garopaba, Santa Catarina.',
          endereco: 'Rua Pinguirito, 41 - Pinguirito, Garopaba - SC, 88495-000',
          link: 'garopaba/',
          linkExterno: false,
          whatsapp: '5551997032022',
          instagram: 'igrejadecristogaropabasc',
          facebook: '',
          site: '',
          email: '',
          maps: 'Rua Pinguirito, 41 - Pinguirito, Garopaba - SC, 88495-000',
        },
      ],
    },
  };
}
