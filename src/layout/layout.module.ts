import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatAutocompleteModule
} from '@angular/material';

import { FullDashboardComponent } from './full-dashboard/full-dashboard.component';
import { SimpleDashboardComponent } from './simple-dashboard/simple-dashboard.component';
import { PageNotFoundComponent } from './simple-pages/page-not-found/page-not-found.component';
import { layoutRoutes } from './layout-routing.module';
import { LoginComponent } from './simple-pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    // Angular Materials
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatAutocompleteModule,

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
