import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import UserService from '../services/user.service';
import createToken from '../utils/auth';

class UserController {
  service: UserService;
  
  constructor(userService = new UserService()) {
    this.service = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = req.body;

    await this.service.create(user);

    const token = await createToken(req.body.username);

    res.status(statusCodes.CREATED).json({ token });
  }
}

export default UserController;