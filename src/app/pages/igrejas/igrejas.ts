import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';

import { PageLayout } from '../../shared/components/page-layout/page-layout';
import { ContentHeroComponent } from '../../shared/components/content-hero/content-hero';
import { SectionSideTitle } from '../../shared/components/side-title/section-side-title';
import { SectionCard } from '../../shared/components/section-card/section-card';
import { SectionContainer } from '../../shared/components/section-container/section-container';
import { AccordionEstado } from '../../shared/components/accordion-estado/accordion-estado';

import { IgrejasService } from '../../shared/services/igrejas.service';
import { SeoService } from '../../shared/services/seo.service';
import { Church } from '../../shared/models/church.model';
import { Contact } from '../../shared/models/contact-model';

const SITE_URL = 'https://www.igrejadecristo.net.br';
const PAGE_URL = `${SITE_URL}/igrejas`;

const PAGE_TITLE = 'Igrejas de Cristo no Brasil: Endereços e Contatos';

const PAGE_DESCRIPTION =
  'Encontre uma Igreja de Cristo perto de você. Veja as igrejas por Estado e cidade, com endereço e contato de cada congregação.';

const PAGE_IMAGE = `${SITE_URL}/assets/img/og-image-igrejas.jpg`;
const JSON_LD_ID = 'json-ld-igrejas';

interface EstadoAgrupado {
  nome: string;
  uf: string;
  igrejas: Church[];
  aberto: boolean;
}

@Component({
  selector: 'app-igrejas',
  standalone: true,
  imports: [
    PageLayout,
    ContentHeroComponent,
    SectionSideTitle,
    SectionCard,
    SectionContainer,
    AccordionEstado,
  ],
  templateUrl: './igrejas.html',
  styleUrl: './igrejas.css',
})
export class Igrejas implements OnInit {
  private readonly igrejasService = inject(IgrejasService);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);

  private requisicaoAtual?: Subscription;
  private jsonLdGerado = false;

  readonly contatos = signal<Contact[]>([]);
  readonly estados = signal<EstadoAgrupado[]>([]);
  readonly carregando = signal(true);
  readonly erro = signal(false);

  /** Texto lido por leitores de tela após uma busca (aria-live). */
  readonly mensagemBusca = signal('');

  readonly pageConfig = {
    currentPage: 'Igrejas locais',
    subtitle: 'Localidades',
    title: 'Igrejas de Cristo no Brasil',
    description:
      'Encontre a Igreja de Cristo, conheça as igrejas, informações de cultos, estudos bíblicos, endereço e contato.',
  };

  // Igrejas carregadas pela API
  igrejas: Church[] = [];

  ngOnInit(): void {
    this.setupSEO();
    this.carregar();

    this.igrejasService
      .getContatos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (contatos) => this.contatos.set(contatos),
        error: (erro) => console.error('Erro ao buscar contatos:', erro),
      });
  }

  /**
   * Configura os metadados SEO da página por meio do SeoService.
   */
  private setupSEO(): void {
    this.seo.update({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      path: '/igrejas',
      image: PAGE_IMAGE,
      imageAlt: 'Igrejas de Cristo no Brasil: encontre uma comunidade perto de você',
    });

    // Entidades globais compartilhadas pelo site.
    this.seo.setGlobalJsonLd();
  }

  buscarIgrejas(valor: string, event?: Event): void {
    event?.preventDefault();
    this.carregar(valor.trim());
  }

  formatarEndereco(igreja: Church): string {
    return [igreja.enderecoLogradouro, igreja.numero, igreja.bairro, igreja.cidade, igreja.uf]
      .filter(Boolean)
      .join(', ');
  }

  /**
   * Carrega todas as igrejas (sem termo) ou busca por termo.
   * Cancela a requisição anterior para evitar resposta atrasada
   * sobrescrevendo a lista.
   */
  private carregar(termo = ''): void {
    this.requisicaoAtual?.unsubscribe();

    this.carregando.set(true);
    this.erro.set(false);

    const requisicao$ = termo
      ? this.igrejasService.buscarIgrejas(termo)
      : this.igrejasService.getIgrejas();

    this.requisicaoAtual = requisicao$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (igrejas) => {
        this.igrejas = igrejas;
        this.organizarPorEstado();

        this.carregando.set(false);

        this.mensagemBusca.set(termo ? this.montarMensagemBusca(igrejas.length, termo) : '');

        // O JSON-LD representa a lista completa, nunca os resultados
        // filtrados de uma busca. É gerado uma única vez por instância.
        if (!termo && !this.jsonLdGerado && igrejas.length > 0) {
          this.addJsonLd(igrejas);
          this.jsonLdGerado = true;
        }
      },
      error: (erro) => {
        console.error('Erro ao carregar igrejas:', erro);

        this.estados.set([]);
        this.erro.set(true);
        this.carregando.set(false);

        this.mensagemBusca.set('Não foi possível carregar as igrejas agora.');
      },
    });
  }

  private montarMensagemBusca(total: number, termo: string): string {
    if (total === 0) {
      return `Nenhuma igreja encontrada para "${termo}".`;
    }

    const resultado = total === 1 ? '1 igreja encontrada' : `${total} igrejas encontradas`;

    return `${resultado} para "${termo}".`;
  }

  private organizarPorEstado(): void {
    const estadosMap = new Map<string, Church[]>();

    this.igrejas.forEach((igreja) => {
      if (!estadosMap.has(igreja.uf)) {
        estadosMap.set(igreja.uf, []);
      }

      estadosMap.get(igreja.uf)!.push(igreja);
    });

    this.estados.set(
      Array.from(estadosMap.entries())
        .map(([uf, igrejas]) => ({
          nome: igrejas[0]?.estado || uf,
          uf,
          igrejas,
          aberto: false,
        }))
        .sort((a, b) => a.nome.localeCompare(b.nome)),
    );
  }

  /**
   * JSON-LD específico desta página.
   * Organization e WebSite são globais e apenas referenciados por @id.
   */
  private addJsonLd(igrejas: Church[]): void {
    this.seo.setJsonLd(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            '@id': `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: 'Igrejas de Cristo no Brasil',
            description:
              'Lista de igrejas de Cristo no Brasil organizadas por Estado e cidade, com endereço e contato.',
            inLanguage: 'pt-BR',
            isPartOf: {
              '@id': `${SITE_URL}/#website`,
            },
            about: {
              '@id': `${SITE_URL}/#organization`,
            },
            breadcrumb: {
              '@id': `${PAGE_URL}#breadcrumb`,
            },
            mainEntity: {
              '@id': `${PAGE_URL}#lista`,
            },
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${PAGE_URL}#breadcrumb`,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: `${SITE_URL}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Igrejas',
                item: PAGE_URL,
              },
            ],
          },
          {
            '@type': 'ItemList',
            '@id': `${PAGE_URL}#lista`,
            name: 'Igrejas de Cristo no Brasil por Estado',
            numberOfItems: igrejas.length,
            itemListElement: igrejas.map((igreja, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Church',
                name: igreja.nomeCongregacao,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: [igreja.enderecoLogradouro, igreja.numero, igreja.complemento]
                    .filter(Boolean)
                    .join(', '),
                  addressLocality: igreja.cidade,
                  addressRegion: igreja.uf,
                  postalCode: igreja.cep || undefined,
                  addressCountry: igreja.pais || 'BR',
                },
              },
            })),
          },
        ],
      },
      JSON_LD_ID,
    );
  }
}
