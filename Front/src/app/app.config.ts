import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { routes } from './app.routes';
import { FavorisState } from './favoris/favoris.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      NgxsModule.forRoot([FavorisState], {
        developmentMode: true
      }),
      NgxsStoragePluginModule.forRoot({
        keys: ['favoris']
      })
    )
  ]
};
