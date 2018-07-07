import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: '../layout/layout.module#LayoutModule'
  }
];
