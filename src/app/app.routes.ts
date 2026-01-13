import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { redirectGuard } from './core/guards/redirect.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard],
    children: [] 
  },
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
    path: '',
    canActivateChild: [authGuard],
    children: [
      {
        path: 'groups',
        loadComponent: () =>
          import('./pages/groups/groups.page').then(m => m.GroupsPage)
      },
      {
        path: 'forms/:groupId',
        loadComponent: () =>
          import('./pages/forms/forms.page').then(m => m.FormsPage)
      }
    ]
  }
];
