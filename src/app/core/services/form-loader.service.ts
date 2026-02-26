import { Injectable, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api.service';
import { OpdsService } from './opds.service';

const RETURN_URL_KEY = 'tangerine_return_url';

/**
 * Service for loading and rendering form HTML with a close button overlay.
 * Used by both deep link handling (app.ts) and forms list (forms.page.ts).
 */
@Injectable({
  providedIn: 'root',
})
export class FormLoaderService {
  private api = inject(ApiService);
  private opds = inject(OpdsService);

  /**
   * High-level method that handles the full form loading flow for any platform.
   * - Android: downloads OPDS resources to storage (if needed), then renders locally.
   * - Web: fetches from the server URL and renders with overlay.
   *
   * @param groupId - The group ID
   * @param formId - The form ID
   * @param extraData - Optional extra data for hash fragment (auth, endpoint, etc.)
   */
  async loadFormForPlatform(groupId: string, formId: string, extraData: Record<string, any> = {}): Promise<void> {
    const formPath = this.getFormUrl(groupId, formId);
    const hashFragment = this.getFormHashFragment(formId, extraData);
    const isAndroid = Capacitor.getPlatform() === 'android';

    if (isAndroid) {
      try {
        const storagePath = formPath.replace(/^\//, '');

        // Check if form is already downloaded — skip download if so
        let alreadyDownloaded = false;
        try {
          await Filesystem.stat({ path: storagePath, directory: Directory.Data });
          alreadyDownloaded = true;
          console.log('[FORM] Already downloaded, skipping download:', storagePath);
        } catch {
          // File doesn't exist — need to download
        }

        if (!alreadyDownloaded) {
          // 1. Fetch the full OPDS form metadata to get resource URLs
          const opdsForm = await firstValueFrom(this.opds.getFormById(formId));
          const allResources = [
            ...opdsForm.resources,
            ...opdsForm.readingOrder,
            ...opdsForm.images,
          ];

          // Also include the orchestrator (main HTML) link
          const orchestratorUrl = opdsForm.getOrchestratorLink();
          if (orchestratorUrl) {
            allResources.push({ rel: 'self', href: orchestratorUrl });
          }

          // 2. Download each resource using existing helpers
          console.log(`[FORM] Downloading ${allResources.length} resources...`);
          for (const res of allResources) {
            const localPath = this.api.getAndroidStoragePathForResource(res.href);
            if (!localPath) {
              console.warn('[FORM] Skipping resource (no local path):', res.href);
              continue;
            }
            try {
              await this.api.downloadAndStoreResource(localPath, res.href);
            } catch (err) {
              console.warn('[FORM] Failed to download resource, continuing:', res.href, err);
            }
          }
        }

        // 3. Read the main HTML from storage and render
        const { content, baseUrl } = await this.api.readFormFromStorage(storagePath);
        console.log('[FORM] Rendering from storage:', storagePath, 'with hash:', hashFragment);
        this.renderFromContent(content, baseUrl, hashFragment);

      } catch (err) {
        console.error('[FORM] Download/render failed:', err);
        await this.api.showToast('Error loading form.', 'danger');
      }
    } else {
      // Web: fetch and render from server directly
      const serverUrl = this.api.getServerUrl() || '';
      const formUrl = `${serverUrl}${formPath}`;
      console.log('[FORM] Opening form (web):', formUrl, 'with hash:', hashFragment);

      try {
        await this.loadFormWithOverlay(formUrl, hashFragment);
      } catch (err) {
        console.error('[FORM] Failed to load form:', err);
        await this.api.showToast('Error loading form.', 'danger');
      }
    }
  }
  /**
   * Loads a form HTML file and renders it with a close button overlay.
   * @param url - The URL to the form's index.html
   * @param hashFragment - The hash fragment for the form router (e.g., '#/form/formId')
   * @param returnUrl - Optional URL to return to when close is clicked. Defaults to current URL.
   */
  /**
   * Saves the current Angular app URL to sessionStorage before document.write()
   * replaces the page. sessionStorage survives document.write() unlike in-memory state.
   */
  private saveReturnUrl(): void {
    const currentUrl = window.location.href;
    // Only save if it's a valid Angular URL (not a capacitor file path)
    if (!currentUrl.includes('_capacitor_file_') && !currentUrl.includes('/data/user/')) {
      sessionStorage.setItem(RETURN_URL_KEY, currentUrl);
    }
  }

  /**
   * Builds the close button HTML. The onclick reads from sessionStorage at click time,
   * ensuring it always has the correct Angular URL even after document.write().
   * Uses location.replace() to prevent history stack corruption.
   */
  private buildCloseButtonHtml(): string {
    return `
      <div id="tangerine-close-overlay" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: #fff;
        border-bottom: 1px solid #ccc;
        z-index: 99999;
        display: flex;
        align-items: center;
        padding-left: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      ">
        <button onclick="window.location.replace(sessionStorage.getItem('${RETURN_URL_KEY}') || window.location.origin)" style="
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #333;
          font-weight: bold;
          display: flex;
          align-items: center;
        ">
          &#x2715; &nbsp; <span style="font-size: 16px; font-weight: normal;">Close</span>
        </button>
      </div>
      <style>
        body {
          padding-top: 50px !important;
        }
      </style>
    `;
  }

  /**
   * Loads a form HTML file and renders it with a close button overlay.
   * @param url - The URL to the form's index.html
   * @param hashFragment - The hash fragment for the form router (e.g., '#/form/formId')
   */
  async loadFormWithOverlay(url: string, hashFragment: string): Promise<void> {
    this.saveReturnUrl();

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error('Failed to fetch form:', response.status);
        return;
      }

      const htmlContent = await response.text();

      // Determine Base URL for assets
      const lastSlashIndex = url.lastIndexOf('/');
      const baseUrl = url.substring(0, lastSlashIndex + 1);

      // Parse and inject content
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');

      // Inject <base> tag if missing
      if (!doc.querySelector('base')) {
        const baseTag = doc.createElement('base');
        baseTag.href = baseUrl;
        doc.head.insertBefore(baseTag, doc.head.firstChild);
      }

      // Inject Close Button at start of body
      doc.body.insertAdjacentHTML('afterbegin', this.buildCloseButtonHtml());

      // Render
      document.open();
      document.write(doc.documentElement.outerHTML);
      document.close();

      // Append Hash if needed
      if (hashFragment) {
        // Use replaceState or location.replace to avoid pushing a new history entry
        // This ensures the back button goes back to the app, not just back to the pre-hash state
        history.replaceState(null, '', hashFragment);
      }
    } catch (err) {
      console.error('Could not load form html', err);
      throw err;
    }
  }

  /**
   * Renders pre-fetched form HTML content with a close button overlay.
   * Used for offline Android forms where the HTML is already loaded from device storage.
   * @param htmlContent - The raw HTML content of the form
   * @param baseUrl - The base URL for resolving relative asset paths
   * @param hashFragment - The hash fragment for the form router (e.g., '#/form/formId')
   */
  renderFromContent(htmlContent: string, baseUrl: string, hashFragment: string): void {
    this.saveReturnUrl();

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    if (!doc.querySelector('base')) {
      const baseTag = doc.createElement('base');
      baseTag.href = baseUrl;
      doc.head.insertBefore(baseTag, doc.head.firstChild);
    }

    doc.body.insertAdjacentHTML('afterbegin', this.buildCloseButtonHtml());

    document.open();
    document.write(doc.documentElement.outerHTML);
    document.close();

    if (hashFragment) {
      history.replaceState(null, '', hashFragment);
    }
  }

  /**
   * Constructs the local form URL path.
   * @param groupId - The group ID
   * @param formId - The form ID
   * @returns The local form URL path
   */
  getFormUrl(groupId: string, formId: string): string {
    return `/releases/prod/online-survey-apps/${groupId}/${formId}/index.html`;
  }

  /**
   * Constructs the form hash fragment.
   * @param formId - The form ID
   * @returns The hash fragment
   */
  getFormHashFragment(formId: string, data?: any): string {
    let hash = `#/form/${formId}`;
    if (data?.auth) {
      const params = new URLSearchParams();
      params.append('auth', data.auth);
      params.append('endpoint', data.endpoint);
      params.append('actor', JSON.stringify({ name: data.name, mbox: data.mbox }));
      hash += `?${params.toString()}`;
    }
    return hash;
  }
}
