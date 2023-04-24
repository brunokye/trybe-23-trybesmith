import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

const orderController = new OrderController();

const { getAll } = orderController;

router
  .route('/orders')
  .get(getAll);

export default router;
