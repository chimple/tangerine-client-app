import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { FormListComponent } from 'app/shared/components/form-list/form-list.component';
import { ApiService, PublishedForm } from 'app/core/services/api.service';
import { CONSTANTS } from 'app/shared/constants';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FormListComponent
  ]
})
export class FormsPage implements OnInit {
  forms: PublishedForm[] = [];
  loading = false;
  groupId: string = '';

  private api = inject(ApiService);
  private route = inject(ActivatedRoute);

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
    const formUrl = `${CONSTANTS.API_BASE}/releases/prod/online-survey-apps/${this.groupId}/${form.formId}/#/form/${form.formId}`;
    window.open(formUrl, '_blank');
  }
}
