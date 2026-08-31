import { Component, input, viewChild } from '@angular/core';

import { AlbumPhoto } from '../../models/album-photo';
import { Lightbox } from '../lightbox/lightbox';

@Component({
  selector: 'app-gallery-feature-left',
  imports: [Lightbox],
  templateUrl: './gallery-feature-left.html',
  styleUrl: './gallery-feature-left.css',
})
export class GalleryFeatureLeft {
  photos = input.required<AlbumPhoto[]>();

  readonly lightbox = viewChild(Lightbox);

  openLightbox(index: number): void {
    this.lightbox()?.open(index);
  }
}