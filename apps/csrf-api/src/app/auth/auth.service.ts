import { User } from '@angular-web-security/csrf-api/data-access-users';
import {
  signJWT,
  verifyJWT,
} from '@angular-web-security/csrf-api/util-helpers';

import { environment } from '../../environments/environment';
import { JWTDecoded } from './jwt-decoded';

export class AuthService {
  static createAccessToken(user: User): Promise<string> {
    return signJWT(user.id, {
      expiresIn: 3600,
      secret: environment.jwtSecret,
    });
  }

  static async getUserIdFromAccessToken(accessToken: string): Promise<string> {
    const { sub: userID } = await verifyJWT<JWTDecoded>(
      accessToken,
      environment.jwtSecret
    );
    return userID;
  }
}
