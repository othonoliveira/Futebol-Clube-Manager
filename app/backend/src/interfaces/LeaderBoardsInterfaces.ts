export interface ILeaderboard {
  'name': string,
  'totalPoints': number,
  'totalGames': number,
  'totalVictories': number,
  'totalDraws': number,
  'totalLosses': number,
  'goalsFavor': number,
  'goalsOwn': number,
  'goalsBalance': number,
  'efficiency'?: string
}

export interface IReturnLeaders {
  status: number,
  item: Array<number>
}

export interface IPoints {
  name: string,
  team1: 'homeTeamGoals' | 'awayTeamGoals',
  team2: 'homeTeamGoals' | 'awayTeamGoals',
}
