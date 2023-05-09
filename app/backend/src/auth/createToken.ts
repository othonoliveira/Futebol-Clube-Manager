import { sign, SignOptions, Secret } from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const secret: Secret = process.env.JWT_SECRET || 'secret';

const createToken = (expires: number, payload: object) => {
  const rules: SignOptions = {
    expiresIn: expires,
    algorithm: 'HS256',
  };

  const token = sign(payload, secret, rules);
  return token;
};

export default createToken;
