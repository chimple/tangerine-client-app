import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular/standalone';
import { CONSTANTS } from 'app/shared/constants';

export interface LoginBody { username: string; password: string; }
export interface LoginResponse { data: { token: string } }
export interface GroupItem { id: string; label: string; }

interface RawGroup { _id: string; label: string; }

@Injectable({ providedIn: 'root' })
export class ApiService {
  private tokenKey = CONSTANTS.AUTH_TOKEN;
  private http = inject(HttpClient);
  private toastCtrl = inject(ToastController);

  async login(body: LoginBody): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      this.http.post<LoginResponse>(`${CONSTANTS.API_BASE}/login`, body).subscribe({
        next: (res) => {
          const token = res?.data?.token;
          if (token) {
            localStorage.setItem(this.tokenKey, token);
          }
          resolve(res);
        },
        error: (err) => reject(err)
      });
    });
  }

  async getGroups(): Promise<GroupItem[]> {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem(this.tokenKey) ?? '';
      this.http.get<RawGroup[]>(`${CONSTANTS.API_BASE}/nest/group/list`, {
        headers: { Authorization: token }
      }).subscribe({
        next: (list) => {
          resolve((list || []).map(g => ({ id: g._id, label: g.label })));
        },
        error: (err) => reject(err)
      });
    });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  async showToast(msg: string, color: string = 'primary'): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}
