import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  User,
  UserLogin,
} from '@angular-web-security/csrf-api/data-access-users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_API_URL = '/api/auth';

  constructor(private httpClient: HttpClient) {}

  user(): Observable<User | null> {
    return this.httpClient
      .get<User>(`${this.AUTH_API_URL}/user`)
      .pipe(map((res) => res ?? null));
  }

  login(userLogin: UserLogin): Observable<User> {
    return this.httpClient.post<User>(`${this.AUTH_API_URL}/login`, userLogin);
  }

  logout(): Observable<void> {
    return this.httpClient.post<void>(`${this.AUTH_API_URL}/logout`, {});
  }
}
