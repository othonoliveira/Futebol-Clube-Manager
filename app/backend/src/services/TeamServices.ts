import Teams from "../database/classes/Teams";
import { DefaultReturn } from "../interfaces/TeamInterface";

export default class TeamService {
  private team: Teams | null = new Teams();

  async getById(id: number): Promise<DefaultReturn> {
    this.team = await Teams.findByPk(id);
    return { status: 200, message: this.team };
  }
}