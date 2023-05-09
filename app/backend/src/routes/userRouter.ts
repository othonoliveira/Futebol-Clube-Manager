import { Router } from 'express';
import UserControler from '../controllers/UserController';
import UserService from '../services/UserServices';

const userService = new UserService();
const userControler = new UserControler(userService);

const userRouter = Router();

userRouter.post('/', userControler.login);

export default userRouter;
