import { Router } from 'express';
import orderController from '../controllers/ordersController';

const router = Router();

router.get('/', orderController.getAll);

export default router;