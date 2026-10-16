import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';

import { Church } from '../models/church.model';
import { Contact } from '../models/contact-model';

/** Igrejas que sempre aparecem na home, na ordem em que forem encontradas. */
const NOMES_FIXOS = [
  'Igreja de Cristo em Garopaba',
  'Igreja de Cristo da Lucas',
  'Igreja de Cristo nos Novos Estados',
];

const QUANTIDADE_ROTATIVAS = 3;
const MS_POR_DIA = 86_400_000;

@Injectable({
  providedIn: 'root',
})
export class IgrejasService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://igreja-cristo-net-api.vercel.app/api/igrejas';

  // shareReplay(1): a API é chamada uma vez e todos os usuários do service reutilizam a resposta
  private readonly igrejas$ = this.http.get<Church[]>(this.apiUrl).pipe(shareReplay(1));
  private readonly contatos$ = this.http
    .get<Contact[]>(`${this.apiUrl}/contatos`)
    .pipe(shareReplay(1));

  getIgrejas(): Observable<Church[]> {
    return this.igrejas$;
  }

  buscarIgrejas(termo: string): Observable<Church[]> {
    return this.http.get<Church[]>(`${this.apiUrl}/busca?q=${encodeURIComponent(termo)}`);
  }

  getContatos(): Observable<Contact[]> {
    return this.contatos$;
  }

  getIgrejasFixas(): Observable<Church[]> {
    return this.getIgrejas().pipe(
      map((igrejas) => igrejas.filter((igreja) => NOMES_FIXOS.includes(igreja.nomeCongregacao))),
    );
  }

  /**
   * Escolhe 3 igrejas que rodam a cada dia.
   * Não usa Math.random(): servidor (SSR) e navegador chegam à mesma lista,
   * então não há "pisca-pisca" na hidratação e o Googlebot vê um conteúdo estável.
   */
  getIgrejasAleatorias(): Observable<Church[]> {
    return this.getIgrejas().pipe(
      map((igrejas) => {
        const disponiveis = igrejas
          .filter((igreja) => !NOMES_FIXOS.includes(igreja.nomeCongregacao))
          .sort((a, b) => a.id - b.id);

        if (disponiveis.length <= QUANTIDADE_ROTATIVAS) {
          return disponiveis;
        }

        const dia = Math.floor(Date.now() / MS_POR_DIA);
        const inicio = (dia * QUANTIDADE_ROTATIVAS) % disponiveis.length;

        return Array.from(
          { length: QUANTIDADE_ROTATIVAS },
          (_, i) => disponiveis[(inicio + i) % disponiveis.length],
        );
      }),
    );
  }
}
