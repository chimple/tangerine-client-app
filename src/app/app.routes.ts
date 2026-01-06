import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'server', pathMatch: 'full' },
  {
    path: 'server',
    loadComponent: () =>
      import('./pages/server/server.page').then(m => m.ServerPage)
  },
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
  {
    path: 'forms/:groupId',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/forms/forms.page').then(m => m.FormsPage)
  },
];
