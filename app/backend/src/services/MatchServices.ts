import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamModel';
import { IReturn } from '../interfaces/MatchInterfaces';

export default class MatchService {
  private matches: Matches[] = [];
  private match: Matches | null = new Matches();

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
