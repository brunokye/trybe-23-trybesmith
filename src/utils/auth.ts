import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (username: string): string => {
  const token: string = jwt.sign({ data: { username } }, secret, jwtConfig);

  return token;
};

export default createToken;
