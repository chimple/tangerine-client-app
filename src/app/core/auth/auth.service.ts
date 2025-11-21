import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'

export interface LoginBody { username: string; password: string; }
export interface LoginResponse {
  data: {
    token: string;
  };
}


@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'jwtToken';
  private base = environment.apiBase;

  constructor(private http: HttpClient) {}

  login(body: LoginBody): void {
    this.http.post<LoginResponse>(`${this.base}/login`, body)
      .subscribe({
        next: (res) => {
          const token = res?.data?.token;
          if (token) localStorage.setItem(this.key, token);
          console.log("checking token", token);
        },
        error: (err) => {
          console.error('Login error:', err);
        }
      });
  }

  getToken(): string | null { return localStorage.getItem(this.key); }
  clearToken(): void { localStorage.removeItem(this.key); }
}
