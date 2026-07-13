import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Igreja {
  nome: string;
  descricao: string;
  endereco: string;
  link: string;
  linkExterno?: boolean;
  whatsapp: string;
  instagram?: string;
  facebook?: string;
  site?: string;
  email?: string;
  maps: string;
}

export interface EstadoIgrejas {
  estado: string;
  igrejas: Igreja[];
  aberto?: boolean;
}

@Component({
  selector: 'app-accordion-estado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-estado.html',
  styleUrl: './accordion-estado.css',
})
export class AccordionEstado {
  // Inputs
  readonly estado = input.required<string>();
  readonly igrejas = input.required<Igreja[]>();
  readonly aberto = input<boolean>(false);
  readonly id = input<string>('');

  // Outputs
  readonly toggle = output<void>();

  // Método para alternar o accordion
  onToggle(): void {
    this.toggle.emit();
  }
}
