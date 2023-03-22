import { Request, Response } from 'express';
import productsService from '../services/productsService';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productsService.createProducts(req.body);
  return res.status(201).json(newProduct);
};

const productController = { createProduct };

export default productController;