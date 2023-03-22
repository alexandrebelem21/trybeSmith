import express from 'express';
import products from './routes/productsRoute';
import users from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);

export default app;
