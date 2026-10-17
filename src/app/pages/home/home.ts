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
import { SeoService } from '../../shared/services/seo.service';
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

  private readonly baseUrl = 'https://www.igrejadecristo.net.br';

  private readonly homeTitle = 'Igreja de Cristo | Bíblia, Evangelho e Comunhão';

  private readonly homeDescription =
    'Conheça a Igreja de Cristo, sua fé baseada no Amor, na Bíblia e no Evangelho de Jesus. Encontre congregações, informações de contato e comunidades cristãs.';

  private readonly homeImage = `${this.baseUrl}/assets/img/og-image-home.jpg`;

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
    // 1. Metadados específicos da Home.
    this.seo.update({
      title: this.homeTitle,
      description: this.homeDescription,
      path: '/',
      image: this.homeImage,
      imageAlt: 'Igreja de Cristo — Bíblia, Evangelho e comunhão em Cristo',
    });

    // 2. Entidades globais compartilhadas pelas páginas do site.
    this.seo.setGlobalJsonLd();

    // 3. Dados estruturados exclusivos da página inicial.
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${this.baseUrl}/#webpage`,
      url: `${this.baseUrl}/`,
      name: this.homeTitle,
      description: this.homeDescription,
      inLanguage: 'pt-BR',
      isPartOf: {
        '@id': `${this.baseUrl}/#website`,
      },
      about: {
        '@id': `${this.baseUrl}/#organization`,
      },
      mainEntity: {
        '@id': `${this.baseUrl}/#organization`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: this.homeImage,
        width: 1200,
        height: 630,
        caption: 'Igreja de Cristo — Bíblia, Evangelho e comunhão em Cristo',
      },
    });
  }
}
