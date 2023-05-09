import { Request, Response } from 'express';
import { IReturn } from '../interfaces/MatchInterfaces';
import MatchServices from '../services/MatchServices';

export default class MatchControler {
  constructor(private Service:MatchServices) {}

  getAllMatches = async (req: Request, res: Response) => {
    const { status, message }:IReturn = await this.Service.getAllMatches();
    return res.status(status).send(message);
  };
}
