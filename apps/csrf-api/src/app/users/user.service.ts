import {
  User,
  UserLogin,
} from '@angular-web-security/csrf-api/data-access-users';

import { fakeUsers } from './fake-users';
import { NotFoundError } from '../errors/not-found-error';

export class UserService {
  static getById(id: string): User {
    const user = fakeUsers.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundError();
    }
    return user;
  }

  static getUserByUserLogin(userLogin: UserLogin): User {
    const user = fakeUsers.find(
      (user) =>
        user.userName === userLogin.username &&
        user.password === userLogin.password
    );
    if (!user) {
      throw new NotFoundError();
    }
    return user;
  }
}
