import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FullDashboardComponent } from './full-dashboard/full-dashboard.component';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { PageNotFoundComponent } from './simple-pages/page-not-found/page-not-found.component';
import { layoutRoutes } from './layout-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(layoutRoutes)],
  declarations: [
    FullDashboardComponent,
    SimpleDashboardComponent,
    PageNotFoundComponent
  ]
})
export class LayoutModule {}
