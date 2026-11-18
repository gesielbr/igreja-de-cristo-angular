import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  private router = inject(Router);

  private readonly COOKIE_NAME = 'idc_visitor_id';
  private readonly COOKIE_DAYS = 90;

  private initialized = false;
  private pageViewsInitialized = false;

  /**
- Recupera o visitor_id existente ou gera um novo UUID v4
- armazenado em cookie por 90 dias.
   */
  private getOrCreateVisitorId(): string {
    const match = document.cookie.match(new RegExp('(?:^|;\\s*)' + this.COOKIE_NAME + '=([^;]+)'));

    if (match) {
      return match[1];
    }

    const newUuid =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          });

    const expires = new Date(Date.now() + this.COOKIE_DAYS * 864e5).toUTCString();

    document.cookie = `${this.COOKIE_NAME}=${newUuid}; expires=${expires}; path=/; SameSite=Lax; Secure`;

    return newUuid;
  }

  /**
- Inicializa o DataLayer e o rastreamento global de cliques.
   */
  init(): void {
    if (this.initialized) return;

    this.initialized = true;

    window.dataLayer = window.dataLayer || [];

    const visitorId = this.getOrCreateVisitorId();

    console.log('DataLayer inicializado:', window.dataLayer);

    document.addEventListener(
      'click',
      (event: MouseEvent) => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        const element = target.closest('button, a, [role="button"]') as HTMLElement | null;

        if (!element) return;

        // 1. Identificação da seção da página
        const sectionContainer = element.closest(
          '[title], [data-tracking-section], app-section-container, app-section-side-title, [data-section]',
        ) as HTMLElement | null;

        let pageSection = 'unknown';

        if (sectionContainer) {
          const ariaLabelledBy = sectionContainer.getAttribute('aria-labelledby');

          const labelledElement = ariaLabelledBy ? document.getElementById(ariaLabelledBy) : null;

          const titleElement = sectionContainer.querySelector('h1, h2, [data-section-title]');

          pageSection =
            sectionContainer.getAttribute('title') ||
            sectionContainer.getAttribute('data-tracking-section') ||
            labelledElement?.textContent?.trim() ||
            titleElement?.textContent?.trim() ||
            sectionContainer.getAttribute('data-section-title') ||
            sectionContainer.getAttribute('data-section') ||
            sectionContainer.id ||
            sectionContainer.tagName.toLowerCase();
        }

        // 2. Classificação do elemento e evento
        const href = element instanceof HTMLAnchorElement ? element.href : '';

        const ariaExpanded = element.getAttribute('aria-expanded');

        const isAccordion =
          ariaExpanded !== null ||
          element.classList.contains('accordion') ||
          element.classList.contains('accordion-button') ||
          element.getAttribute('role') === 'tab';

        const isWhatsapp = /whatsapp|wa\.me/i.test(href) || element.classList.contains('whatsapp');

        const isMenu = element.closest('nav') !== null || element.classList.contains('menu-item');

        let elementCategory = 'button';
        let dynamicEventName = 'clique_no_botao';

        if (isWhatsapp) {
          elementCategory = 'whatsapp';
          dynamicEventName = 'clique_no_whatsapp';
        } else if (isAccordion) {
          elementCategory = 'accordion';

          const isExpanded = ariaExpanded === 'true';

          dynamicEventName = isExpanded ? 'abertura_accordion' : 'fechamento_accordion';
        } else if (isMenu) {
          elementCategory = 'menu_item';
          dynamicEventName = 'clique_no_menu';
        } else if (element instanceof HTMLAnchorElement) {
          elementCategory = 'link';
          dynamicEventName = 'clique_no_link';
        }

        // 3. Dados do evento
        const eventData = {
          event: dynamicEventName,
          visitor_id: visitorId,

          page_section: pageSection,
          element_category: elementCategory,

          accordion_state: isAccordion
            ? ariaExpanded === 'true'
              ? 'expanded'
              : 'collapsed'
            : undefined,

          element_type: element.tagName.toLowerCase(),

          element_text:
            element.getAttribute('aria-label') ||
            element.getAttribute('data-track-label') ||
            element.textContent?.trim(),

          element_id: element.id || undefined,
          element_class:
            typeof element.className === 'string' ? element.className || undefined : undefined,

          element_url: href || undefined,
          page_url: window.location.href,
        };

        console.log('TRACKING FINAL:', eventData);

        window.dataLayer?.push(eventData);
      },
      true,
    );
  }

  /**
- Inicializa o rastreamento de Page Views
- em todas as navegações do Angular Router.
   */
  initPageViews(): void {
    if (this.pageViewsInitialized) return;

    this.pageViewsInitialized = true;

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const visitorId = this.getOrCreateVisitorId();

        const pageView = {
          event: 'page_view',
          visitor_id: visitorId,
          page_location: window.location.href,
          page_path: event.urlAfterRedirects,
          page_title: document.title,
        };

        console.log('PAGE VIEW:', pageView);

        window.dataLayer?.push(pageView);
      });
  }
}
