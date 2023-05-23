import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessDeniedPortalComponent } from './access-denied-portal.component';
import { AccessDeniedModule } from 'projects/shared-lib/src/lib/components/access-denied/access-denied.module';



@NgModule({
  declarations: [
    AccessDeniedPortalComponent
  ],
  imports: [
    CommonModule,
    AccessDeniedModule
  ]
})
export class AccessDeniedPortalModule { }
