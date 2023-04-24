import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import ProductService from '../services/product.service';

class ProductController {
  service: ProductService;
  
  constructor(productService = new ProductService()) {
    this.service = productService;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const products = await this.service.getAll();
    res.status(statusCodes.OK).json(products);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const productCreated = await this.service.create(product);

    res.status(statusCodes.CREATED).json(productCreated);
  }
}

export default ProductController;