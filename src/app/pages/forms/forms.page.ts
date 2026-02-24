import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { FormListComponent } from 'app/shared/components/form-list/form-list.component';
import { ApiService, PublishedForm } from 'app/core/services/api.service';
import { FormLoaderService } from 'app/core/services/form-loader.service';
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
    let extraData = {};

    if (this.api.isRespectLogin()) {
      extraData = await this.api.getUserData();
    }

    await this.formLoader.loadFormForPlatform(this.groupId, form.formId, extraData);
  }

  async onLogout(): Promise<void> {
    await this.api.logout();
  }
}
