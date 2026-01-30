import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { FormListComponent } from 'app/shared/components/form-list/form-list.component';
import { ApiService, PublishedForm } from 'app/core/services/api.service';
import { CONSTANTS } from 'app/shared/constants';
import { IonContent } from '@ionic/angular/standalone';

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
  // private router = inject(Router); // Router not strictly needed if we use document.write, but good to keep if we need to navigate back using Angular later (though document.write kills the app instance)
  private http = inject(HttpClient);

  ngOnInit(): void {
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
    const isAppOffline = true; //call bridge method to check if the app is offline later

    // Construct the full URL to the form
    const formUrl = isAppOffline
      ? `/releases/prod/online-survey-apps/${this.groupId}/${form.formId}/index.html`
      : `${serverUrl}/releases/prod/online-survey-apps/${this.groupId}/${form.formId}/index.html`;

    // Note: The original code appended #/form/${form.formId} which is the hash fragment for the form app router.
    // We will simulate that by loading the index.html and ensuring the hash is respected or appended if needed,
    // but typically fetch gets the file content. The has fragment stays in the URL.
    // However, since we are rewriting the document, we want the base entry to be correct.

    // Pass the full URL including hash for the context, but fetch the HTML file part.
    // Actually, simple fetch of index.html is enough, the inner app logic handles the hash if we push state or if it's default.
    // Let's stick to fetching the index.html.

    this.renderFormWithOverlay(formUrl, `#/form/${form.formId}`);
  }

  private renderFormWithOverlay(url: string, hashFragment: string): void {
    // Capture the current URL (the Forms list page) to return to later
    const returnUrl = window.location.href;

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (htmlContent) => {
        // 1. Determine Base URL for assets
        // If url is /path/to/index.html, base is /path/to/
        const lastSlashIndex = url.lastIndexOf('/');
        const baseUrl = url.substring(0, lastSlashIndex + 1);

        // 2. Prepare the Close Button HTML and Styles
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
              padding-top: 50px !important; /* Push content down */
            }
          </style>
        `;

        // 3. Inject Content
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');

        // Inject <base> tag if missing
        if (!doc.querySelector('base')) {
          const baseTag = doc.createElement('base');
          baseTag.href = baseUrl;
          doc.head.insertBefore(baseTag, doc.head.firstChild);
        }

        // Inject Close Button at start of body
        doc.body.insertAdjacentHTML('afterbegin', closeButtonHtml);

        // 4. Render
        document.open();
        document.write(doc.documentElement.outerHTML);
        document.close();

        // 5. Append Hash if needed (to trigger the router of the loaded app)
        // Since document.write replaces the page, the URL bar might remain what it was or change depending on browser.
        // We might want to ensure the address bar reflects the target context or at least the app runs.
        // If the form app relies on window.location.hash, we might need to set it.
        if (hashFragment) {
          window.location.hash = hashFragment;
        }
      },
      error: (err) => {
        console.error('Could not load form html', err);
        this.api.showToast('Error loading form.', 'danger');
      },
    });
  }

  async onLogout(): Promise<void> {
    await this.api.logout();
  }
}
