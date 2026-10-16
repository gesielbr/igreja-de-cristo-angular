import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

@Injectable({
  providedIn: 'root',
})
export class IgrejasService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly apiUrl = 'https://igreja-cristo-net-api.vercel.app/api/igrejas';

  /** Mantém a seleção durante a navegação no navegador. */
  private igrejasSelecionadas: Church[] | null = null;

  // A API é chamada uma vez e a resposta é reutilizada pelo serviço.
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
   * Seleciona igrejas aleatórias no navegador e mantém
   * a seleção em memória durante a navegação.
   *
   * No SSR, retorna uma seleção determinística para
   * manter a estabilidade da renderização inicial.
   */
  getIgrejasAleatorias(): Observable<Church[]> {
    return this.getIgrejas().pipe(
      map((igrejas) => {
        const disponiveis = this.getIgrejasDisponiveis(igrejas);

        if (!isPlatformBrowser(this.platformId)) {
          return disponiveis.slice(0, QUANTIDADE_ROTATIVAS);
        }

        if (this.igrejasSelecionadas !== null) {
          return this.igrejasSelecionadas;
        }

        this.igrejasSelecionadas = this.sortearIgrejas(disponiveis);

        return this.igrejasSelecionadas;
      }),
    );
  }

  /**
   * Exclui as igrejas fixas e ordena as restantes por ID.
   */
  private getIgrejasDisponiveis(igrejas: Church[]): Church[] {
    return igrejas
      .filter((igreja) => !NOMES_FIXOS.includes(igreja.nomeCongregacao))
      .sort((a, b) => a.id - b.id);
  }

  /**
   * Sorteia até três igrejas sem repetição.
   */
  private sortearIgrejas(disponiveis: Church[]): Church[] {
    const embaralhadas = [...disponiveis];

    for (let i = embaralhadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [embaralhadas[i], embaralhadas[j]] = [embaralhadas[j], embaralhadas[i]];
    }

    return embaralhadas.slice(0, QUANTIDADE_ROTATIVAS);
  }
}
