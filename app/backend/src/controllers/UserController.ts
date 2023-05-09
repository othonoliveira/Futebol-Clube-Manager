import { Request, Response } from 'express';
import { validateRole } from '../auth/validateToken';
import { ILoginReturn } from '../interfaces/UserInterfaces';
import UserServices from '../services/UserServices';

export default class UserControler {
  constructor(private Service: UserServices) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const error = 'Invalid email or password';
    console.log(email, password);

    if (!email || !password) return res.status(400).send({ message: 'All fields must be filled' });

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(email)) {
      return res.status(401).send({ message: error });
    }
    if (password.length < 6) {
      return res.status(401).send({ message: error });
    }

    const { status, message }:ILoginReturn = await this.Service.login({ email, password });

    if (message === error) return res.status(status).send({ message });

    return res.status(status).json({ token: message });
  };

  getRole = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const isValid = validateRole(authorization);
    if (isValid === false) return res.status(401).json({ message: 'Token must be a valid token' });
    req.body = isValid;
    const { email } = req.body;

    const { status, message }:ILoginReturn = await this.Service.getRole(email);

    return res.status(status).send(message);
  };
}
