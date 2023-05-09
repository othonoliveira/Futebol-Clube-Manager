import { Request, Response } from 'express';
import validateToken from '../auth/validateToken';
import { ILoginReturn } from '../interfaces/UserInterfaces';
import LoginServices from '../services/UserServices';

export default class UserControler {
  constructor(private Service: LoginServices) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const error = 'Invalid email or password';

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(email)) {
      return res.status(401).json({
        message: error,
      });
    }
    if (password.length < 6) {
      return res.status(401).json({
        message: error,
      });
    }

    const { status, message }:ILoginReturn = await this.Service.login({ email, password });

    if (message === error) return res.status(status).json({ message });

    return res.status(status).json({ token: message });
  };

  getRole = async (req: Request, res: Response) => {
    const { email } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const isValid = validateToken(authorization);
    if (!isValid) return res.status(401).json({ message: 'Token must be a valid token' });

    const { status, message }:ILoginReturn = await this.Service.getRole(email);

    return res.status(status).send(message);
  };
}
