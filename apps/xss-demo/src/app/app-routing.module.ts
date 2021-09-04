import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(
        '@angular-web-security/xss-demo/feature-default-sanitization'
      ).then(
        ({ XssDemoFeatureDefaultSanitizationModule }) =>
          XssDemoFeatureDefaultSanitizationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
