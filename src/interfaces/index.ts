export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface Order {
  id?: number;
  userId: number;
  productsIds: Array<number>;
}