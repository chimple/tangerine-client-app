import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server-input',
  templateUrl: './server-input.component.html',
  styleUrls: ['./server-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton
  ]
})
export class ServerInputComponent {
  serverUrl = '';

  @Output() submit = new EventEmitter<string>();

  onSubmit(): void {
    const cleanedUrl = this.serverUrl.trim().replace(/\/+$/, '');
    if (cleanedUrl) {
      this.submit.emit(cleanedUrl);
    }
  }
}
