import { NextFunction, Request, Response } from 'express';

import { UnauthorizedError } from '../errors/unauthorized-error';

export const authenticationMiddleware = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (res.locals.user) {
    return next();
  }
  next(new UnauthorizedError());
};
