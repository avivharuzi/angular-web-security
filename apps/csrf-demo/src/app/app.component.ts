import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthFacade } from '@angular-web-security/csrf-demo/auth/data-access';

@Component({
  selector: 'csrf-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  user$ = this.authFacade.user$;

  constructor(private authFacade: AuthFacade, private router: Router) {}

  onLogout(): void {
    this.authFacade.logout().subscribe(() => this.router.navigate(['/login']));
  }
}
