import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessDeniedComponent } from './access-denied.component';

@NgModule({
  declarations: [AccessDeniedComponent],
  exports: [AccessDeniedComponent],
  imports: [CommonModule],
})
export class AccessDeniedModule {}
