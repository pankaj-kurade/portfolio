import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Add your routes here in the future
    provideAnimationsAsync(),
    provideClientHydration()
  ]
}).catch(err => console.error(err));
