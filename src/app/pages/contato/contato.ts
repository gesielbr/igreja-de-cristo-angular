import { Component } from '@angular/core';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import {
  InstitutionalChannel,
  InstitutionalChannels,
} from '../../shared/components/institutional-channels/institutional-channels';
import { ChurchContactInfo as ChurchContactInfoModel } from '../../shared/models/church-contact-info';
import { ChurchContactInfo } from '../../shared/components/church-contact-info/church-contact-info';

@Component({
  selector: 'app-contato',
  imports: [
    PageLayout,
    ContentHeroComponent,
    SectionSideTitle,
    InstitutionalChannels,
    ChurchContactInfo,
  ],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  canaisTitle = 'Canais institucionais';

  canaisInstitucionais: InstitutionalChannel[] = [
    {
      icon: 'bi-globe2',
      title: 'Site',
      value: 'igrejadecristo.net.br/garopaba',
      url: 'https://www.igrejadecristo.net.br/garopaba/',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Visitar site da igreja',
    },
    {
      icon: 'bi-whatsapp',
      title: 'WhatsApp',
      value: '(53) 98149-3086',
      url: 'https://wa.me/5553981493086',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Enviar mensagem no WhatsApp',
    },
    {
      icon: 'bi-envelope',
      title: 'E-mail',
      value: 'gesiel.br@gmail.com',
      url: 'mailto:gesiel.br@gmail.com',
      ariaLabel: 'Enviar e-mail',
    },
    {
      icon: 'bi-facebook',
      title: 'Facebook',
      value: '/IgrejadeCristoCuritibaCentro',
      url: 'https://www.facebook.com/IgrejadeCristoCuritibaCentro',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Visitar página do Facebook',
    },
    {
      icon: 'bi-instagram',
      title: 'Instagram',
      value: '@igrejadecristogaropabasc',
      url: 'https://www.instagram.com/igrejadecristogaropabasc/',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Visitar perfil do Instagram',
    },
  ];

  contatos: ChurchContactInfoModel[] = [
    {
      id: 'address',
      icon: 'bi bi-geo-alt-fill text-gold',
      label: 'Endereço',
      value: 'Rua Pinguirito, 41 · Pinguirito, Garopaba/SC',
    },
    {
      id: 'phone',
      icon: 'bi bi-telephone-fill text-gold',
      label: 'Telefone',
      value: '(53) 98149-3086',
      href: 'tel:+5553981493086',
    },
    {
      id: 'email',
      icon: 'bi bi-envelope-fill text-gold',
      label: 'E-mail',
      value: 'gesiel.br@gmail.com',
      href: 'mailto:gesiel.br@gmail.com',
    },
    {
      id: 'schedule',
      icon: 'bi bi-clock-fill text-gold',
      label: 'Horários',
      value: 'Domingo · 9h30 · Quarta-feira · 19h',
    },
  ];
}
