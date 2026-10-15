import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoHome {
  title: string;
  description: string;
  path: string; // ex: '/' ou '/igrejas'
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  private readonly baseUrl = 'https://www.igrejadecristo.net.br';
  private readonly defaultImage = `${this.baseUrl}/assets/img/og-image-home.jpg`;

  update(c: SeoHome): void {
    const url = this.baseUrl + c.path;
    const image = c.image ?? this.defaultImage;
    const imageAlt = c.imageAlt ?? c.title;

    this.titleService.setTitle(c.title);

    this.meta.updateTag({ name: 'description', content: c.description });
    this.meta.updateTag({
      name: 'robots',
      content: c.noindex
        ? 'noindex, follow'
        : 'index, follow, max-snippet:-1, max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Igreja de Cristo' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ property: 'og:title', content: c.title });
    this.meta.updateTag({ property: 'og:description', content: c.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: imageAlt });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: c.title });
    this.meta.updateTag({ name: 'twitter:description', content: c.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.meta.updateTag({ name: 'theme-color', content: '#163b67' });

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
