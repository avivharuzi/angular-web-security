import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BypassSecurityComponent } from './bypass-security.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BypassSecurityComponent },
    ]),
  ],
  declarations: [BypassSecurityComponent],
})
export class XssDemoFeatureBypassSecurityModule {}
