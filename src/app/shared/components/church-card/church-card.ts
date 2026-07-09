import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-church-card',
  imports: [],
  templateUrl: './church-card.html',
  styleUrl: './church-card.css',
})
export class ChurchCard {
  // Dados da igreja com signals
  churchName = signal('Igreja de Cristo em Florianópolis');
  churchDescription = signal('Comunidade da Igreja de Cristo em Florianópolis, Santa Catarina.');
  churchAddress = signal(
    'Rua Prefeito Dib Cherem, 2897 - Capoeiras, Florianópolis - SC, 88090-001',
  );

  // Links com signals
  churchLink = signal('https://linktr.ee/cebfloripa');
  whatsappLink = signal('https://wa.me/5548992222897');
  emailLink = signal('mailto:cebfloripa@gmail.com');
  instagramLink = signal('https://www.instagram.com/cebfloripa/');
  facebookLink = signal('https://www.facebook.com/igrejadecristofloripa/');
  mapsLink = signal(
    'https://www.google.com/maps/search/?api=1&query=Rua%20Prefeito%20Dib%20Cherem%2C%202897%20-%20Capoeiras%2C%20Florian%C3%B3polis%20-%20SC%2C%2088090-001',
  );
}
