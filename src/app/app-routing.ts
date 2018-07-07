import { Routes } from '@angular/router';

import { PageNotFoundComponent } from '../layout/simple-pages/page-not-found/page-not-found.component';
import { FullDashboardComponent } from '../layout/full-dashboard/full-dashboard.component';
import { SimpleDashboardComponent } from '../layout/simple-dashboard/simple-dashboard.component';

export const appRoutes: Routes = [
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
