import { compareSync } from 'bcryptjs';
import createToken from '../auth/createToken';
import { ILogin, ILoginReturn } from '../interfaces/UserInterfaces';
import Users from '../database/models/UserModel';

export default class LoginService {
  private token = '';
  private user: Users | null = new Users();

  async login({ email, password }: ILogin): Promise<ILoginReturn> {
    const user = await Users.findOne({ where: { email } });

    if (!user) return { status: 401, message: 'Invalid email or password' };

    if (!compareSync(password, user.password)) {
      return { status: 401, message: 'Invalid email or password' };
    }

    this.token = createToken(6000, { email });
    return { status: 200, message: this.token };
  }
}
