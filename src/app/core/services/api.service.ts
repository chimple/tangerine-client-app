import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular/standalone';
import { CONSTANTS } from 'app/shared/constants';

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
    const token = this.getToken();
    if (!token) throw new Error('Unauthorized');

    return new Promise((resolve, reject) => {
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

  async getPublishedFormsWithTitle(groupId: string): Promise<PublishedForm[]> {
    const token = this.getToken();
    if (!token) throw new Error('Unauthorized');

    try {
      const surveyForms = await new Promise<OnlineSurveyResponse>((res, rej) => {
        this.http.get<OnlineSurveyResponse>(`${CONSTANTS.API_BASE}/onlineSurvey/getOnlineSurveys/${groupId}`, {
          headers: { Authorization: token }
        }).subscribe({ next: res, error: rej });
      });

      const allForms = await new Promise<Form[]>((res, rej) => {
        this.http.get<Form[]>(`${CONSTANTS.API_BASE}/app/${groupId}/assets/forms.json`, {
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

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isUserLoggedIn(): boolean {
    return !!this.getToken();
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  saveGroupId(groupId: string): void {
    localStorage.setItem(CONSTANTS.GROUP_ID, groupId);
  }

  getGroupId(): string | null {
    return localStorage.getItem(CONSTANTS.GROUP_ID);
  }

  clearGroupId(): void {
    localStorage.removeItem(CONSTANTS.GROUP_ID);
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
