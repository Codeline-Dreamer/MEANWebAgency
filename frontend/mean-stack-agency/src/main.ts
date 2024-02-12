// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { appConfig } from './app/app.config'; // Ensure this path is correct
appConfig.providers = [...appConfig.providers, provideHttpClient(withFetch())];

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
