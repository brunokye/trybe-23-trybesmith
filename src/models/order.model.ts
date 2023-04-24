import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds 
      FROM Trybesmith.orders as o
      JOIN Trybesmith.products as p
      WHERE o.id = p.order_id
      GROUP BY o.id`,
    );
    const [rows] = result;
    
    return rows as Order[];
  }
}