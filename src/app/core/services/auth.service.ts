import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CONSTANTS } from 'app/shared/constants';

export interface LoginBody { username: string; password: string; }
export interface LoginResponse { data: { token: string } }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token = CONSTANTS.AUTH_TOKEN;

  constructor(private http: HttpClient) {}

  login(body: LoginBody): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${CONSTANTS.API_BASE}/login`, body)
      .pipe(
        tap(res => {
          const token = res?.data?.token;
          if (token) localStorage.setItem(this.token, token);
        })
      );
  }

  getToken(): string | null { return localStorage.getItem(this.token); }
  clearToken(): void { localStorage.removeItem(this.token); }
}
