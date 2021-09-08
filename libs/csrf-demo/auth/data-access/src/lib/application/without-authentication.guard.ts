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
export class WithoutAuthenticationGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authFacade.isUserLoggedOut$.pipe(
      first(),
      tap((isUserLoggedOut) => {
        if (!isUserLoggedOut) {
          this.router.navigate(['/']).then();
        }
      })
    );
  }
}
