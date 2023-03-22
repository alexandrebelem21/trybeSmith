import express from 'express';
import products from './routes/productsRoute';
import users from './routes/usersRoute';
import orders from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);

export default app;
