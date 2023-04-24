import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

const { create } = productController;

router
  .route('/products')
  .post(create);

export default router;
