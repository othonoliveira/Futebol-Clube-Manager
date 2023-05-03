import { Router } from 'express';
import TeamController from '../controllers/TeamController';
import TeamService from '../services/TeamServices';

const teamService = new TeamService();
const teamControler = new TeamController(teamService);

const router = Router();

router.get('/:id', teamControler.getTeamById);

export default router;
