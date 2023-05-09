import Matches from '../database/models/MatchesModel';
import { IMessage } from './UserInterfaces';

export interface IReturn {
  status: number;
  message: Matches[] | Matches | undefined | null | IMessage;
}

export interface IUpMatche {
  id: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatcher {
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}
