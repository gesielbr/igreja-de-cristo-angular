import { Component, signal, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { TrackingService } from './shared/tracking/tracking.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('igreja-de-cristo-angular');

  constructor(private trackingService: TrackingService) {
    afterNextRender(() => {
      this.trackingService.init();
      this.trackingService.initPageViews();
    });
  }
}
