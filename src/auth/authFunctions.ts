import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'Batatinha';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (data: object) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token: string) => jwt.verify(token, secret);

export default { createToken, verifyToken };