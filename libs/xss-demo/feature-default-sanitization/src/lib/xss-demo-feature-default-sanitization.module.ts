import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DefaultSanitizationComponent } from './default-sanitization.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DefaultSanitizationComponent },
    ]),
  ],
  declarations: [DefaultSanitizationComponent],
})
export class XssDemoFeatureDefaultSanitizationModule {}
