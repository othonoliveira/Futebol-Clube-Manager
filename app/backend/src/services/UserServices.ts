import createToken from '../auth/createToken';
import { ILogin, ILoginReturn } from '../interfaces/UserInterfaces';
import Users from '../database/models/UserModel';

export default class LoginService {
  private token = '';
  private user: Users | null = new Users();

  async login({ email }: ILogin): Promise<ILoginReturn> {
    this.token = createToken(6000, { email });
    return { status: 200, message: this.token };
  }
}
