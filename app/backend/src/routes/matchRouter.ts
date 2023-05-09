import { Router } from 'express';
import MatchControler from '../controllers/MatchController';
import MatchService from '../services/MatchServices';

const matchService = new MatchService();
const matchControler = new MatchControler(matchService);

const matchRouter = Router();

matchRouter.get('/', matchControler.getAllMatches);

export default matchRouter;
