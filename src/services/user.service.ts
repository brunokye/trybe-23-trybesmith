import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User, UserCredentials } from '../interfaces';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  create(user: User): Promise<User> {
    return this.model.create(user);
  }

  login(userCredentials: UserCredentials) {
    const { username, password } = userCredentials;
    return this.model.login(username, password);
  }
}

export default UserService;