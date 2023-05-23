import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/auth-lib/src/lib/guards/auth/auth.guard';
import { RoleAccessGuard } from 'projects/auth-lib/src/lib/guards/role-access/role-access.guard';
import { AccessDeniedComponent } from 'projects/shared-lib/src/lib/components/access-denied/access-denied.component';
import { AccessDeniedPortalComponent } from './components/access-denied-portal/access-denied-portal.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard, RoleAccessGuard],
  },

  {
    path: 'access-denied',
    component: AccessDeniedPortalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
