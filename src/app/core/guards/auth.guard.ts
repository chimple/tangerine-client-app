import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/core/services/api.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  private api = inject(ApiService);
  private router = inject(Router);

  canActivate(): boolean {
    if (this.api.isUserLoggedIn()) return true;
    this.router.navigateByUrl('/login');
    return false;
  }
}
