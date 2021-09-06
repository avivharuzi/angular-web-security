import { Router } from 'express';
import { csrfMiddleware } from '../middlewares/csrf.middleware';

import { AuthController } from './auth.controller';
import { authenticationMiddleware } from '../middlewares/authentication.middleware';
import { withoutAuthenticationMiddleware } from '../middlewares/without-authentication.middleware';

const authRouter = Router();

authRouter.get('/user', AuthController.user());
authRouter.post(
  '/login',
  withoutAuthenticationMiddleware,
  AuthController.login()
);
authRouter.post(
  '/logout',
  authenticationMiddleware,
  // csrfMiddleware,
  AuthController.logout()
);

export { authRouter };
