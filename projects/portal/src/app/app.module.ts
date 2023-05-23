import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from 'projects/auth-lib/src/lib/guards/auth/auth.guard';
import { RoleAccessGuard } from 'projects/auth-lib/src/lib/guards/role-access/role-access.guard';
import { AccessDeniedPortalModule } from './components/access-denied-portal/access-denied-portal.module';
import { AuthModule } from 'projects/auth-lib/src/lib/components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccessDeniedPortalModule,
    AuthModule
  ],
  providers: [
    AuthGuard,
    RoleAccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
