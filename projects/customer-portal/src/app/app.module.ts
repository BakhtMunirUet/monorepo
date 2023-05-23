import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessDeniedPortalModule } from 'projects/portal/src/app/components/access-denied-portal/access-denied-portal.module';
import { AuthGuard } from 'projects/auth-lib/src/lib/guards/auth/auth.guard';
import { RoleAccessGuard } from 'projects/auth-lib/src/lib/guards/role-access/role-access.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AccessDeniedPortalModule],
  providers: [AuthGuard, RoleAccessGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
