import { Component, input, signal } from '@angular/core';

import { Church } from '../../models/church.model';

@Component({
  selector: 'app-church-card',
  standalone: true,
  imports: [],
  templateUrl: './church-card.html',
  styleUrl: './church-card.css',
})
export class ChurchCard {
  // Igreja recebida da API.
  // É opcional porque a Home ainda utiliza o card com dados estáticos.
  readonly church = input<Church | null>(null);

  // Dados estáticos usados pela Home
  churchName = signal('Igreja de Cristo em Florianópolis');

  churchDescription = signal('Comunidade da Igreja de Cristo em Florianópolis, Santa Catarina.');

  churchAddress = signal(
    'Rua Prefeito Dib Cherem, 2897 - Capoeiras, Florianópolis - SC, 88090-001',
  );

  // Links atuais do card
  churchLink = signal('https://linktr.ee/cebfloripa');

  whatsappLink = signal('https://wa.me/5548992222897');

  emailLink = signal('mailto:cebfloripa@gmail.com');

  instagramLink = signal('https://www.instagram.com/cebfloripa/');

  facebookLink = signal('https://www.facebook.com/igrejadecristofloripa/');

  mapsLink = signal(
    'https://www.google.com/maps/search/?api=1&query=Rua%20Prefeito%20Dib%20Cherem%2C%202897%20-%20Capoeiras%2C%20Florian%C3%B3polis%20-%20SC%2C%2088090-001',
  );

  get nome(): string {
    return this.church()?.nomeCongregacao || this.churchName();
  }

  get descricao(): string {
    return this.church()?.observacoes || this.churchDescription();
  }

  get endereco(): string {
    const igreja = this.church();

    if (!igreja) {
      return this.churchAddress();
    }

    return [
      igreja.enderecoLogradouro,
      igreja.numero,
      igreja.complemento,
      igreja.bairro,
      igreja.cidade,
      igreja.uf,
      igreja.cep,
    ]
      .filter(Boolean)
      .join(', ');
  }
}
