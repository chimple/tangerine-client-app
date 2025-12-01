import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular/standalone';
import { HeaderComponent } from 'app/shared/components/header/header.component';
import { LoginCardComponent } from 'app/shared/components/login-card/login-card.component';
import { AuthService } from 'app/core/services/auth.service';
import { CONSTANTS } from 'app/shared/constants';

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

  private auth = inject(AuthService);
  private router = inject(Router);
  private toast = inject(ToastController);

  onLogin(credentials: { username: string; password: string }): void {
    if (!credentials.username || !credentials.password || this.loading) {
      return;
    }

    this.loading = true;

    this.auth.login(credentials).subscribe({
      next: res => {
        const token = res?.data?.token;
        if (token) {
          localStorage.setItem(CONSTANTS.AUTH_TOKEN, token);
          this.loading = false;
          this.showToast('Login successful', 'success');
          this.router.navigateByUrl('/groups');
        } else {
          this.loading = false;
          this.showToast('Invalid server response', 'danger');
        }
      },
      error: err => {
        console.error('Login failed', err);
        this.loading = false;
        this.showToast('Login failed. Please check your credentials.', 'danger');
      }
    });
  }

  private async showToast(msg: string, color: string = 'primary'): Promise<void> {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color,
      position: 'bottom'
    });
    toast.present();
  }
}

