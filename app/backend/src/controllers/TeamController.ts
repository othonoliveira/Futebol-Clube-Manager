import { Request, Response } from 'express';
import { DefaultReturn } from '../interfaces/TeamInterface';
import TeamServices from '../services/TeamServices';

export default class TeamController {
  constructor(private Service: TeamServices) { }

  getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { status, message } : DefaultReturn = await this.Service.getTeamById(+id);

    return res.status(status).json(message);
  };

  getAllTeams = async (_req: Request, res: Response) => {
    const { status, message } : DefaultReturn = await this.Service.getAllTeams();
    console.log('test:', message);

    return res.status(status).json(message);
  };
}
