import { Request, Response } from 'express';
import orderService from '../services/ordersService';

const getAll = async (req: Request, res: Response) => {
  const allOrder = await orderService.getAll();
  return res.status(200).json(allOrder);
};

const orderController = { getAll };

export default orderController;