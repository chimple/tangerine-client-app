import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
	IonApp,
} from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { ApiService } from './core/services/api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrls: ['./app.scss'],
	standalone: true,
	imports: [IonApp, RouterOutlet]
})
export class App implements OnInit {
	private api = inject(ApiService);

	async ngOnInit(): Promise<void> {
		if (Capacitor.getPlatform() === 'android') {
			// Run once at app startup — test download of form assets
			await this.api.testDownloadRegistrationRole2();
		}
	}
}
