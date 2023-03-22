import { ResultSetHeader } from 'mysql2';
import IProducts from '../interfaces/productsInterface';
import connection from './connection';

export const createProduct = async (product: IProducts): Promise<IProducts> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  return { id: insertId, ...product };
};

const productModel = { createProduct };

export default productModel;