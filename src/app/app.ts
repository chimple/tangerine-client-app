import { Component, OnInit, NgZone, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { registerPlugin } from '@capacitor/core';
import { FormLoaderService } from './core/services/form-loader.service';

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

	ngOnInit() {
		this.registerNativeListener();
	}

	private registerNativeListener() {
		console.log('Registering Plugin');
		UserProcessor.addListener('processUserData', async (data: any) => {
		console.log('Received from Java: ', data);

		// Handle survey deep link - load form using the shared FormLoaderService
		if (data.type === 'survey' && data.groupId && data.formId) {
			this.ngZone.run(async () => {
			const formUrl = this.formLoader.getFormUrl(data.groupId, data.formId);
			const hashFragment = this.formLoader.getFormHashFragment(data.formId);
			console.log('Opening local form via deep link:', formUrl);
			await this.formLoader.loadFormWithOverlay(formUrl, hashFragment);
			});
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
