import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
	IonApp,
} from '@ionic/angular/standalone';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrls: ['./app.scss'],
	standalone: true,
	imports: [IonApp, RouterOutlet]
})
export class App { }
