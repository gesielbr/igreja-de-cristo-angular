import { Component, input, viewChild } from '@angular/core';

import { AlbumPhoto } from '../../models/album-photo';
import { Lightbox } from '../lightbox/lightbox';

@Component({
  selector: 'app-gallery-feature-right',
  imports: [Lightbox],
  templateUrl: './gallery-feature-right.html',
  styleUrl: './gallery-feature-right.css',
})
export class GalleryFeatureRight {
  readonly photos = input<AlbumPhoto[]>([]);

  readonly lightbox = viewChild(Lightbox);

  openLightbox(index: number): void {
    this.lightbox()?.open(index);
  }
}
