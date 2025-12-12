import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'groups',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/groups/groups.page').then(m => m.GroupsPage)
  },
];
