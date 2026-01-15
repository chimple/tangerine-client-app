import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from 'app/core/services/api.service';

export const redirectGuard: CanActivateFn = () => {
  const api = inject(ApiService);
  const router = inject(Router);

  return router.createUrlTree([
    api.isUserLoggedIn() && api.hasServerUrl() ? '/groups' : '/server'
  ]);
};
