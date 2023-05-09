import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserServices from '../services/UserServices';

const userService = new UserServices();
const userControler = new UserController(userService);

const userRouter = Router();

userRouter.post('/', userControler.login);
userRouter.get('/role', userControler.getRole);

export default userRouter;
