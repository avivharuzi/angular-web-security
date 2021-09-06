import { Application } from 'express';

import { authRouter } from './auth/auth.router';
import { errorMiddleware } from './middlewares/error.middleware';
import { getUserMiddleware } from './middlewares/get-user.middleware';

export const routes = (app: Application): void => {
  app.use(getUserMiddleware);
  app.use('/auth', authRouter);
  app.use(errorMiddleware);
};
