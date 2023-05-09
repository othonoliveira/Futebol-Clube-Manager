import { Router } from 'express';
import MatchControler from '../controllers/MatchController';
import MatchServices from '../services/MatchServices';

const matchService = new MatchServices();
const matchControler = new MatchControler(matchService);

const matchRouter = Router();

matchRouter.get('/', matchControler.getMatchByQuery);

matchRouter.patch('/:id/finish', matchControler.getFinishedMatch);

matchRouter.patch('/:id', matchControler.updateOnGoingMatch);

matchRouter.post('/', matchControler.addMatch);

export default matchRouter;
