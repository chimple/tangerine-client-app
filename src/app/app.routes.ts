import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'groups',
    loadComponent: () =>
      import('./pages/groups/groups.page').then(m => m.GroupsPage)
  },
];
