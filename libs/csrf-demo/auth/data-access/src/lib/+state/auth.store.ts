import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { User } from '@angular-web-security/csrf-api/data-access-users';

export interface AuthState {
  user: User | null;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super({
      user: null,
    });
  }
}
