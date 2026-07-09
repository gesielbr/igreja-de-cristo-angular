import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { ChurchCard } from '../../shared/components/church-card/church-card';
import { HOME_HERO } from '../../shared/configs/hero-slide-config';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    SectionContainer,
    SectionCard,
    ChurchCard, // <-- ADICIONADO AQUI
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroSlides = HOME_HERO;
}
