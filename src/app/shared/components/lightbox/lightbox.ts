import { Component, input, signal } from '@angular/core';
import { AlbumPhoto } from '../album-card/album-card';

@Component({
  selector: 'app-lightbox',
  imports: [],
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.css',
  host: {
    '(document:keydown)': 'handleKeyboard($event)',
  },
})
export class Lightbox {
  readonly photos = input<AlbumPhoto[]>([]);
  readonly currentIndex = input(0);

  readonly isOpen = signal(false);
  readonly activeIndex = signal(0);

  open(): void {
    this.activeIndex.set(this.currentIndex());
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  previous(): void {
    const total = this.photos().length;

    if (total === 0) {
      return;
    }

    this.activeIndex.update((index) => (index - 1 + total) % total);
  }

  next(): void {
    const total = this.photos().length;

    if (total === 0) {
      return;
    }

    this.activeIndex.update((index) => (index + 1) % total);
  }

  handleKeyboard(event: KeyboardEvent): void {
    if (!this.isOpen()) {
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.close();
        break;

      case 'ArrowLeft':
        event.preventDefault();
        this.previous();
        break;

      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;
    }
  }
}
