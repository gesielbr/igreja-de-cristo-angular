import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router'; // ← ADICIONE AQUI
import { filter } from 'rxjs';

import { HOME_CTA } from '../../shared/configs/home-cta';
import { CtaAsideComponent } from '../../shared/components/cta-aside/cta-aside';

import { PageData } from '../../shared/models/page-data.model';

@Component({
  selector: 'app-header',
  imports: [
    CtaAsideComponent,
    RouterLink, // ← ADICIONE
    RouterLinkActive, // ← ADICIONE
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly router = inject(Router);
  ctaSections = HOME_CTA;

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
