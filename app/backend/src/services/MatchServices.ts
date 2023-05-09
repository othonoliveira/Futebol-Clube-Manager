import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamModel';
import { IReturn, IUpdateMatche } from '../interfaces/MatchInterfaces';

export default class MatchService {
  private matches: Matches[] = [];
  private match: Matches | null = new Matches();

  async updateOnGoingMatch(match: IUpdateMatche): Promise<IReturn> {
    this.match = await Matches.findByPk(match.id);

    if (this.match) {
      this.match.homeTeamGoals = match.homeTeamGoals;
      this.match.awayTeamGoals = match.awayTeamGoals;
      await this.match.save();

      return { status: 200, message: 'Update Done' };
    }
    return { status: 404, message: 'Matche not found' };
  }

  async getFinishedMatch(id: number): Promise<IReturn> {
    this.match = await Matches.findByPk(id);

    if (this.match) {
      this.match.inProgress = false;
      await this.match.save();

      return { status: 200, message: 'Finished' };
    }

    return { status: 404, message: 'Matche not found' };
  }

  async getAllMatches(): Promise<IReturn> {
    this.matches = await Matches.findAll({ include: [
      { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
    ],
    });

    return { status: 200, message: this.matches };
  }

  async getMatchByQuery(inProgress: boolean): Promise<IReturn> {
    this.matches = await Matches.findAll({ where: { inProgress },
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return { status: 200, message: this.matches };
  }
}
