import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular/standalone';
import { CONSTANTS } from 'app/shared/constants';
import { Router } from '@angular/router';
import { registerPlugin } from '@capacitor/core';
import { firstValueFrom } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { FileTransfer } from '@capacitor/file-transfer';

export interface LoginBody { username: string; password: string; }
export interface LoginResponse { data: { token: string } }
export interface GroupItem { id: string; label: string; }
export interface PublishedForm { formId: string; formTitle: string; remoteUrl?: string; }

interface RawGroup { _id: string; label: string; }
interface OnlineSurveyForm { formId: string; published: boolean; }
interface OnlineSurveyResponse { data: OnlineSurveyForm[]; }
interface Form { id: string; title: string; type?: string; }

import { OpdsFeed } from '../models/opds/opds-feed';
import { OpdsForm } from '../models/opds/opds-form';
import { OpdsLink } from '../models/opds/opds-link';
import { OpdsGroup } from '../models/opds/opds-group';
import { OpdsService } from './opds.service';

// OPDS Interfaces
interface OpdsEntry {
  href: string;
  title: string;
  type: string;
  metadata?: { identifier?: string; title?: string };
  links?: { rel: string; href: string; type: string }[];
}

const UserProcessor = registerPlugin<any>('UserProcessor');

@Injectable({ providedIn: 'root' })
export class ApiService {
  private tokenKey = CONSTANTS.AUTH_TOKEN;
  private respectLoginKey = 'RESPECT_LOGIN_MODE';
  private http = inject(HttpClient);
  private toastCtrl = inject(ToastController);
  private router = inject(Router);
  private opds = inject(OpdsService);

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


  private realUser: any = null;

  setRealUser(user: any) {
    this.realUser = user;
  }

  async getUserData() {
    if (this.realUser) {
      return this.realUser;
    }
    try {
      const result = await UserProcessor.getDummyUser();
      return result;
    } catch (err) {
      console.warn('Error getting dummy user from native (using fallback):', err);
      return {
        auth: 'chimp:chimpoo',
        endpoint: 'https://tangerine.lrs.io/xapi',
        name: 'johnweb',
        mbox: 'mailto:tincan@scorm.com'
      };
    }
  }

  async getGroups(): Promise<GroupItem[]> {
      if (this.isRespectLogin()) {
          try {
             return await firstValueFrom(this.opds.getGroupsFromFeed());
          } catch (err) {
             console.error('Failed to fetch OPDS groups', err);
             throw err;
          }
      }

      // Standard API implementation
      const token = this.getToken();
      if (!token) throw new Error('Unauthorized');
      const serverUrl = this.getServerUrl();
      if (!serverUrl) throw new Error('Server URL not configured');

      return new Promise((resolve, reject) => {
        this.http.get<any>(`${serverUrl}/nest/group/list`, {
           headers: { Authorization: token }
        }).subscribe({
           next: (res) => {
              console.log('Group list raw response:', JSON.stringify(res));
              // Handle both { data: [...] } and direct array responses
              const list = Array.isArray(res) ? res : (res?.data || res?.groups || []);
              if (Array.isArray(list) && list.length > 0) {
                  console.log('First group item keys:', Object.keys(list[0]));
                  const groups: GroupItem[] = list.map((g: any) => ({
                      id: g._id || g.id || g.groupId || '',
                      label: g.label || g.name || g.title || g.groupName || ''
                  }));
                  resolve(groups);
              } else {
                  console.warn('No groups found in response');
                  resolve([]);
              }
           },
           error: (err) => {
               console.error('Failed to fetch groups', err);
               reject(err);
           }
        });
      });
  }

  async getPublishedFormsWithTitle(groupId: string): Promise<PublishedForm[]> {
    if (this.isRespectLogin()) {
      console.log('Fetching OPDS forms from group:', groupId);
      try {
        const group = await firstValueFrom(this.opds.getGroupById(groupId));
        
        // Use the forms array from OpdsGroup
        const forms = (group.forms || []).map((pub: OpdsForm) => {
           let formId = 'unknown';
           let remoteUrl = '';
           
           const orchestratorLink = pub.getOrchestratorLink();
           const launchLinkUrl = orchestratorLink || pub.links.find(l => l.type === 'text/html')?.href;
           
           if (launchLinkUrl) {
              remoteUrl = launchLinkUrl;
               // identifier example: https://.../#/form/registration-role-1
               const parts = (pub.metadata?.identifier || '').split('/form/');
               if (parts.length > 1) {
                 formId = parts[1];
               }
           }
 
           return {
              formId: formId,
              formTitle: pub.metadata?.title || 'Untitled Form',
              remoteUrl: remoteUrl
           };
        });
        return forms;
      } catch (err) {
        console.error('Failed to fetch OPDS forms', err);
        throw err;
      }
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

  async getGroupById(groupId: string): Promise<OpdsGroup | any> {
      if (this.isRespectLogin()) {
          console.log('Fetching OPDS Group:', groupId);
          try {
             return await firstValueFrom(this.opds.getGroupById(groupId));
          } catch(err) {
             console.error('Failed to fetch OPDS group', err);
             throw err;
          }
      }
      // TODO: Implement standard API fetch for group details if needed
      throw new Error('Get Group By ID is only supported in Respect Login mode currently.');
  }

  async getFormById(formId: string): Promise<OpdsForm | any> {
      if (this.isRespectLogin()) {
          console.log('Fetching OPDS Form:', formId);
          try {
             return await firstValueFrom(this.opds.getFormById(formId));
          } catch(err) {
             console.error('Failed to fetch OPDS form', err);
             throw err;
          }
      }
       // TODO: Implement standard API fetch for form details if needed
       throw new Error('Get Form By ID is only supported in Respect Login mode currently.');
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

  // ─── Android Storage Helpers ─────
  // FLOW: Download → Store → Retrieve
  // 1. getAndroidStoragePathForResource(url) – maps a remote URL to a local relative path
  // 2. downloadAndStoreResource(path, url) – downloads the resource directly to storage via FileTransfer
  // 3. readFormFromStorage(formPath) – reads a stored form (HTML) and returns content + baseUrl

  /** Convert a full resource URL to a relative path for local storage (under releases/…). */
  getAndroidStoragePathForResource(resourceUrl: string): string | null {
    try {
      const url = new URL(resourceUrl);

      const releasesIndex = url.pathname.indexOf('/releases/');
      if (releasesIndex === -1) return null;

      let relativePath = url.pathname.substring(releasesIndex + 1);

      // Handle URLs with a trailing slash or no file extension → append index.html
      if (relativePath.endsWith('/')) {
        relativePath = relativePath.slice(0, -1);
      }

      const segments = relativePath.split('/');
      const lastSegment = segments[segments.length - 1];

      if (!lastSegment.includes('.')) {
        relativePath = relativePath + '/index.html';
      }

      return relativePath;

    } catch {
      return null;
    }
  }

  /** Download a remote resource and save it directly to Data storage using native FileTransfer. */
  async downloadAndStoreResource(
    androidRelativePath: string,
    resourceUrl: string
  ): Promise<void> {
    try {
      const parentDir = androidRelativePath.substring(0, androidRelativePath.lastIndexOf('/'));
      if (parentDir) {
        try {
          await Filesystem.mkdir({
            path: parentDir,
            directory: Directory.Data,
            recursive: true,
          });
        } catch (err: any) {
          if (!err?.message?.includes('exists')) {
            // ignore error if directory already exists otherwise throw error
            throw err;
          }
        }
      }

      const { uri } = await Filesystem.getUri({
        path: androidRelativePath,
        directory: Directory.Data,
      });

      // Native download — handles all content types, no JS bridge data overhead
      await FileTransfer.downloadFile({ url: resourceUrl, path: uri });

      console.log('[STORED]', androidRelativePath);

    } catch (err) {
      console.error('Download/store failed:', resourceUrl, err);
      throw err;
    }
  }

  /** Read a previously stored form from Data storage and return its HTML content + base URL. */
  async readFormFromStorage(formPath: string): Promise<{ content: string; baseUrl: string }> {
    // Read the stored HTML content (throws if file doesn't exist)
    const file = await Filesystem.readFile({
      path: formPath,
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    });

    // Resolve the file URI so we can build a base URL for relative asset references
    const { uri } = await Filesystem.getUri({
      path: formPath,
      directory: Directory.Data,
    });

    const folderUri = uri.substring(0, uri.lastIndexOf('/') + 1);
    const baseUrl = Capacitor.convertFileSrc(folderUri);

    return { content: file.data as string, baseUrl };
  }

}
