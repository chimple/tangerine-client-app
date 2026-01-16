import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { App as CapacitorApp, URLOpenListenerEvent } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [IonApp, RouterOutlet],
})
export class App {
  constructor(private ngZone: NgZone) {
    this.initializeApp();
  }

  initializeApp() {
    CapacitorApp.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.ngZone.run(() => {
        const url = event.url;
        // Check if the URL is a form URL
        if (url.includes('/releases/prod/online-survey-apps/')) {
          // Open the form directly in the app (replace current view)
          window.location.href = url;
        }
      });
    });
  }
}
