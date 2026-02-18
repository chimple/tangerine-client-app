import { Injectable } from '@angular/core';

const RETURN_URL_KEY = 'tangerine_return_url';

/**
 * Service for loading and rendering form HTML with a close button overlay.
 * Used by both deep link handling (app.ts) and forms list (forms.page.ts).
 */
@Injectable({
  providedIn: 'root',
})
export class FormLoaderService {
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
