import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FullDashboardComponent } from './full-dashboard/full-dashboard.component';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { PageNotFoundComponent } from './simple-pages/page-not-found/page-not-found.component';
import { layoutRoutes } from './layout-routing.module';
import { LoginComponent } from './simple-pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule.forChild(layoutRoutes)
  ],
  declarations: [
    FullDashboardComponent,
    SimpleDashboardComponent,
    PageNotFoundComponent,
    LoginComponent
  ]
})
export class LayoutModule {}
