import { Component, input } from '@angular/core';

import { ChurchContactInfo as ChurchContactInfoModel } from '../../models/church-contact-info';

@Component({
  selector: 'app-church-contact-info',
  imports: [],
  templateUrl: './church-contact-info.html',
  styleUrl: './church-contact-info.css',
})
export class ChurchContactInfo {
  readonly title = input('Informações de contato');

  readonly contacts = input<ChurchContactInfoModel[]>([]);
}
