import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IgrejaLocal } from '../../shared/models/churh-footer-model';

// 🔥 DEFINIÇÃO DA INTERFACE AQUI

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // Signals para dados reativos
  private igrejasLocaisSignal = signal<IgrejaLocal[]>([
    {
      nome: 'Igreja de Cristo em Garopaba',
      tipo: 'interno',
      url: '/',
    },
    {
      nome: 'Igreja de Cristo em Curitiba',
      tipo: 'externo',
      url: 'https://www.igrejadecristo-curitiba.org.br/',
    },
  ]);

  // Computed para dados derivados
  readonly igrejasLocais = computed(() => this.igrejasLocaisSignal());
  readonly anoAtual = signal(new Date().getFullYear());

  // Configurações das redes sociais
  readonly socialLinks = signal([
    {
      nome: 'Instagram',
      url: 'https://www.instagram.com/igrejadecristogaropabasc/',
      icone: 'bi-instagram',
    },
    {
      nome: 'Facebook',
      url: 'https://www.facebook.com/IgrejadeCristoCuritibaCentro',
      icone: 'bi-facebook',
    },
    {
      nome: 'YouTube',
      url: 'https://www.youtube.com/@IgrejadeCristoCuritiba',
      icone: 'bi-youtube',
    },
    {
      nome: 'E-mail',
      url: 'mailto:gesiel.br@gmail.com',
      icone: 'bi-envelope',
    },
    {
      nome: 'WhatsApp',
      url: 'https://wa.me/5553981493086',
      icone: 'bi-whatsapp',
    },
  ]);

  // Método para adicionar novas igrejas (quando vierem do banco)
  adicionarIgrejaLocal(nome: string, tipo: 'interno' | 'externo', endereco: string) {
    this.igrejasLocaisSignal.update((current) => [...current, { nome, tipo, url: endereco }]);
  }
}
