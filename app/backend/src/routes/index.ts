import { Router } from 'express';
import teamRouter from './teamsRouter';
import userRouter from './userRouter';
import matchRouter from './matchRouter';

const router = Router();

router.use('/teams', teamRouter);

router.use('/login', userRouter);

router.use('/matches', matchRouter);

export default router;
