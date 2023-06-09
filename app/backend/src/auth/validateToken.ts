import { Secret, verify } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET || 'secret';

const validateToken = (token: string) => {
  try {
    verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};

export const validateRole = (token: string) => {
  try {
    const userData = verify(token, secret);
    return userData;
  } catch (error) {
    return false;
  }
};

export default validateToken;
