import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import UserService from '../services/user.service';
import createToken from '../utils/auth';
import loginSchema from '../utils/schemas';

class UserController {
  service: UserService;
  
  constructor(userService = new UserService()) {
    this.service = userService;
    this.create = this.create.bind(this);
    this.login = this.login.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = req.body;

    await this.service.create(user);

    const token = await createToken(req.body.username);

    res.status(statusCodes.CREATED).json({ token });
  }

  async login(req: Request, res: Response): Promise<Response<unknown, Record<string, unknown>>> {
    const { username, password } = req.body;

    const { error } = loginSchema.validate({ username, password });
    if (error) return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
    
    const user = await this.service.login(req.body);
    if (user === null) {
      return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }

    const token = await createToken(username);
    return res.status(statusCodes.OK).json({ token });
  }
}

export default UserController;