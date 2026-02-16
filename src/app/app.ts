import { Component, OnInit, NgZone, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
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
	private router = inject(Router);

	ngOnInit() {
		this.registerNativeListener();
	}
	private registerNativeListener() {
		console.log('Registering Plugin');
		UserProcessor.addListener('processUserData', async (data: any) => {
		console.log('Received from Java: ', JSON.stringify(data));
		this.api.setRealUser(data);

		// Handle survey deep link - check for deepLink flag, respect login mode, or explicit auth/launch version
		const isDeepLink = data.deepLink || data.auth || data.respectLaunchVersion;
		
		if ((this.api.isRespectLogin() || isDeepLink) && data.type === 'survey' && data.groupId && data.formId) {
			// Enable respect login mode if this is a deep link launch
			if (isDeepLink) {
				this.api.setRespectLogin(true);
				this.api.saveGroupId(data.groupId);
			}

			// Add delay to ensure app is stable before loading document
			setTimeout(() => {
				this.ngZone.run(async () => {
					const groupUrl = `/forms/${data.groupId}`;
					await this.router.navigateByUrl(groupUrl);

					const formUrl = this.formLoader.getFormUrl(data.groupId, data.formId);
					const hashFragment = this.formLoader.getFormHashFragment(data.formId, data);
					
					// Calculate full return URL including origin
					const returnUrl = window.location.origin + groupUrl;

					try {
						await this.formLoader.loadFormWithOverlay(formUrl, hashFragment, returnUrl);
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
