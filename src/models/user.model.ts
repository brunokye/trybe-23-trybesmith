import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, ...user };
  }

  async login(username: string, password: string): Promise<User> {
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
    const values = [username, password];
  
    const [data] = await this.connection.execute(query, values);
    const [user] = data as User[];
  
    return user || null;
  }
}