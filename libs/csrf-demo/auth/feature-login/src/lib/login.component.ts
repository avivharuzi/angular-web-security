import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthFacade } from '@angular-web-security/csrf-demo/auth/data-access';

@Component({
  selector: 'csrf-demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authFacade
      .login(this.loginForm.value)
      .subscribe(() => this.router.navigate(['/']).then());
  }
}
