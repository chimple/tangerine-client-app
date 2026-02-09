import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular/standalone';
import { CONSTANTS } from 'app/shared/constants';
import { Router } from '@angular/router';

export interface LoginBody { username: string; password: string; }
export interface LoginResponse { data: { token: string } }
export interface GroupItem { id: string; label: string; }
export interface PublishedForm { formId: string; formTitle: string; }

interface RawGroup { _id: string; label: string; }
interface OnlineSurveyForm { formId: string; published: boolean; }
interface OnlineSurveyResponse { data: OnlineSurveyForm[]; }
interface Form { id: string; title: string; type?: string; }

@Injectable({ providedIn: 'root' })
export class ApiService {
  private tokenKey = CONSTANTS.AUTH_TOKEN;
  private http = inject(HttpClient);
  private toastCtrl = inject(ToastController);
  private router = inject(Router);

  async login(body: LoginBody): Promise<LoginResponse> {
    const serverUrl = this.getServerUrl();
    if (!serverUrl) throw new Error('Server URL not configured');
    return new Promise((resolve, reject) => {
      this.http.post<LoginResponse>(`${serverUrl}/login`, body).subscribe({
        next: (res) => {
          const token = res?.data?.token;
          if (token) {
            this.saveToken(token);
          }
          resolve(res);
        },
        error: (err) => reject(err)
      });
    });
  }

  async getGroups(): Promise<GroupItem[]> {
    const token = this.getToken();
    if (!token) throw new Error('Unauthorized');
    const serverUrl = this.getServerUrl();
    if (!serverUrl) throw new Error('Server URL not configured');

    return new Promise((resolve, reject) => {
      this.http.get<RawGroup[]>(`${serverUrl}/nest/group/list`, {
        headers: { Authorization: token }
      }).subscribe({
        next: (list) => {
          resolve((list || []).map(g => ({ id: g._id, label: g.label })));
        },
        error: (err) => reject(err)
      });
    });
  }

  async getPublishedFormsWithTitle(groupId: string): Promise<PublishedForm[]> {
    const token = this.getToken();
    if (!token) throw new Error('Unauthorized');
    const serverUrl = this.getServerUrl();
    if (!serverUrl) throw new Error('Server URL not configured');

    try {
      const surveyForms = await new Promise<OnlineSurveyResponse>((res, rej) => {
        this.http.get<OnlineSurveyResponse>(`${serverUrl}/onlineSurvey/getOnlineSurveys/${groupId}`, {
          headers: { Authorization: token }
        }).subscribe({ next: res, error: rej });
      });

      const allForms = await new Promise<Form[]>((res, rej) => {
        this.http.get<Form[]>(`${serverUrl}/app/${groupId}/assets/forms.json`, {
          headers: { Authorization: token }
        }).subscribe({ next: res, error: rej });
      });

      const publishedFormIds = (surveyForms?.data || [])
        .filter(f => f.published)
        .map(f => f.formId);

      return (allForms || [])
        .filter(f => publishedFormIds.includes(f.id) && f.type === 'form')
        .map(f => ({ formId: f.id, formTitle: f.title }));
    } catch (err) {
      console.error('Error fetching forms:', err);
      throw err;
    }
  }

  async logout(): Promise<void> {
    this.clearToken();
    this.clearGroupId();
    this.clearServerUrl();
    await this.router.navigateByUrl('/server');
    await this.showToast('Logged out successfully', 'success');
  }

  async validateServer(serverUrl: string): Promise<boolean> {
    if (!this.isValidUrl(serverUrl)) {
      await this.showToast('Invalid server URL', 'danger');
      return false;
    }

    return new Promise((resolve) => {
      this.http.get<any>(`${serverUrl}/.well-known/tangerine`).subscribe({
        next: (res) => {
          if (res?.status === 'ok' && res?.appName === 'Tangerine') {
            this.showToast('Welcome! Please log in', 'success');
            this.saveServerUrl(serverUrl);
            resolve(true);
          } else {
            this.showToast('Invalid server response', 'danger');
            resolve(false);
          }
        },
        error: () => {
          this.showToast('Failed to validate server', 'danger');
          resolve(false);
        }
      });
    });
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isUserLoggedIn(): boolean {
    return !!this.getToken();
  }

  saveGroupId(groupId: string): void {
    localStorage.setItem(CONSTANTS.GROUP_ID, groupId);
  }

  getGroupId(): string | null {
    return localStorage.getItem(CONSTANTS.GROUP_ID);
  }

  hasGroupId(): boolean {
    return !!this.getGroupId();
  }

  clearGroupId(): void {
    localStorage.removeItem(CONSTANTS.GROUP_ID);
  }

  saveServerUrl(url: string): void {
    localStorage.setItem(CONSTANTS.SERVER_URL, url);
  }

  getServerUrl(): string | null {
    return localStorage.getItem(CONSTANTS.SERVER_URL);
  }

  hasServerUrl(): boolean {
    return !!this.getServerUrl();
  }

  clearServerUrl(): void {
    localStorage.removeItem(CONSTANTS.SERVER_URL);
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
