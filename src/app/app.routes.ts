import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Igrejas } from './pages/igrejas/igrejas';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: {
      pageType: 'home',
      section: 'main',
    },
  },
  {
    path: 'quem-somos',
    component: QuemSomos,
    data: {
      pageType: 'about',
      section: 'main',
    },
  },
  {
    path: 'igrejas',
    component: Igrejas,
    data: {
      pageType: 'churches',
      section: 'main',
    },
  },
];

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
