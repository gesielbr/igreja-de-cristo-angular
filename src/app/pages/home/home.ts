import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { HOME_HERO } from '../../shared/configs/hero-slide-config';

@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroSlides = HOME_HERO;
}
