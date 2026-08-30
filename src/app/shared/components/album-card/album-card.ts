import { Component, input } from '@angular/core';

export interface AlbumPhoto {
  src: string;
  alt: string;
  caption: string;
  title: string;
}

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {
  readonly kicker = input('');
  readonly title = input('');
  readonly description = input('');
  readonly photos = input<AlbumPhoto[]>([]);
}
