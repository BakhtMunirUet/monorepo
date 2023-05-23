import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccessDeniedModule } from 'projects/shared-lib/src/lib/components/access-denied/access-denied.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AccessDeniedModule
  ]
})
export class DashboardModule { }
