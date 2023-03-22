import { Request, Response } from 'express';
import userService from '../services/usersService';
import auth from '../auth/authFunctions';

const createUser = async (req: Request, res: Response) => {
  const newUser = await userService.createUser(req.body);
  const token = auth.createToken(newUser);
  return res.status(201).json({ token });
};

const userController = { createUser };

export default userController;