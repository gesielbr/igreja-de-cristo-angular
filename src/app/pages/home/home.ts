import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
import { DOCUMENT } from '@angular/common';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    SectionContainer,
    SectionCard,
    ChurchCard,
    InstitutionalChannels,
    PageLayout,
    SectionSideTitle,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
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

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.setupSEO();
    this.addJsonLd();
  }

  /**
   * Configura todas as tags SEO para a página inicial
   */
  private setupSEO(): void {
    // ============================================
    // TÍTULO DA PÁGINA
    // ============================================
    this.title.setTitle('Igrejas de Cristo no Brasil | Encontre uma Comunidade Cristã Próxima');

    // ============================================
    // METADADOS BÁSICOS
    // ============================================
    this.meta.updateTag({
      name: 'description',
      content:
        'Encontre igrejas da Igreja de Cristo no Brasil por Estado e cidade. Veja endereço, contato, horários de cultos, estudos bíblicos e informações sobre comunidades cristãs locais.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Igrejas de Cristo no Brasil, encontrar igreja, comunidade cristã, cultos evangélicos, estudos bíblicos, igreja local, congregação cristã, Igreja de Cristo endereço, igreja perto de mim',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large',
    });
    this.meta.updateTag({ name: 'googlebot', content: 'index, follow' });

    // ============================================
    // CANONICAL - REMOVIDO! O Angular já adiciona automaticamente
    // ============================================
    // this.meta.updateTag({ rel: 'canonical', href: 'https://www.igrejadecristo.net.br/' });

    // ============================================
    // OPEN GRAPH (Facebook, LinkedIn, WhatsApp)
    // ============================================
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Igrejas de Cristo no Brasil | Encontre uma Comunidade Cristã Próxima',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Encontre igrejas da Igreja de Cristo no Brasil por Estado e cidade. Comunidades cristãs locais com endereço, contato e informações de cultos.',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.igrejadecristo.net.br/igrejas',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'Igreja de Cristo' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image-igrejas.jpg',
    });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'Igrejas de Cristo no Brasil - Encontre uma comunidade cristã próxima',
    });

    // ============================================
    // TWITTER CARD
    // ============================================
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Igrejas de Cristo no Brasil | Encontre uma Comunidade Cristã Próxima',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Encontre igrejas da Igreja de Cristo no Brasil por Estado e cidade. Comunidades cristãs locais com endereço, contato e informações de cultos.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.igrejadecristo.net.br/assets/img/og-image-igrejas.jpg',
    });
    this.meta.updateTag({ name: 'twitter:site', content: '@igrejadecristo' });

    // ============================================
    // CORES E TEMA
    // ============================================
    this.meta.updateTag({ name: 'theme-color', content: '#163b67' });
    this.meta.updateTag({ name: 'msapplication-TileColor', content: '#163b67' });

    // ============================================
    // VERIFICAÇÃO DE PROPRIEDADE (Google Search Console)
    // ============================================
    // Substitua 'SEU_CODIGO_GOOGLE_AQUI' pelo código fornecido pelo Google
    // this.meta.updateTag({ name: 'google-site-verification', content: 'SEU_CODIGO_GOOGLE_AQUI' });
  }

  /**
   * Adiciona JSON-LD (Dados Estruturados) para melhorar o SEO
   * Isso ajuda o Google a entender melhor o conteúdo do site
   */
  private addJsonLd(): void {
    // VERIFICA SE ESTÁ NO NAVEGADOR
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return; // Sai da função se não estiver no navegador
    }

    // Remove JSON-LD antigo se existir (evita duplicação)
    const oldScript = document.querySelector('script[type="application/ld+json"]');
    if (oldScript) {
      oldScript.remove();
    }

    // Cria o novo script com os dados estruturados
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.igrejadecristo.net.br/#organization',
          name: 'Igreja de Cristo',
          url: 'https://www.igrejadecristo.net.br/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.igrejadecristo.net.br/assets/img/logo.svg',
          },
          description:
            'Igreja de Cristo no Brasil - Comunidades cristãs locais comprometidas com Jesus Cristo, o Evangelho e a Bíblia. Encontre uma igreja perto de você.',
          sameAs: [
            'https://www.instagram.com/igrejadecristogaropabasc/',
            'https://www.facebook.com/IgrejadeCristoCuritibaCentro',
            'https://www.youtube.com/@IgrejadeCristoCuritiba',
            'https://wa.me/5553981493086',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+55-53-98149-3086',
            contactType: 'General Inquiries',
            availableLanguage: ['Portuguese'],
          },
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.igrejadecristo.net.br/#website',
          name: 'Igreja de Cristo',
          url: 'https://www.igrejadecristo.net.br/',
          publisher: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          inLanguage: 'pt-BR',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.igrejadecristo.net.br/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.igrejadecristo.net.br/igrejas#webpage',
          name: 'Igrejas de Cristo no Brasil',
          description:
            'Encontre igrejas da Igreja de Cristo no Brasil por Estado e cidade. Veja endereço, contato, horários de cultos e estudos bíblicos.',
          url: 'https://www.igrejadecristo.net.br/igrejas',
          inLanguage: 'pt-BR',
          isPartOf: {
            '@id': 'https://www.igrejadecristo.net.br/#website',
          },
          about: {
            '@id': 'https://www.igrejadecristo.net.br/#organization',
          },
          breadcrumb: {
            '@id': 'https://www.igrejadecristo.net.br/igrejas#breadcrumb',
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.igrejadecristo.net.br/igrejas#breadcrumb',
          name: 'Breadcrumbs da página de Igrejas',
          description: 'Caminho de navegação para a página de Igrejas locais.',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: 'https://www.igrejadecristo.net.br/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Igrejas',
              item: 'https://www.igrejadecristo.net.br/igrejas',
            },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
