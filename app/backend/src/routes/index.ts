import { Router } from 'express';
import teamRouter from './teamsRouter';
import userRouter from './userRouter';

const router = Router();

router.use('/teams', teamRouter);

router.use('/login', userRouter);

export default router;
