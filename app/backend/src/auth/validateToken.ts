import { verify, Secret } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET || 'secret';

const validateToken = (token: string) => verify(token, secret);

export default validateToken;
