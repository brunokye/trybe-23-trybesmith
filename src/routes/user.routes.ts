import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userController = new UserController();

const { create, login } = userController;

router
  .route('/users')
  .post(create);

router
  .route('/login')
  .post(login);

export default router;
