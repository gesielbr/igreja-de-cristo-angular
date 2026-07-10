import { Component, Input, signal, computed } from '@angular/core';

export interface InstitutionalChannel {
  icon: string;
  title: string;
  value: string;
  url: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  ariaLabel?: string;
}

@Component({
  selector: 'app-institutional-channels',
  imports: [],
  templateUrl: './institutional-channels.html',
  styleUrl: './institutional-channels.css',
})
export class InstitutionalChannels {
  private _channels = signal<InstitutionalChannel[]>([]);
  private _title = signal<string>('Canais institucionais');

  @Input() set channels(value: InstitutionalChannel[]) {
    this._channels.set(value);
  }

  @Input() set title(value: string) {
    this._title.set(value);
  }

  get channels$() {
    return this._channels.asReadonly();
  }

  get title$() {
    return this._title.asReadonly();
  }
}
