import { Request, Response } from 'express';
import { ILoginReturn } from '../interfaces/UserInterfaces';
import LoginService from '../services/UserServices';

export default class UserControler {
  constructor(private Service: LoginService) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(email)) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }
    if (password.length < 6) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    const { status, message }:ILoginReturn = await this.Service.login({ email, password });
    return res.status(status).json({ token: message });
  };
}
