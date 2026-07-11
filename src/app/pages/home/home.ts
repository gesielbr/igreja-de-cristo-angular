import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { ChurchCard } from '../../shared/components/church-card/church-card';
import {
  InstitutionalChannel,
  InstitutionalChannels,
} from '../../shared/components/institutional-channels/institutional-channels';
import { HOME_HERO } from '../../shared/configs/hero-slide-config';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, SectionContainer, SectionCard, ChurchCard, InstitutionalChannels, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroSlides = HOME_HERO;

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
}
