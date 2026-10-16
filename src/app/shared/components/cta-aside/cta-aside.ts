import { Component, input } from '@angular/core';

import { CtaAsideSection } from '../../models/cta-aside-section.model';

@Component({
  selector: 'app-cta-aside',
  standalone: true,
  templateUrl: './cta-aside.html',
  styleUrl: './cta-aside.css',
})
export class CtaAsideComponent {
  sections = input.required<CtaAsideSection[]>();
  extraClass = input('pt-3');
  variant = input<'desktop' | 'mobile'>('desktop');

  /**
   * Id único do título de cada bloco.
   * O componente é renderizado duas vezes na página (desktop e mobile), então o id
   * inclui a variante: "desktop-cta-home-igrejas-titulo" / "mobile-cta-home-igrejas-titulo".
   * É determinístico, então servidor (SSR) e navegador geram o mesmo valor.
   */
  tituloId(section: CtaAsideSection): string {
    return `${this.variant()}-${section.id}-titulo`;
  }
}
