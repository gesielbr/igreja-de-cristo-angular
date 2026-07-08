import { Component, input } from '@angular/core';
import { HeroSlideModel } from '../../models/hero-slide.model';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly slides = input.required<HeroSlideModel[]>();
}
