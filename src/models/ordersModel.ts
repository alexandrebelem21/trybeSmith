import { RowDataPacket } from 'mysql2';
import IOrders from '../interfaces/ordersInterface';
import connection from './connection';

const getAll = async (): Promise<IOrders[]> => {
  const [result] = await connection.execute<IOrders[] & RowDataPacket[]>(`
      SELECT torder.id, torder.user_id as userId, JSON_ARRAYAGG(tproducts.id) as productsIds
      FROM Trybesmith.orders as torder
      INNER JOIN Trybesmith.products AS tproducts ON torder.id = tproducts.order_id
      GROUP BY torder.id;
    `);
  return result;
};

const orderModel = { getAll };

export default orderModel;