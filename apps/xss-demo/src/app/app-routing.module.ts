import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'default-sanitization',
    loadChildren: () =>
      import(
        '@angular-web-security/xss-demo/feature-default-sanitization'
      ).then(
        ({ XssDemoFeatureDefaultSanitizationModule }) =>
          XssDemoFeatureDefaultSanitizationModule
      ),
  },
  {
    path: 'bypass-security',
    loadChildren: () =>
      import('@angular-web-security/xss-demo/feature-bypass-security').then(
        ({ XssDemoFeatureBypassSecurityModule }) =>
          XssDemoFeatureBypassSecurityModule
      ),
  },
  {
    path: '**',
    redirectTo: 'default-sanitization',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
