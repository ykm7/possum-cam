import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './simple-pages/page-not-found/page-not-found.component';
import { FullDashboardComponent } from './full-dashboard/full-dashboard.component';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { LoginComponent } from './simple-pages/login/login.component';
import { AuthGuard } from '../core/guard/auth-guard.service';

export const layoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'device',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullDashboardComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'device',
      loadChildren: '../device/device.module#DeviceModule'
    }]
  },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: SimpleDashboardComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];
