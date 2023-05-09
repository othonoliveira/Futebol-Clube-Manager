import { Request, Response } from 'express';
import { ILoginReturn } from '../interfaces/UserInterfaces';
import LoginService from '../services/UserServices';

export default class UserControler {
  constructor(private Service: LoginService) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

    const { status, message }:ILoginReturn = await this.Service.login({ email, password });
    return res.status(status).json({ message });
  };
}
