import { Component } from '@angular/core';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { AlbumCard, AlbumPhoto } from '../../shared/components/album-card/album-card';

@Component({
  selector: 'app-galeria',
  imports: [PageLayout, ContentHeroComponent, SectionContainer, AlbumCard],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {
  batismos: AlbumPhoto[] = [
    {
      src: '/assets/img/garopaba/batismo_1.jpg',
      alt: 'Batismo na água com celebração da comunidade',
      caption: 'Um momento de alegria e fé para toda a comunidade.',
      title: 'Batismos',
    },
    {
      src: '/assets/img/garopaba/batismo_2.jpg',
      alt: 'Abraços e celebração após batismo na água',
      caption: 'Gratidão por mais um irmão que decidiu seguir a Cristo.',
      title: 'Batismos',
    },
    {
      src: '/assets/img/garopaba/batismo_2.png',
      alt: 'Batismo na água com celebração da comunidade',
      caption: 'Gratidão por mais um irmão que decidiu seguir a Cristo.',
      title: 'Batismos',
    },
  ];
}
