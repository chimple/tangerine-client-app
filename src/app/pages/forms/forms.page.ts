import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { FormListComponent } from 'app/shared/components/form-list/form-list.component';
import { ApiService, PublishedForm } from 'app/core/services/api.service';
import { FormLoaderService } from 'app/core/services/form-loader.service';
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
  private formLoader = inject(FormLoaderService);

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
    const isAppOffline = true; // TODO: replace with actual offline detection

    if (isAndroid && isAppOffline) {
      // Offline Android: read the form from local device storage
      try {
        const storagePath = formPath.replace(/^\//, '');
        const { content, baseUrl } = await this.api.readFormFromStorage(storagePath);

        console.log('Opening offline form from storage:', storagePath, 'with hash:', hashFragment);
        this.formLoader.renderFromContent(content, baseUrl, hashFragment);
      } catch (err) {
        console.error('Offline form load failed:', err);
        await this.api.showToast('Error loading form.', 'danger');
      }
    } else {
      // Online: build the full server URL and fetch from the server
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
