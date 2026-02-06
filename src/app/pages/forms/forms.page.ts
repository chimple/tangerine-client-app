import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { FormListComponent } from 'app/shared/components/form-list/form-list.component';
import { ApiService, PublishedForm } from 'app/core/services/api.service';
import { CONSTANTS } from 'app/shared/constants';
import { IonContent } from "@ionic/angular/standalone";
import {Capacitor} from '@capacitor/core';
import {NativeWebView} from '../../plugin/nativeWebView';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FormListComponent,
    IonContent
]
})
export class FormsPage implements OnInit {
  forms: PublishedForm[] = [];
  loading = false;
  groupId: string = '';

  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

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

  async onFormSelect(form: PublishedForm): Promise<void> {
    const serverUrl = this.api.getServerUrl();
    const formUrl = `${serverUrl}/releases/prod/online-survey-apps/${this.groupId}/${form.formId}/#/form/${form.formId}`;
    if(!Capacitor.isNativePlatform()) {
      window.open(formUrl, '_blank');
    } else {
      try {
        await NativeWebView.open({url: formUrl});
      } catch (error) {
        console.log('Error from capacitor:', error)
      }
    }
  }

  async onLogout(): Promise<void> {
    await this.api.logout();
  }
}
