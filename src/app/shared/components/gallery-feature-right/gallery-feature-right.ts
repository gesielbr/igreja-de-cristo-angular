import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gallery-feature-right',
  imports: [],
  templateUrl: './gallery-feature-right.html',
  styleUrl: './gallery-feature-right.css',
})
export class GalleryFeatureRight {
  photos = input<{ src: string; alt: string }[]>([]);
}
