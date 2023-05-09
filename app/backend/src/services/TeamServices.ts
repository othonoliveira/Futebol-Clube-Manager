import Teams from '../database/models/TeamModel';
import { DefaultReturn } from '../interfaces/TeamInterface';

export default class TeamServices {
  private team: Teams | null = new Teams();
  private teams: Teams[] = [];

  async getTeamById(id: number): Promise<DefaultReturn> {
    this.team = await Teams.findByPk(id);
    return { status: 200, message: this.team };
  }

  async getAllTeams(): Promise<DefaultReturn> {
    this.teams = await Teams.findAll();
    return { status: 200, message: this.teams };
  }
}
