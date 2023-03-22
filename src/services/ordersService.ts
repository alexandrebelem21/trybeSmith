import IOrders from '../interfaces/ordersInterface';
import orderModel from '../models/ordersModel';

const getAll = async (): Promise<IOrders[]> => {
  const products = await orderModel.getAll();
  return products;
};

const orderService = { getAll };

export default orderService;