import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { FormListComponent } from 'app/shared/components/form-list/form-list.component';
import { ApiService, PublishedForm } from 'app/core/services/api.service';
import { IonContent } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: true,
  imports: [HeaderComponent, FormListComponent, IonContent],
})
export class FormsPage implements OnInit {
  forms: PublishedForm[] = [];
  loading = false;
  groupId: string = '';

  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  async ngOnInit(): Promise<void> {
    this.groupId = this.route.snapshot.paramMap.get('groupId') || '';
    if (this.groupId) {
      this.loadForms();
    }
  }

  async loadForms(): Promise<void> {
    this.loading = true;
    try {
      this.forms = await this.api.getPublishedFormsWithTitle(this.groupId);
    } catch (err) {
      console.error('Failed to fetch forms:', err);
      await this.api.showToast('Failed to load forms', 'danger');
    } finally {
      this.loading = false;
    }
  }

  onFormSelect(form: PublishedForm): void {
    const serverUrl = this.api.getServerUrl();
    const isAppOffline = true; //change later
    const isAndroid = Capacitor.getPlatform() === 'android';

    const formPath =
      `/releases/prod/online-survey-apps/${this.groupId}/${form.formId}/index.html`;

    const formUrl =
      isAndroid && isAppOffline
        ? formPath
        : `${serverUrl}${formPath}`;

    // Note: The original code appended #/form/${form.formId} which is the hash fragment for the form app router.
    // We will simulate that by loading the index.html and ensuring the hash is respected or appended if needed,
    // but typically fetch gets the file content. The has fragment stays in the URL.
    // However, since we are rewriting the document, we want the base entry to be correct.

    // Pass the full URL including hash for the context, but fetch the HTML file part.
    // Actually, simple fetch of index.html is enough, the inner app logic handles the hash if we push state or if it's default.
    // Let's stick to fetching the index.html.


    this.renderFormWithOverlay(
      formUrl,
      `#/form/${form.formId}`,
      isAndroid && isAppOffline
    );
  }

  private async renderFormWithOverlay(
    url: string,
    hashFragment: string,
    isOfflineAndroid: boolean
  ): Promise<void> {
    const returnUrl = window.location.href;

    if (isOfflineAndroid) {
      // Read the previously downloaded form from Data storage
      const formPath = url.replace(/^\//, '');

      try {
        const { content, baseUrl } = await this.api.readFormFromStorage(formPath);

        this.injectAndRender(
          content,
          baseUrl,
          returnUrl,
          hashFragment
        );
      } catch (err) {
        console.error('Offline load failed', err);
        this.api.showToast('Error loading form.', 'danger');
      }

      return;
    }

    // Online mode – fetch the form HTML from the server
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (htmlContent) => {
        // Determine Base URL for assets
        // If url is /path/to/index.html, base is /path/to/
        const lastSlashIndex = url.lastIndexOf('/');
        const baseUrl = url.substring(0, lastSlashIndex + 1);

        this.injectAndRender(
          htmlContent,
          baseUrl,
          returnUrl,
          hashFragment
        );
      },
    });
  }

  private injectAndRender(
    htmlContent: string,
    baseUrl: string,
    returnUrl: string,
    hashFragment: string
  ): void {
    // Prepare the Close Button HTML and Styles
    const closeButtonHtml = `
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
        <button onclick="window.location.href='${returnUrl}'" style="
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

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    if (!doc.querySelector('base')) {
      const baseTag = doc.createElement('base');
      baseTag.href = baseUrl;
      doc.head.insertBefore(baseTag, doc.head.firstChild);
    }

    doc.body.insertAdjacentHTML('afterbegin', closeButtonHtml);

    // Render
    document.open();
    document.write(doc.documentElement.outerHTML);
    document.close();

    // Append Hash if needed (to trigger the router of the loaded app)
    // Since document.write replaces the page, the URL bar might remain what it was or change depending on browser.
    // We might want to ensure the address bar reflects the target context or at least the app runs.
    // If the form app relies on window.location.hash, we might need to set it.
    if (hashFragment) {
      window.location.hash = hashFragment;
    }
  }

  async onLogout(): Promise<void> {
    await this.api.logout();
  }
}
