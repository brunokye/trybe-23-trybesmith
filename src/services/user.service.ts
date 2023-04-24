import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../interfaces';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;