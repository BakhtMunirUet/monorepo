import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashbaordRoutingModule } from './customer-dashbaord-routing.module';
import { CustomerDashbaordComponent } from './customer-dashbaord.component';


@NgModule({
  declarations: [
    CustomerDashbaordComponent
  ],
  imports: [
    CommonModule,
    CustomerDashbaordRoutingModule
  ]
})
export class CustomerDashbaordModule { }
