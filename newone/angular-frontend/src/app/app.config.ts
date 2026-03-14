import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // Optimizes change detection for better performance
    provideZoneChangeDetection({ eventCoalescing: true }), 
    
    // Configures HttpClient to use the modern 'fetch' API
    provideHttpClient(withFetch()) 
  ]
};