import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { ServerInputComponent } from 'app/shared/components/server-input/server-input.component';
import { ApiService } from 'app/core/services/api.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.page.html',
  styleUrls: ['./server.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    ServerInputComponent
  ]
})
export class ServerPage {
  private api = inject(ApiService);
  private router = inject(Router);

  onServerSubmit(serverUrl: string): void {
    if (!serverUrl) {
      return;
    }

    try {
      this.api.saveServerUrl(serverUrl);
      this.router.navigateByUrl('/login');
    } catch (err: any) {
      console.error('Failed to save server', err);
      this.api.showToast('Failed to save server', 'danger');
    }
  }
}
