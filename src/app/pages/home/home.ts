import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../shared/components/hero/hero';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { ChurchCard } from '../../shared/components/church-card/church-card';
import {
  InstitutionalChannel,
  InstitutionalChannels,
} from '../../shared/components/institutional-channels/institutional-channels';
import { HOME_HERO } from '../../shared/configs/hero-slide-config';
import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { IgrejasService } from '../../shared/services/igrejas.service';
import { SeoService } from '../../shared/services/seo-home.service';
import { Church } from '../../shared/models/church.model';
import { Contact } from '../../shared/models/contact-model';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    SectionContainer,
    SectionCard,
    ChurchCard,
    InstitutionalChannels,
    PageLayout,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly igrejasService = inject(IgrejasService);
  private readonly seo = inject(SeoService);

  heroSlides = HOME_HERO;

  canaisTitle = 'Canais institucionais';

  canaisInstitucionais: InstitutionalChannel[] = [
    {
      icon: 'bi-globe2',
      title: 'Site',
      value: 'igrejadecristo.net.br',
      url: 'https://www.igrejadecristo.net.br/',
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
      icon: 'bi-instagram',
      title: 'Instagram',
      value: '@igrejadecristogaropabasc',
      url: 'https://www.instagram.com/igrejadecristogaropabasc/',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Visitar perfil do Instagram',
    },
  ];

  igrejasFixas = signal<Church[]>([]);
  igrejasAleatorias = signal<Church[]>([]);
  contatos = signal<Contact[]>([]);

  ngOnInit(): void {
    this.setupSeo();
    this.loadData();
  }

  getContatosDaIgreja(congregacaoId: number): Contact[] {
    return this.contatos().filter((c) => c.congregacaoId === congregacaoId);
  }

  private loadData(): void {
    this.igrejasService.getIgrejasFixas().subscribe({
      next: (igrejas) => this.igrejasFixas.set(igrejas),
      error: (e) => console.error('Erro ao buscar igrejas fixas:', e),
    });

    this.igrejasService.getIgrejasAleatorias().subscribe({
      next: (igrejas) => this.igrejasAleatorias.set(igrejas),
      error: (e) => console.error('Erro ao buscar igrejas aleatórias:', e),
    });

    this.igrejasService.getContatos().subscribe({
      next: (contatos) => this.contatos.set(contatos),
      error: (e) => console.error('Erro ao buscar contatos:', e),
    });
  }

  private setupSeo(): void {
    this.seo.update({
      title: 'Igreja de Cristo | Bíblia, Evangelho e Comunhão',
      description:
        'Conheça a Igreja de Cristo, sua fé baseada no Amor, na Bíblia e no Evangelho de Jesus. Encontre congregações, informações de contato e comunidades cristãs.',
      path: '/',
      imageAlt: 'Igreja de Cristo - Bíblia, Evangelho e comunhão em Cristo',
    });

    const base = 'https://www.igrejadecristo.net.br';

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${base}/#organization`,
          name: 'Igreja de Cristo',
          url: `${base}/`,
          logo: {
            '@type': 'ImageObject',
            url: `${base}/assets/img/novo-logo-white-300x120.webp`,
          },
          description:
            'Comunidades cristãs locais comprometidas com Jesus Cristo, o Evangelho e a Bíblia.',
          sameAs: ['https://www.instagram.com/igrejadecristogaropabasc/'],
        },
        {
          '@type': 'WebSite',
          '@id': `${base}/#website`,
          name: 'Igreja de Cristo',
          url: `${base}/`,
          inLanguage: 'pt-BR',
          publisher: { '@id': `${base}/#organization` },
        },
        {
          '@type': 'WebPage',
          '@id': `${base}/#webpage`,
          url: `${base}/`,
          name: 'Igreja de Cristo no Brasil',
          inLanguage: 'pt-BR',
          isPartOf: { '@id': `${base}/#website` },
          about: { '@id': `${base}/#organization` },
        },
      ],
    });
  }
}
