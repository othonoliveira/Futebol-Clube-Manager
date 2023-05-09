import Matches from '../database/models/MatchesModel';
import { IMessage } from './UserInterfaces';

export interface IReturn {
  status: number;
  message: Matches[] | Matches | undefined | null | IMessage | string;
}

export interface IUpdateMatche {
  id: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatch {
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}
