import { Component, input, signal, viewChild } from '@angular/core';
import { Lightbox } from '../lightbox/lightbox';

export interface AlbumPhoto {
  src: string;
  alt: string;
  caption: string;
  title: string;
}

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [Lightbox],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {
  readonly kicker = input('');
  readonly title = input('');
  readonly description = input('');
  readonly photos = input<AlbumPhoto[]>([]);

  readonly selectedPhotoIndex = signal(0);
  readonly lightbox = viewChild(Lightbox);

  openLightbox(index: number): void {
    this.selectedPhotoIndex.set(index);
    this.lightbox()?.open();
  }
}
