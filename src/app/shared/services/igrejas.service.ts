import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

import { Church } from '../models/church.model';
import { Contact } from '../models/contact-model';

@Injectable({
  providedIn: 'root',
})
/* export class IgrejasService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://igreja-cristo-net-api.vercel.app/api/igrejas';

  private readonly igrejas$ = this.http.get<Church[]>(this.apiUrl).pipe(shareReplay(1));

  getIgrejas(): Observable<Church[]> {
    return this.igrejas$;
  }
} */
export class IgrejasService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://igreja-cristo-net-api.vercel.app/api/igrejas';

  private readonly igrejas$ = this.http.get<Church[]>(this.apiUrl).pipe(shareReplay(1));

  getIgrejas(): Observable<Church[]> {
    return this.igrejas$;
  }

  buscarIgrejas(termo: string): Observable<Church[]> {
    return this.http.get<Church[]>(`${this.apiUrl}/busca?q=${encodeURIComponent(termo)}`);
  }

  getContatos(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contatos`);
  }
}
