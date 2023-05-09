import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamModel';
import { IMatch, IReturn, IUpdateMatche } from '../interfaces/MatchInterfaces';

export default class MatchServices {
  private matches: Matches[] = [];
  private match: Matches | null = new Matches();

  async addMatch(newMatch: IMatch): Promise<IReturn> {
    if (newMatch.awayTeamId === newMatch.homeTeamId) {
      return { status: 422,
        message: 'It is not possible to create a match with two equal teams',
      };
    }

    const homeTeam = await Teams.findByPk(newMatch.homeTeamId);

    const awatTeam = await Teams.findByPk(newMatch.awayTeamId);

    if (!homeTeam || !awatTeam) {
      return { status: 404, message: 'There is no team with such id!' };
    }

    this.match = await Matches.create({ ...newMatch, inProgress: true });

    return { status: 201, message: this.match };
  }

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

  async getMatchByQuery(query: boolean): Promise<IReturn> {
    this.matches = await Matches.findAll({ where: { query },
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return { status: 200, message: this.matches };
  }
}
