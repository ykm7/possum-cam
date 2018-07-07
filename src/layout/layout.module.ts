import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullDashboardComponent } from './full-dashboard/full-dashboard.component';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { PageNotFoundComponent } from './simple-pages/page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FullDashboardComponent,
    SimpleDashboardComponent,
    PageNotFoundComponent
  ]
})
export class LayoutModule {}
