import Matches from '../database/models/MatchesModel';
import { IPoints, ILeaderboard } from '../interfaces/LeaderBoardsInterfaces';

const calculatePoints = (matches: Array<Matches>, matchInfo: IPoints) => {
  const points : ILeaderboard = {
    name: matchInfo.name,
    totalPoints: 0,
    totalGames: matches.length,
    totalVictories: matches
      .reduce((acc, mat) => ((mat[matchInfo.team1] > mat[matchInfo.team2]) ? acc + 1 : acc), 0),
    totalDraws: matches
      .reduce((acc, mat) => ((mat[matchInfo.team1] === mat[matchInfo.team2]) ? acc + 1 : acc), 0),
    totalLosses: matches
      .reduce((acc, mat) => ((mat[matchInfo.team1] < mat[matchInfo.team2]) ? acc + 1 : acc), 0),
    goalsFavor: matches.reduce((acc, mat) => acc + mat[matchInfo.team1], 0),
    goalsOwn: matches.reduce((acc, mat) => acc + mat[matchInfo.team2], 0),
    goalsBalance: 0,
  };

  points.totalPoints = (points.totalVictories * 3 + points.totalDraws);
  points.goalsBalance = points.goalsFavor - points.goalsOwn;
  points.efficiency = ((points.totalPoints / (points.totalGames * 3)) * 100).toFixed(2);

  return points;
};

export default calculatePoints;
