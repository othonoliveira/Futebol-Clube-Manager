import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderBoardServices';

export default class LeaderboardController {
  constructor(private Service: LeaderboardService) {}

  fullLeaderboard = async (req: Request, res: Response) => {
    const { status, message } = await this.Service.fullLeaderboard();
    return res.status(status).json(message);
  };

  awayLeaderboard = async (req: Request, res: Response) => {
    const { status, message } = await this.Service.awayLeaderboard();

    return res.status(status).json(message);
  };

  homeLeaderboard = async (req: Request, res: Response) => {
    const { status, message } = await this.Service.homeLeaderboard();

    return res.status(status).json(message);
  };
}
