import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { HOME_HERO } from '../../shared/configs/hero-slide-config';

@Component({
  selector: 'app-home',
  imports: [Hero, SectionHeader, SectionCard, SectionContainer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroSlides = HOME_HERO;
}
