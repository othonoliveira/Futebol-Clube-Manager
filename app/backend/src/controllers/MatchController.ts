import { Request, Response } from 'express';
import validateToken from '../auth/validateToken';
import { IReturn } from '../interfaces/MatchInterfaces';
import MatchServices from '../services/MatchServices';

const TOKEN_NOT_FOUND = 'Token not found';
const TOKEN_NOT_VALID = 'Token must be a valid token';

export default class MatchControler {
  constructor(private Service:MatchServices) {}

  addMatch = async (req: Request, res: Response) => {
    const { homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals } = req.body;

    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: TOKEN_NOT_FOUND });

    const isValid = validateToken(authorization);
    if (!isValid) return res.status(401).json({ message: TOKEN_NOT_VALID });

    const { status, message }:IReturn = await this.Service.addMatch({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    });

    if (typeof message === 'string') return res.status(401).json({ message });

    return res.status(status).send(message);
  };

  updateOnGoingMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: TOKEN_NOT_FOUND });

    const isValid = validateToken(authorization);
    if (!isValid) return res.status(401).json({ message: TOKEN_NOT_VALID });

    const { status, message }:IReturn = await this.Service.updateOnGoingMatch({
      id: +id, homeTeamGoals, awayTeamGoals,
    });

    return res.status(status).send({ message });
  };

  getFinishedMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: TOKEN_NOT_FOUND });

    const isValid = validateToken(authorization);
    if (!isValid) return res.status(401).json({ message: TOKEN_NOT_VALID });

    const { status, message }:IReturn = await this.Service.getFinishedMatch(+id);

    return res.status(status).json({ message });
  };

  getAllMatches = async (req: Request, res: Response) => {
    const { status, message }:IReturn = await this.Service.getAllMatches();

    return res.status(status).json(message);
  };

  getMatchByQuery = async (req: Request, res: Response) => {
    const { query } = req.query;

    if (query === undefined || query === '') return this.getAllMatches(req, res);

    const { status, message }:IReturn = await this.Service.getMatchByQuery(query !== 'false');

    return res.status(status).json(message);
  };
}
