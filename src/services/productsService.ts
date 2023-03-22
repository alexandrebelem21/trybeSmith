import IProducts from '../interfaces/productsInterface';
import { createProduct } from '../models/productsModel';

const createProducts = async (product: IProducts) => {
  const create = await createProduct(product);
  return create;    
};

const productsService = { createProducts };

export default productsService;