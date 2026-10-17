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

  update(c: PageSeo): void {
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

  setJsonLd(data: object, id = 'json-ld-page'): void {
    let script = this.doc.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.doc.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
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
