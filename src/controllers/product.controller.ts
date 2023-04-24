import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import ProductService from '../services/product.service';

class ProductController {
  productService: ProductService;
  
  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAll();
    res.status(statusCodes.OK).json(products);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const productCreated = await this.productService.create(product);

    res.status(statusCodes.CREATED).json(productCreated);
  }
}

export default ProductController;