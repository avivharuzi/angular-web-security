import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class SharedUiNavbarModule {}
