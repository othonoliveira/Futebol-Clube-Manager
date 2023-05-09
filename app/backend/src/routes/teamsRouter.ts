import { Router } from 'express';
import TeamController from '../controllers/TeamController';
import TeamService from '../services/TeamServices';

const teamService = new TeamService();
const teamControler = new TeamController(teamService);

const teamRouter = Router();

teamRouter.get('/:id', teamControler.getTeamById);
teamRouter.get('/', teamControler.getAllTeams);

export default teamRouter;
