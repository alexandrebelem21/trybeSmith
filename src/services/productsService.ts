import IProducts from '../interfaces/productsInterface';
import productModel from '../models/productsModel';

const createProducts = async (product: IProducts) => {
  const create = await productModel.createProduct(product);
  return create;    
};

const getAll = async (): Promise<IProducts[]> => {
  const products = await productModel.getAll();
  return products;
};
const productsService = { createProducts, getAll };

export default productsService;