import { Component, OnInit, NgZone, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { registerPlugin } from '@capacitor/core';
import { FormLoaderService } from './core/services/form-loader.service';
import { ApiService } from './core/services/api.service';

const UserProcessor = registerPlugin<any>('UserProcessor');

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrls: ['./app.scss'],
	standalone: true,
	imports: [IonApp, RouterOutlet]
	})
	export class App implements OnInit {
	private ngZone = inject(NgZone);
	private formLoader = inject(FormLoaderService);
	private api = inject(ApiService);

	ngOnInit() {
		this.registerNativeListener();
	}
	private registerNativeListener() {
		console.log('Registering Plugin');
		UserProcessor.addListener('processUserData', async (data: any) => {
		console.log('Received from Java: ', data);
		this.api.setRealUser(data);

		// Handle survey deep link - check for deepLink flag, respect login mode, or explicit auth/launch version
		const isDeepLink = data.deepLink || data.auth || data.respectLaunchVersion;
		
		if ((this.api.isRespectLogin() || isDeepLink) && data.type === 'survey' && data.groupId && data.formId) {

			// Add delay to ensure app is stable before loading document
			setTimeout(() => {
				this.ngZone.run(async () => {
					const formUrl = this.formLoader.getFormUrl(data.groupId, data.formId);
					const hashFragment = this.formLoader.getFormHashFragment(data.formId, data);
					try {
						await this.formLoader.loadFormWithOverlay(formUrl, hashFragment);
					} catch (e) {
						console.error('Error loading form', e);
					}
				});
			}, 500); 
		}

		const result = this.processData(data);
		await UserProcessor.returnResult({ result });
		console.log('Sent result back to Java: ', result);
		});
	}

	private processData(data: any) {
		return {
		type: data.type,
		groupId: data.groupId,
		formId: data.formId,
		status: 'processed',
		};
	}
}
