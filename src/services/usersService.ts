import IUser from '../interfaces/userInterface';
import userModel from '../models/usersModel';

const createUser = async (user: IUser) => {
  const create = await userModel.createUser(user);
  return create;    
};

const userService = { createUser };

export default userService;