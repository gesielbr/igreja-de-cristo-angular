import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;

  // Metadados opcionais para páginas específicas.
  keywords?: string;
  revisitAfter?: string;
  twitterSite?: string;
  twitterCreator?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  private readonly baseUrl = 'https://www.igrejadecristo.net.br';
  private readonly defaultImage = `${this.baseUrl}/assets/img/og-image-home.jpg`;

  private readonly organizationId = `${this.baseUrl}/#organization`;
  private readonly websiteId = `${this.baseUrl}/#website`;

  /**
   * Atualiza os metadados da página e limpa os JSON-LD
   * gerenciados pelo serviço antes de configurar a nova página.
   *
   * Os componentes devem chamar update() antes de setJsonLd().
   */
  update(c: PageSeo): void {
    this.clearPageJsonLd();

    const path = c.path.startsWith('/') ? c.path : `/${c.path}`;
    const url = `${this.baseUrl}${path}`;
    const image = c.image ?? this.defaultImage;
    const imageAlt = c.imageAlt ?? c.title;

    const robots = c.noindex
      ? 'noindex, follow'
      : 'index, follow, max-snippet:-1, max-image-preview:large';

    // Título e indexação.
    this.titleService.setTitle(c.title);

    this.setMeta('name', 'description', c.description);
    this.setMeta('name', 'robots', robots);
    this.setMeta('name', 'googlebot', robots);

    // Metadados opcionais: não deixar valores antigos em outras páginas.
    this.setOptionalMeta('name', 'keywords', c.keywords);
    this.setOptionalMeta('name', 'revisit-after', c.revisitAfter);

    // Open Graph.
    this.setMeta('property', 'og:type', 'website');
    this.setMeta('property', 'og:site_name', 'Igreja de Cristo');
    this.setMeta('property', 'og:locale', 'pt_BR');
    this.setMeta('property', 'og:title', c.title);
    this.setMeta('property', 'og:description', c.description);
    this.setMeta('property', 'og:url', url);
    this.setMeta('property', 'og:image', image);
    this.setMeta('property', 'og:image:width', '1200');
    this.setMeta('property', 'og:image:height', '630');
    this.setMeta('property', 'og:image:alt', imageAlt);

    // Twitter Cards.
    this.setMeta('name', 'twitter:card', 'summary_large_image');
    this.setMeta('name', 'twitter:title', c.title);
    this.setMeta('name', 'twitter:description', c.description);
    this.setMeta('name', 'twitter:image', image);

    this.setOptionalMeta('name', 'twitter:site', c.twitterSite);
    this.setOptionalMeta('name', 'twitter:creator', c.twitterCreator);

    // Cores institucionais.
    this.setMeta('name', 'theme-color', '#163b67');
    this.setMeta('name', 'msapplication-TileColor', '#163b67');

    // URL canônica.
    this.setCanonical(url);
  }

  /**
   * Define os dados estruturados globais do site.
   *
   * Deve ser chamado depois de update() e antes dos
   * dados estruturados específicos de cada página.
   */
  setGlobalJsonLd(): void {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': this.organizationId,
          name: 'Igreja de Cristo',
          alternateName: ['Igreja de Cristo no Brasil', 'Comunidade Cristã Igreja de Cristo'],
          url: `${this.baseUrl}/`,
          logo: {
            '@type': 'ImageObject',
            url: `${this.baseUrl}/assets/img/novo-logo-white-300x120.webp`,
          },
          description:
            'Comunidades cristãs locais comprometidas com Jesus Cristo, o Evangelho e a Bíblia.',
          sameAs: [
            'https://www.instagram.com/igrejadecristogaropabasc/',
            'https://www.facebook.com/IgrejadeCristoCuritibaCentro',
            'https://www.youtube.com/@IgrejadeCristoCuritiba',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': this.websiteId,
          name: 'Igreja de Cristo',
          alternateName: 'Igreja de Cristo no Brasil',
          url: `${this.baseUrl}/`,
          inLanguage: 'pt-BR',
          publisher: {
            '@id': this.organizationId,
          },
        },
      ],
    };

    this.setJsonLd(jsonLd, 'json-ld-global');
  }

  /**
   * Cria ou atualiza um JSON-LD gerenciado pelo serviço.
   *
   * Mantém a assinatura existente para não quebrar
   * os componentes que já utilizam setJsonLd(data, id).
   */
  setJsonLd(data: object, id = 'json-ld-page'): void {
    let script = this.doc.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.doc.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }

    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', 'true');
    script.textContent = JSON.stringify(data);
  }

  /**
   * Remove um JSON-LD específico pelo ID.
   */
  clearJsonLd(id: string): void {
    const script = this.doc.getElementById(id);

    if (script?.getAttribute('data-seo-jsonld') === 'true') {
      script.remove();
    }
  }

  /**
   * Remove os JSON-LD específicos da página atual,
   * preservando as entidades globais do site.
   */
  clearPageJsonLd(): void {
    const scripts = this.doc.head.querySelectorAll<HTMLScriptElement>(
      'script[data-seo-jsonld="true"]:not(#json-ld-global)',
    );

    scripts.forEach((script) => script.remove());
  }

  private setMeta(attribute: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({
      [attribute]: key,
      content,
    });
  }

  private setOptionalMeta(attribute: 'name' | 'property', key: string, content?: string): void {
    if (content) {
      this.setMeta(attribute, key, content);
      return;
    }

    this.meta.removeTag(`${attribute}="${key}"`);
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
