import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaAsideSection } from '../../models/cta-aside-section.model';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-cta-aside',
  standalone: true,
  templateUrl: './cta-aside.html',
  styleUrl: './cta-aside.css',
  imports: [RouterLink, NgTemplateOutlet],
  // Aqui está a mágica do Angular moderno com Signals:
  host: {
    '[attr.data-tracking-section]': 'trackingSectionName()',
  },
})
export class CtaAsideComponent {
  sections = input.required<CtaAsideSection[]>();
  extraClass = input('pt-3');
  variant = input<'desktop' | 'mobile'>('desktop');

  // Input opcional caso queira sobrescrever, mas por padrão é gerado dinamicamente
  customTrackingSection = input<string | null>(null, { alias: 'dataTrackingSection' });

  /**
   * Signal computado que define automaticamente o nome do tracking
   * com base na variante ("menu-desktop-dinamico" ou "menu-mobile-dinamico")
   * ou usa o valor customizado se fornecido.
   */
  trackingSectionName = computed(() => {
    if (this.customTrackingSection()) {
      return this.customTrackingSection();
    }
    return `menu-${this.variant()}-dinamico`;
  });

  tituloId(section: CtaAsideSection): string {
    return `${this.variant()}-${section.id}-titulo`;
  }
}
