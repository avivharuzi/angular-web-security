import { generateToken } from '@angular-web-security/csrf-api/util-helpers';

import * as expressAsyncHandler from 'express-async-handler';
import { RequestHandler } from 'express';

import { AuthCookie } from './auth-cookie';
import { AuthService } from './auth.service';
import { BadRequestError } from '../errors/bad-request-error';
import { UserService } from '../users/user.service';

export class AuthController {
  static user(): RequestHandler {
    return expressAsyncHandler(async (_req, res) => {
      const { user } = res.locals;
      if (user) {
        res.send(user);
      } else {
        res.send();
      }
    });
  }

  static logout(): RequestHandler {
    return expressAsyncHandler(async (_req, res) => {
      res.clearCookie(AuthCookie.AccessToken);
      res.clearCookie(AuthCookie.XSRFToken);
      res.send();
    });
  }

  static login(): RequestHandler {
    return expressAsyncHandler(async (req, res) => {
      const { body } = req;
      if (!body.userName && !body.password) {
        throw new BadRequestError();
      }
      const user = UserService.getUserByUserLogin({
        username: body.username,
        password: body.password,
      });
      const accessToken = await AuthService.createAccessToken(user);
      const xsrfToken = await generateToken();
      const cookieOptions = { httpOnly: true, sameSite: false };
      res.cookie(AuthCookie.AccessToken, accessToken, cookieOptions);
      res.cookie(AuthCookie.XSRFToken, xsrfToken, cookieOptions);
      res.send(user);
    });
  }
}
