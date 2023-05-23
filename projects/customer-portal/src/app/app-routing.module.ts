import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/auth-lib/src/lib/guards/auth/auth.guard';
import { RoleAccessGuard } from 'projects/auth-lib/src/lib/guards/role-access/role-access.guard';
import { AccessDeniedPortalComponent } from 'projects/portal/src/app/components/access-denied-portal/access-denied-portal.component';

const routes: Routes = [
  {
    path: 'customer-dashboard',
    loadChildren: () =>
      import('./customer-dashbaord/customer-dashbaord.module').then(
        (m) => m.CustomerDashbaordModule
      ),
    canActivate: [AuthGuard, RoleAccessGuard],
  },

  {
    path: 'access-denied',
    component: AccessDeniedPortalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
