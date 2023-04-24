import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import OrderService from '../services/order.service';

class OrderController {
  service: OrderService;
  
  constructor(orderService = new OrderService()) {
    this.service = orderService;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.service.getAll();
    res.status(statusCodes.OK).json(orders);
  }
}

export default OrderController;