import { Request, Response, NextFunction } from 'express';

import { AuthCookie } from '../auth/auth-cookie';
import { UnauthorizedError } from '../errors/unauthorized-error';

export const csrfMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const csrfCookie = req.cookies[AuthCookie.XSRFToken];
  const csrfHeader = req.headers['X-XSRF-TOKEN'];
  if (csrfCookie && csrfHeader && csrfCookie === csrfHeader) {
    return next();
  }
  next(new UnauthorizedError());
};
