import { Component } from '@angular/core';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionContainer } from '../../shared/components/section-container/section-container';

@Component({
  selector: 'app-galeria',
  imports: [PageLayout, ContentHeroComponent, SectionContainer],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {}
