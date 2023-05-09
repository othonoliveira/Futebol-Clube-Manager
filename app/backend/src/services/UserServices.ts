import * as bcrypt from 'bcryptjs';
import createToken from '../auth/createToken';
import Users from '../database/models/UserModel';
import { ILogin, ILoginReturn } from '../interfaces/UserInterfaces';

export default class LoginServices {
  private token = '';
  private user: Users | null = new Users();

  async login({ email, password }: ILogin): Promise<ILoginReturn> {
    const user = await Users.findOne({ where: { email } });

    if (!user) return { status: 401, message: 'Invalid email or password' };

    if (!bcrypt.compareSync(password, user.password)) {
      return { status: 401, message: 'Invalid email or password' };
    }

    this.token = createToken(6000, { email });
    return { status: 200, message: this.token };
  }

  async getRole(email:string): Promise<ILoginReturn> {
    this.user = await Users.findOne({ where: { email } });

    return { status: 200,
      message: {
        role: this.user?.role,
      } };
  }
}
