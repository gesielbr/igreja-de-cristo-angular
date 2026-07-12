import { Component } from '@angular/core';
import { PageLayout } from '../../../shared/components/page-layout/page-layout';
import { SectionContainer } from '../../../shared/components/section-container/section-container';
import { SectionSideTitle } from '../../../shared/components/side-title/section-side-title';
import { SectionCard } from '../../../shared/components/section-card/section-card';
import { Hero } from '../../../shared/components/hero/hero';
import { ContentHeroComponent } from '../../../shared/components/content-hero/content-hero';
import { MissionCard } from '../../../shared/components/mission-card/mission-card';

@Component({
  selector: 'app-quem-somos',
  imports: [
    PageLayout,
    SectionContainer,
    SectionSideTitle,
    SectionCard,
    Hero,
    ContentHeroComponent,
    MissionCard,
  ],
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.css',
})
export class QuemSomos {
  // Dados do Hero
  heroSlides = [
    {
      title: 'Quem Somos',
      subtitle: 'Conheça nossa história, fé e missão',
      description:
        'A Igreja de Cristo é uma comunidade cristã comprometida com Jesus Cristo, o Evangelho e a Bíblia.',
      image: '/assets/img/quem-somos/hero.webp',
      alt: 'Igreja de Cristo - Nossa história e missão',
      ctaText: 'Saiba mais',
      ctaLink: '#historia',
    },
  ];

  // Dados dos valores
  valores = [
    {
      icon: 'bi bi-book',
      title: 'Fundamentados na Bíblia',
      description: 'A Palavra de Deus é nossa única regra de fé e prática.',
    },
    {
      icon: 'bi bi-heart',
      title: 'Comunhão e Amor',
      description: 'Vivemos como irmãos, cuidando uns dos outros com amor genuíno.',
    },
    {
      icon: 'bi bi-megaphone',
      title: 'Anunciando o Evangelho',
      description: 'Levamos a mensagem de salvação a todos os povos.',
    },
    {
      icon: 'bi bi-people',
      title: 'Serviço ao Próximo',
      description: 'Expressamos nossa fé através de ações concretas de amor.',
    },
  ];
}
