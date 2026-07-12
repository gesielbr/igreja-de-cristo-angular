import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

import { CtaAsideComponent } from '../../shared/components/cta-aside/cta-aside';
import { CTA_CONFIGS } from '../../shared/configs/cta-configs'; // ← MUDEI AQUI
import { PageData } from '../../shared/models/page-data.model';

@Component({
  selector: 'app-header',
  imports: [CtaAsideComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly router = inject(Router);

  // REMOVA esta linha: ctaSections = HOME_CTA;
  // E SUBSTITUA por isso:
  protected readonly ctaSections = computed(() => {
    const pageType = this.pageData().pageType;
    return CTA_CONFIGS[pageType as keyof typeof CTA_CONFIGS] || CTA_CONFIGS.home;
  });

  protected readonly pageData = signal<PageData>({
    section: 'main',
    pageType: 'home',
  });

  protected readonly isMainSection = computed(() => {
    return this.pageData().section === 'main';
  });

  protected readonly isChurchSection = computed(() => {
    return this.pageData().section === 'church';
  });

  protected readonly currentPageType = computed(() => {
    return this.pageData().pageType;
  });

  constructor() {
    this.updatePageData();

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updatePageData();
    });
  }

  private updatePageData(): void {
    let route = this.router.routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const data = route.snapshot.data as Partial<PageData>;

    this.pageData.set({
      section: data.section ?? 'main',
      pageType: data.pageType ?? 'home',
      churchSlug: data.churchSlug,
      churchName: data.churchName,
    });
  }
}
