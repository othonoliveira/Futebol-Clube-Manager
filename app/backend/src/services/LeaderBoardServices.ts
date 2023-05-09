import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamModel';
import { ILeaderboard } from '../interfaces/LeaderBoardsInterfaces';
import calculatePoints from '../utils/calculatePoints';
import sort from '../utils/sort';

export default class LeaderboardService {
  private leaderboard: Array<ILeaderboard> = [];

  async awayLeaderboard() {
    const teams = await Teams.findAll();

    const leaderboardInfo = teams.map(async ({ id, teamName }) => {
      const matchlist: Matches[] = await Matches
        .findAll({ where: { awayTeamId: id, inProgress: false } });

      return calculatePoints(
        matchlist,
        { name: teamName, team2: 'homeTeamGoals', team1: 'awayTeamGoals' },
      );
    });

    this.leaderboard = await Promise.all(leaderboardInfo);

    return {
      status: 200,
      message: sort(this.leaderboard),
    };
  }

  async homeLeaderboard() {
    const teams = await Teams.findAll();

    const leaderboardInfo = teams.map(async ({ id, teamName }) => {
      const matchlist: Matches[] = await Matches
        .findAll({ where: { homeTeamId: id, inProgress: false } });

      return calculatePoints(
        matchlist,
        { name: teamName, team1: 'homeTeamGoals', team2: 'awayTeamGoals' },
      );
    });

    this.leaderboard = await Promise.all(leaderboardInfo);

    return {
      status: 200,
      message: sort(this.leaderboard),
    };
  }
}
