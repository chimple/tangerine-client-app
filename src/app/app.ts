import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
	IonApp,
} from '@ionic/angular/standalone';
import { registerPlugin } from '@capacitor/core';

const UserProcessor = registerPlugin<any>('UserProcessor');

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrls: ['./app.scss'],
	standalone: true,
	imports: [IonApp, RouterOutlet]
})
export class App implements OnInit{
	
	ngOnInit() {
		this.registerNativeListener();
	}

	private registerNativeListener() {
		console.log("Registiring Plugin");
		UserProcessor.addListener('processUserData', async (data: any) => {
			console.log("Revieved from Java: ", data);

			const result = this.processData(data);

			await UserProcessor.returnResult({ result });

			console.log("Sent result back to Java: ", result);
		});
	}

	private processData(data: any) {
		return {
			testData: data.testData,
			testData1: "abc"
		};
	}
}
