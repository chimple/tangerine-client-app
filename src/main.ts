import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { documentTextOutline, chevronForward } from 'ionicons/icons';

// Register icons globally at app initialization
addIcons({
  'chevron-forward': chevronForward,
  'document-text-outline': documentTextOutline
});

bootstrapApplication(App, {
	providers: [
		provideIonicAngular(),
		provideRouter(routes),
    provideHttpClient()
	]
}).catch((err) => console.error(err));
