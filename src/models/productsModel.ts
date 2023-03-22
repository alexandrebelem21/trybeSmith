import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProducts from '../interfaces/productsInterface';
import connection from './connection';

const createProduct = async (product: IProducts): Promise<IProducts> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  return { id: insertId, ...product };
};

const getAll = async (): Promise<IProducts[]> => {
  const [result] = await connection
    .execute<IProducts[] & RowDataPacket[]>('SELECT * FROM Trybesmith.products');

  return result;
};

const productModel = { createProduct, getAll };

export default productModel;