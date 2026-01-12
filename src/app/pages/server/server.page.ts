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

  async onServerSubmit(serverUrl: string): Promise<void> {
    if (!serverUrl) {
      return;
    }

    const isServerValid = await this.api.validateServer(serverUrl);
    if (isServerValid) {
      this.router.navigateByUrl('/login');
    }
  }
}
