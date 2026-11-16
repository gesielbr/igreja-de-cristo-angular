/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  init(): void {
    window.dataLayer = window.dataLayer || [];

    console.log('DataLayer inicializado:', window.dataLayer);

    document.addEventListener(
      'click',
      (event) => {
        const target = event.target as HTMLElement;

        const element = target.closest('button, a, [role="button"]') as HTMLElement | null;

        if (!element) return;

        const eventData = {
          event: 'dom_interaction',

          element_type: element.tagName.toLowerCase(),

          element_text:
            element.getAttribute('aria-label') ||
            element.getAttribute('data-track-label') ||
            element.textContent?.trim(),

          element_id: element.id || undefined,

          element_class: element.className || undefined,

          element_url: element instanceof HTMLAnchorElement ? element.href : undefined,

          page_url: window.location.href,
        };

        console.log('TRACKING:', eventData);

        window.dataLayer?.push(eventData);
      },
      true,
    );
  }
}
 */

import { Injectable, inject, ApplicationRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  private router = inject(Router);

  private appRef = inject(ApplicationRef);

  init(): void {
    window.dataLayer = window.dataLayer || [];

    console.log('DataLayer inicializado:', window.dataLayer);

    document.addEventListener(
      'click',
      (event) => {
        const target = event.target as HTMLElement;

        const element = target.closest('button, a, [role="button"]') as HTMLElement | null;

        if (!element) return;

        // Data e hora
        const now = new Date();

        const eventDate = new Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).format(now);

        const eventTime = new Intl.DateTimeFormat('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hourCycle: 'h23',
        }).format(now);

        // User Agent
        const userAgent = navigator.userAgent;

        // Tipo de dispositivo
        const deviceType = /tablet|ipad/i.test(userAgent)
          ? 'tablet'
          : /mobile|android|iphone|ipod/i.test(userAgent)
            ? 'mobile'
            : 'desktop';

        // Sistema operacional
        let operatingSystem = 'Unknown';

        if (/Windows NT/i.test(userAgent)) {
          operatingSystem = 'Windows';
        } else if (/Android/i.test(userAgent)) {
          operatingSystem = 'Android';
        } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
          operatingSystem = 'iOS';
        } else if (/Mac OS X/i.test(userAgent)) {
          operatingSystem = 'macOS';
        } else if (/Linux/i.test(userAgent)) {
          operatingSystem = 'Linux';
        }

        // Navegador
        let browser = 'Unknown';

        if (/Edg\//i.test(userAgent)) {
          browser = 'Microsoft Edge';
        } else if (/OPR\//i.test(userAgent)) {
          browser = 'Opera';
        } else if (/SamsungBrowser/i.test(userAgent)) {
          browser = 'Samsung Internet';
        } else if (/Chrome\//i.test(userAgent)) {
          browser = 'Google Chrome';
        } else if (/Firefox\//i.test(userAgent)) {
          browser = 'Mozilla Firefox';
        } else if (/Safari\//i.test(userAgent)) {
          browser = 'Safari';
        }

        // Dados do evento
        const eventData = {
          event: 'dom_interaction',

          // Data e hora
          event_date: eventDate,
          event_time: eventTime,

          // Informações do dispositivo
          device_type: deviceType,
          operating_system: operatingSystem,
          browser: browser,

          // Informações do elemento
          element_type: element.tagName.toLowerCase(),

          element_text:
            element.getAttribute('aria-label') ||
            element.getAttribute('data-track-label') ||
            element.textContent?.trim(),

          element_id: element.id || undefined,

          element_class: element.className || undefined,

          element_url: element instanceof HTMLAnchorElement ? element.href : undefined,

          // Página atual
          page_url: window.location.href,
        };

        console.log('TRACKING:', eventData);

        window.dataLayer?.push(eventData);
      },
      true,
    );
  }

  initPageViews(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (!(event instanceof NavigationEnd)) return;

        this.appRef.whenStable().then(() => {
          const pageView = {
            event: 'page_view',
            page_location: window.location.href,
            page_path: event.urlAfterRedirects,
            page_title: document.title,
          };

          console.log('PAGE VIEW:', pageView);

          window.dataLayer?.push(pageView);
        });
      });
  }
}
