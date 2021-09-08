import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import {
  User,
  UserLogin,
} from '@angular-web-security/csrf-api/data-access-users';

import { AuthQuery } from '../+state/auth.query';
import { AuthService } from '../infrastructure/auth.service';
import { AuthStore } from '../+state/auth.store';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  user$: Observable<User | null> = this.authQuery.select((state) => state.user);
  isUserLoggedIn$: Observable<boolean> = this.user$.pipe(map((user) => !!user));
  isUserLoggedOut$: Observable<boolean> = this.user$.pipe(map((user) => !user));

  constructor(
    private authQuery: AuthQuery,
    private authService: AuthService,
    private authStore: AuthStore
  ) {}

  loadUser(): Observable<void> {
    return this.authService.user().pipe(
      tap((user) =>
        this.authStore.update({
          user,
        })
      ),
      switchMap(() => EMPTY),
      catchError(() => EMPTY)
    );
  }

  login(userLogin: UserLogin): Observable<User> {
    return this.authService.login(userLogin).pipe(
      tap((user) =>
        this.authStore.update({
          user,
        })
      )
    );
  }

  logout(): Observable<void> {
    return this.authService.logout().pipe(
      tap(() =>
        this.authStore.update({
          user: null,
        })
      )
    );
  }
}
