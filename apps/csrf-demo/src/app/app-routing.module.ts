import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AuthenticationGuard,
  WithoutAuthenticationGuard,
} from '@angular-web-security/csrf-demo/auth/data-access';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('@angular-web-security/csrf-demo/feature-home').then(
        ({ CsrfDemoFeatureHomeModule }) => CsrfDemoFeatureHomeModule
      ),
  },
  {
    path: 'login',
    canActivate: [WithoutAuthenticationGuard],
    loadChildren: () =>
      import('@angular-web-security/csrf-demo/auth/feature-login').then(
        ({ CsrfDemoAuthFeatureLoginModule }) => CsrfDemoAuthFeatureLoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
