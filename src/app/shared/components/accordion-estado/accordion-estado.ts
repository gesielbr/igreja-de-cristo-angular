import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Church } from '../../models/church.model';
import { ChurchCard } from '../church-card/church-card';
import { Contact } from '../../models/contact-model';

@Component({
  selector: 'app-accordion-estado',
  standalone: true,
  imports: [CommonModule, ChurchCard],
  templateUrl: './accordion-estado.html',
  styleUrl: './accordion-estado.css',
})
export class AccordionEstado {
  readonly estado = input.required<string>();
  readonly igrejas = input.required<Church[]>();
  readonly contatos = input.required<Contact[]>();
  readonly aberto = input<boolean>(false);
  readonly id = input<string>('');

  readonly toggle = output<void>();

  onToggle(): void {
    this.toggle.emit();
  }

  contatosDaIgreja(igrejaId: number): Contact[] {
    return this.contatos().filter((contato) => contato.congregacaoId === igrejaId);
  }
}
