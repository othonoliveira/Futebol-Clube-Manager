import { Request, Response } from 'express';
import { IReturn } from '../interfaces/MatchInterfaces';
import MatchServices from '../services/MatchServices';
import validateToken from '../auth/validateToken';

export default class MatchControler {
  constructor(private Service:MatchServices) {}

  getFinishedMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const isValid = validateToken(authorization);
    if (!isValid) return res.status(401).json({ message: 'Token must be a valid token' });

    const { status, message }:IReturn = await this.Service.getFinishedMatch(+id);

    return res.status(status).json({ message });
  };

  getAllMatches = async (req: Request, res: Response) => {
    const { status, message }:IReturn = await this.Service.getAllMatches();
    return res.status(status).json(message);
  };

  getMatchByQuery = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (inProgress === undefined || inProgress === '') return this.getAllMatches(req, res);

    const { status, message }:IReturn = await this.Service.getMatchByQuery(inProgress !== 'false');

    return res.status(status).json(message);
  };
}
