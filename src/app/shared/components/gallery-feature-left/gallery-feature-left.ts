import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gallery-feature-left',
  imports: [],
  templateUrl: './gallery-feature-left.html',
  styleUrl: './gallery-feature-left.css',
})
export class GalleryFeatureLeft {
  photos = input.required<
    {
      src: string;
      alt: string;
    }[]
  >();
}
