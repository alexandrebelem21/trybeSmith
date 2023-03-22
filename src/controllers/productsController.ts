import { Request, Response } from 'express';
import productsService from '../services/productsService';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productsService.createProducts(req.body);
  return res.status(201).json(newProduct);
};

const getAll = async (req: Request, res: Response) => {
  const allProducts = await productsService.getAll();
  return res.status(200).json(allProducts);
};

const productController = { createProduct, getAll };

export default productController;