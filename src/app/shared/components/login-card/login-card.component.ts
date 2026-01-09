import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonSpinner
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonImg,
    IonSpinner
  ]
})
export class LoginCardComponent {
  username = '';
  password = '';

  @Input() loading = false;
  @Output() login = new EventEmitter<{ username: string; password: string }>();

  onSubmit(): void {
    this.login.emit({
      username: this.username.trim(),
      password: this.password
    });
  }
}
