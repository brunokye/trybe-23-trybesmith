import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userController = new UserController();

const { create } = userController;

router
  .route('/users')
  .post(create);

export default router;
