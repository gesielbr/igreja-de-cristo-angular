import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { QuemSomos } from './pages/pages/quem-somos/quem-somos';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: {
      pageType: 'home',
    },
  },
  {
    path: 'quem-somos',
    component: QuemSomos,
    data: {
      pageType: 'about',
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
