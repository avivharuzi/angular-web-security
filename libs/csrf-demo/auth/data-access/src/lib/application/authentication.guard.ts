import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { AuthFacade } from './auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authFacade.isUserLoggedIn$.pipe(
      first(),
      tap((isUserLoggedIn) => {
        if (!isUserLoggedIn) {
          this.router.navigate(['/login']).then();
        }
      })
    );
  }
}
