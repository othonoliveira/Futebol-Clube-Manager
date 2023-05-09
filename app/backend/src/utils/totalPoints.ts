import Matches from '../database/models/MatchesModel';
import { ILeaderboard, IPoints } from '../interfaces/LeaderBoardsInterfaces';
import bothResults from './bothResults';
import calculatePoints from './calculatePoints';

const totalPoints = (
  matches1: Array<Matches>,
  matches2: Array<Matches>,
  params: IPoints,
) => {
  const team1: ILeaderboard = calculatePoints(matches1, params);
  const team2: ILeaderboard = calculatePoints(
    matches2,
    { name: params.name, team1: params.team2, team2: params.team1 },
  );
  return bothResults(team1, team2);
};

export default totalPoints;
