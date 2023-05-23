import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashbaordComponent } from './customer-dashbaord.component';

const routes: Routes = [{ path: '', component: CustomerDashbaordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashbaordRoutingModule { }
