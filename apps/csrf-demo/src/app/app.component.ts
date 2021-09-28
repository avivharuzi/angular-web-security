import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthFacade } from '@angular-web-security/csrf-demo/auth/data-access';
import { NavbarLink } from '@angular-web-security/shared/ui-navbar';

@Component({
  selector: 'csrf-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  navbarLinks$: Observable<NavbarLink[]> = this.authFacade.user$.pipe(
    map((user) => {
      if (!user) {
        return [];
      }
      return [
        {
          title: `Hello, ${user.displayName}`,
        },
        {
          title: 'Logout',
          actionName: this.LOGOUT_ACTION_NAME,
        },
      ];
    })
  );

  private readonly LOGOUT_ACTION_NAME = 'logout';

  constructor(private authFacade: AuthFacade, private router: Router) {}

  onNavbarAction(actionName: string) {
    if (actionName === this.LOGOUT_ACTION_NAME) {
      this.logout();
    }
  }

  private logout(): void {
    this.authFacade.logout().subscribe(() => this.router.navigate(['/login']));
  }
}
