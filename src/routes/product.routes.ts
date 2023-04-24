import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

const { getAll, create } = productController;

router
  .route('/products')
  .get(getAll)
  .post(create);

export default router;
