import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { LoginCardComponent } from 'app/shared/components/login-card/login-card.component';
import { ApiService } from 'app/core/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    LoginCardComponent
  ]
})
export class LoginPage {
  loading = false;

  private api = inject(ApiService);
  private router = inject(Router);

  async onLogin(credentials: { username: string; password: string }): Promise<void> {
    if (!credentials.username || !credentials.password || this.loading) {
      return;
    }

    this.loading = true;

    try {
      const res = await this.api.login(credentials);
      const token = res?.data?.token;

      if (token) {
        await this.api.showToast('Login successful', 'success');
        await this.router.navigateByUrl('/groups');
      } else {
        await this.api.showToast('Invalid server response', 'danger');
      }
    } catch (err: any) {
        console.error('Login failed', err);
        await this.api.showToast('Invalid username or password', 'danger');
    } finally {
        this.loading = false;
    }
  }
}
