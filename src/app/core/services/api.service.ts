import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular/standalone';
import { CONSTANTS } from 'app/shared/constants';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

export interface LoginBody { username: string; password: string; }
export interface LoginResponse { data: { token: string } }
export interface GroupItem { id: string; label: string; }
export interface PublishedForm { formId: string; formTitle: string; remoteUrl?: string; }

interface RawGroup { _id: string; label: string; }
interface OnlineSurveyForm { formId: string; published: boolean; }
interface OnlineSurveyResponse { data: OnlineSurveyForm[]; }
interface Form { id: string; title: string; type?: string; }

// OPDS Interfaces
interface OpdsFeed {
  metadata: { title: string };
  links: any[];
  navigation: OpdsEntry[];
  publications: OpdsEntry[];
}

interface OpdsEntry {
  href: string;
  title: string;
  type: string;
  metadata?: { identifier?: string; title?: string };
  links?: { rel: string; href: string; type: string }[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private tokenKey = CONSTANTS.AUTH_TOKEN;
  private respectLoginKey = 'RESPECT_LOGIN_MODE';
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

  // Respect Login Management
  setRespectLogin(enable: boolean): void {
    if (enable) {
      localStorage.setItem(this.respectLoginKey, 'true');
    } else {
      localStorage.removeItem(this.respectLoginKey);
    }
  }

  isRespectLogin(): boolean {
    return localStorage.getItem(this.respectLoginKey) === 'true';
  }

  getDummyUser() {
    return environment.dummyUser;
  }

  async getGroups(): Promise<GroupItem[]> {
    if (this.isRespectLogin()) {
      return this.getOpdsGroups();
    }

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

  private async getOpdsGroups(): Promise<GroupItem[]> {
    return new Promise((resolve, reject) => {
      this.http.get<OpdsFeed>('https://ibiza-stage-tangerine-dev.web.app/opds.json').subscribe({
        next: (feed) => {
          const groups = (feed.navigation || []).map(entry => ({
            id: entry.href, // Use full URL as ID
            label: entry.title
          }));
          resolve(groups);
        },
        error: (err) => reject(err)
      });
    });
  }

  async getPublishedFormsWithTitle(groupId: string): Promise<PublishedForm[]> {
    if (this.isRespectLogin()) {
      return this.getOpdsForms(groupId);
    }

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
      console.error('Error fetching forms:', JSON.stringify(err));
      console.dir(err);
      throw err;
    }
  }

  private async getOpdsForms(groupUrl: string): Promise<PublishedForm[]> {
    console.log('Fetching OPDS forms from:', groupUrl);
    return new Promise((resolve, reject) => {
      this.http.get<OpdsFeed>(groupUrl).subscribe({
        next: (feed) => {
          const forms = (feed.publications || []).map(entry => {
             // Try to find the form ID from the identifier URL or fallback
             let formId = 'unknown';
             let remoteUrl = '';
             
             // Look for the open-access link which is the form launch URL
             const launchLink = entry.links?.find(l => l.rel === 'http://opds-spec.org/acquisition/open-access') 
                              || entry.links?.find(l => l.type === 'text/html');
             
             if (launchLink) {
                remoteUrl = launchLink.href;
                // identifier example: https://.../#/form/registration-role-1
                 const parts = (entry.metadata?.identifier || '').split('/form/');
                 if (parts.length > 1) {
                   formId = parts[1];
                 }
             }

             return {
                formId: formId,
                formTitle: entry.metadata?.title || entry.title,
                remoteUrl: remoteUrl
             };
          });
          resolve(forms);
        },
        error: (err) => reject(err)
      });
    });
  }

  async logout(): Promise<void> {
    this.clearToken();
    this.clearGroupId();
    this.clearServerUrl();
    this.setRespectLogin(false);
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
    return !!this.getToken() || this.isRespectLogin();
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
