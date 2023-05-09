import Teams from '../database/models/TeamModel';
import Matches from '../database/models/MatchesModel';
import { IReturn } from '../interfaces/MatchInterfaces';

export default class MatchService {
  private matches: Matches[] = [];

  async getAllMatches(): Promise<IReturn> {
    this.matches = await Matches.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return { status: 200, message: this.matches };
  }
}
