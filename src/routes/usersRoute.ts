import { Router } from 'express';
import userController from '../controllers/usersController';

const router = Router();

router.post('/', userController.createUser);

export default router;