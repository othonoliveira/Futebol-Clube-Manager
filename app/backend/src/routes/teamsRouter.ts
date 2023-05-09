import { Router } from 'express';
import TeamController from '../controllers/TeamController';
import TeamServices from '../services/TeamServices';

const teamService = new TeamServices();
const teamControler = new TeamController(teamService);

const teamRouter = Router();

teamRouter.get('/:id', teamControler.getTeamById);
teamRouter.get('/', teamControler.getAllTeams);

export default teamRouter;
