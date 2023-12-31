import { Router } from 'express';
import productController from '../controllers/productsController';

const router = Router();

router.post('/', productController.createProduct);
router.get('/', productController.getAll);

export default router;