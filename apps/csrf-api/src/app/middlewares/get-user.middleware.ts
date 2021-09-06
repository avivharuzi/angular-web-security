import { NextFunction, Request, Response } from 'express';

import { AuthCookie } from '../auth/auth-cookie';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../users/user.service';

export const getUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies[AuthCookie.AccessToken];
  if (!accessToken) {
    return next();
  }

  let userId: string;
  try {
    userId = await AuthService.getUserIdFromAccessToken(accessToken);
    res.locals.user = UserService.getById(userId);
  } catch (error) {
    res.clearCookie(AuthCookie.AccessToken);
    return next();
  }

  next();
};
