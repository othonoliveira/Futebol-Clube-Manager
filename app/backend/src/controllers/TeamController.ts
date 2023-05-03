import { Request, Response } from 'express';
import { DefaultReturn } from '../interfaces/TeamInterface';
import TeamServices from '../services/TeamServices';

export default class TeamController {
  constructor(private Service: TeamServices) { }

  getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { status, message } : DefaultReturn = await this.Service.getById(+id);

    return res.status(status).send(message);
  };
}
