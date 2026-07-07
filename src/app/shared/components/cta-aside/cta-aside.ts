import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { CtaAsideSection } from '../../models/cta-aside-section.model';

@Component({
  selector: 'app-cta-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-aside.html',
  styleUrl: './cta-aside.css',
})
export class CtaAsideComponent {
  sections = input.required<CtaAsideSection[]>();
  extraClass = input('pt-3');
  variant = input<'desktop' | 'mobile'>('desktop');
}
