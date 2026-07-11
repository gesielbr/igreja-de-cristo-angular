import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    // HTTP Client com Fetch API para melhor performance no SSR/SSG
    provideHttpClient(
      withFetch(), // Usa a API Fetch nativa (mais rápida que XMLHttpRequest)
      // withInterceptors([]) // Descomente se tiver interceptors
    ),
  ],
};
