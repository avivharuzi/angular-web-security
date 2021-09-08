import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'csrf-demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
