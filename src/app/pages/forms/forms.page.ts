import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { FormListComponent } from 'app/shared/components/form-list/form-list.component';
import { ApiService, PublishedForm } from 'app/core/services/api.service';
import { FormLoaderService } from 'app/core/services/form-loader.service';
import { OpdsService } from 'app/core/services/opds.service';
import { IonContent } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { firstValueFrom } from 'rxjs';

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
  private formLoader = inject(FormLoaderService);
  private opds = inject(OpdsService);

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

  async onFormSelect(form: PublishedForm): Promise<void> {
    const formPath = this.formLoader.getFormUrl(this.groupId, form.formId);
    let extraData = {};

    if (this.api.isRespectLogin()) {
      extraData = await this.api.getUserData();
    }

    const hashFragment = this.formLoader.getFormHashFragment(form.formId, extraData);
    const isAndroid = Capacitor.getPlatform() === 'android';

    if (isAndroid) {
      // Android: download OPDS resources to storage, then render locally
      try {
        // 1. Fetch the full OPDS form metadata to get resource URLs
        const opdsForm = await firstValueFrom(this.opds.getFormById(form.formId));
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

        // 3. Read the main HTML from storage and render
        const storagePath = formPath.replace(/^\//, '');
        const { content, baseUrl } = await this.api.readFormFromStorage(storagePath);

        console.log('Rendering form from storage:', storagePath, 'with hash:', hashFragment);
        this.formLoader.renderFromContent(content, baseUrl, hashFragment);

      } catch (err) {
        console.error('Form download/render failed:', err);
        await this.api.showToast('Error loading form.', 'danger');
      }
    } else {
      // Web: fetch and render from server directly
      const serverUrl = this.api.getServerUrl() || '';
      const formUrl = `${serverUrl}${formPath}`;

      console.log('Opening form:', formUrl, 'with hash:', hashFragment);

      try {
        await this.formLoader.loadFormWithOverlay(formUrl, hashFragment);
      } catch (err) {
        console.error('Failed to load form:', err);
        await this.api.showToast('Error loading form.', 'danger');
      }
    }
  }

  async onLogout(): Promise<void> {
    await this.api.logout();
  }
}
