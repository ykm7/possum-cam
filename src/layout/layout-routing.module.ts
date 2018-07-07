import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './simple-pages/page-not-found/page-not-found.component';
import { FullDashboardComponent } from './full-dashboard/full-dashboard.component';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: FullDashboardComponent
    // children: [

    // ]
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
    path: '**',
    component: SimpleDashboardComponent,
    children: [
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];
