import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { CONSTANTS } from 'app/shared/constants';

export interface LoginBody { username: string; password: string; }
export interface LoginResponse {
  data: {
    token: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient,
    private toast: ToastController
  ) {}

  private async showToast(msg: string, color: string = 'primary') {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color,
      position: 'bottom'
    });
    toast.present();
  }

  login(body: LoginBody): void {
    this.http.post<LoginResponse>(`${CONSTANTS.API_BASE}/login`, body)
      .subscribe({
        next: (res) => {
          const token = res?.data?.token;
          if (token) {
            localStorage.setItem(CONSTANTS.TOKEN_KEY, token);
            this.showToast('Login successful', 'success');
          } else {
            this.showToast('Invalid server response', 'danger');
          }
        },
        error: (err) => {
          console.error(err);
          this.showToast('Login failed. Check your credentials.', 'danger');
        }
      });
  }

  getToken(): string | null {
    return localStorage.getItem(CONSTANTS.TOKEN_KEY);
  }

  clearToken(): void {
    localStorage.removeItem(CONSTANTS.TOKEN_KEY);
  }
}
