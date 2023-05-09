import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderBoardServices';

export default class LeaderboardController {
  constructor(private Service: LeaderboardService) {}

  awayLeaderboard = async (req: Request, res: Response) => {
    const { status, message } = await this.Service.awayLeaderboard();

    return res.status(status).send(message);
  };

  homeLeaderboard = async (req: Request, res: Response) => {
    const { status, message } = await this.Service.homeLeaderboard();

    return res.status(status).json(message);
  };
}
