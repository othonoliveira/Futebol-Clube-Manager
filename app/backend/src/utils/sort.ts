import { ILeaderboard } from '../interfaces/LeaderBoardsInterfaces';

const sort = (leaderBoard: Array<ILeaderboard>) => leaderBoard.sort((timeB, timeA) => {
  if (timeA.totalPoints === timeB.totalPoints) {
    if (timeA.goalsBalance === timeB.goalsBalance) {
      return timeA.goalsFavor - timeB.goalsFavor;
    } return timeA.goalsBalance - timeB.goalsBalance;
  }
  return timeA.totalPoints - timeB.totalPoints;
});
export default sort;
