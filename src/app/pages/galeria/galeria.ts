import { Component } from '@angular/core';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { AlbumCard, AlbumPhoto } from '../../shared/components/album-card/album-card';
import { GalleryFeatureLeft } from '../../shared/components/gallery-feature-left/gallery-feature-left';
import { GalleryFeatureRight } from '../../shared/components/gallery-feature-right/gallery-feature-right';

@Component({
  selector: 'app-galeria',
  imports: [
    PageLayout,
    ContentHeroComponent,
    SectionContainer,
    AlbumCard,
    GalleryFeatureLeft,
    GalleryFeatureRight,
  ],
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
  estudoBiblico: AlbumPhoto[] = [
    {
      src: '/assets/img/garopaba/estudo_biblico_02.jpg',
      alt: 'Reunião de estudo bíblico com participação ativa da comunidade',
      caption: 'Servindo com alegria e dedicação.',
      title: 'Estudo da Palavra',
    },
    {
      src: '/assets/img/garopaba/estudo_biblico_03.png',
      alt: 'Mão segurando a Bíblia durante estudo bíblico em grupo',
      caption: 'Uma comunidade que estuda rigorosamente as Escrituras para crescer na fé.',
      title: 'Estudo da Palavra',
    },
    {
      src: '/assets/img/garopaba/estudo_biblico_01.jpg',
      alt: 'Pessoas reunidas em estudo bíblico e oração em ambiente acolhedor',
      caption: 'Congregação unida em estudo, oração e confraternização.',
      title: 'Estudo da Palavra',
    },
  ];
  galeriaDestaque = [
    {
      src: '/assets/img/garopaba/irmao_paulo_pregando.jpeg',
      alt: 'Irmão pregando a Palavra de Deus durante culto.',
    },
    {
      src: '/assets/img/garopaba/congregacao_01.jpg',
      alt: 'Irmãos e visitantes reunidos em adoração e estudos.',
    },
    {
      src: '/assets/img/garopaba/congregacao_02.jpg',
      alt: 'Pessoas reunidas após reunião.',
    },
    {
      src: '/assets/img/garopaba/evento_1.png',
      alt: 'Irmãos reunidos numa mesa em evento cristão.',
    },
  ];
  galeriaDestaqueRight = [
    {
      src: '/assets/img/garopaba/congregacao_06.jpg',
      alt: 'Pessoas em frente ao lindo muro com folhagens.',
    },
    {
      src: '/assets/img/garopaba/congregacao_05.jpeg',
      alt: 'Grupo da igreja reunido em comunhão e estudos.',
    },
    {
      src: '/assets/img/garopaba/caderno_de_pedido_de_oracao.jpg',
      alt: 'Irmão entregando um caderno de pedidos de oração para outro irmão da igreja.',
    },
  ];
}
