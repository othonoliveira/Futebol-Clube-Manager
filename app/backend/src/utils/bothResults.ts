import { ILeaderboard } from '../interfaces/LeaderBoardsInterfaces';

const bothResults = (team1: ILeaderboard, team2: ILeaderboard) => ({
  name: team1.name,
  totalPoints: team1.totalPoints + team2.totalPoints,
  totalGames: team1.totalGames + team2.totalGames,
  totalVictories: team1.totalVictories + team2.totalVictories,
  totalDraws: team1.totalDraws + team2.totalDraws,
  totalLosses: team1.totalLosses + team2.totalLosses,
  goalsFavor: team1.goalsFavor + team2.goalsFavor,
  goalsOwn: team1.goalsOwn + team2.goalsOwn,
  goalsBalance: team1.goalsBalance + team2.goalsBalance,
  efficiency: (((team1.totalPoints + team2.totalPoints)
    / ((team1.totalGames + team2.totalGames) * 3)) * 100).toFixed(2),
});

export default bothResults;
