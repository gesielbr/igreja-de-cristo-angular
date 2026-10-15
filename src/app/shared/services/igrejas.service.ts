import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';

import { Church } from '../models/church.model';
import { Contact } from '../models/contact-model';

@Injectable({
  providedIn: 'root',
})
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

  getIgrejasFixas(): Observable<Church[]> {
    const igrejasFixas = [
      'Igreja de Cristo em Garopaba',
      'Igreja de Cristo da Lucas',
      'Igreja de Cristo nos Novos Estados',
    ];

    return new Observable<Church[]>((subscriber) => {
      this.getIgrejas().subscribe({
        next: (igrejas) => {
          const selecionadas = igrejas.filter((igreja) =>
            igrejasFixas.includes(igreja.nomeCongregacao),
          );

          subscriber.next(selecionadas);
          subscriber.complete();
        },
        error: (erro) => subscriber.error(erro),
      });
    });
  }

  getIgrejasAleatorias(): Observable<Church[]> {
    const nomesFixos = [
      'Igreja de Cristo em Garopaba',
      'Igreja de Cristo da Lucas',
      'Igreja de Cristo nos Novos Estados',
    ];

    return this.getIgrejas().pipe(
      map((igrejas) => {
        const disponiveis = igrejas.filter(
          (igreja) => !nomesFixos.includes(igreja.nomeCongregacao),
        );

        // Embaralha as igrejas disponíveis.
        const embaralhadas = [...disponiveis].sort(() => Math.random() - 0.5);

        // Retorna somente três igrejas.
        return embaralhadas.slice(0, 3);
      }),
    );
  }
}
