import Teams from '../database/models/TeamModel';
import { DefaultReturn } from '../interfaces/TeamInterface';

export default class TeamService {
  private team: Teams | null = new Teams();

  async getById(id: number): Promise<DefaultReturn> {
    this.team = await Teams.findByPk(id);
    return { status: 200, message: this.team };
  }
}
