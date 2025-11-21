import { Component, EventEmitter, Output } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonImg,
  IonInput,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonImg
  ]
})
export class LoginCardComponent {
  username = '';
  password = '';

  @Output() login = new EventEmitter<{ username: string; password: string }>();

  constructor(private auth: AuthService) {}

  onSubmit(): void {
    this.login.emit({ username: this.username, password: this.password });

    const body = {
      username: this.username,
      password: this.password
    };

    this.auth.login(body);
  }
}
