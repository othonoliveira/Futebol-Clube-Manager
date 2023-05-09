import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderBoardController';
import LeaderboardService from '../services/LeaderBoardServices';

const leaderboardService = new LeaderboardService();
const leaderboardControler = new LeaderboardController(leaderboardService);

const leaderboardRouter = Router();

leaderboardRouter.get('/home', leaderboardControler.homeLeaderboard);

leaderboardRouter.get('/away', leaderboardControler.awayLeaderboard);

export default leaderboardRouter;
