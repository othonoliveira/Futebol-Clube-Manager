import { Request, Response } from 'express';
import TeamServices from '../services/TeamServices';
import { DefaultReturn } from "../interfaces/TeamInterface";

export default class TeamController {
  constructor(private Service:TeamServices) { }

  getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const {status, message}: DefaultReturn = await this.Service.getById(+id);
    
    return res.status(status).send(message);
  };
}