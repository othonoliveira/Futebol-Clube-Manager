import { Model } from 'sequelize';

class Teams extends Model {
  declare id: number;
  declare teamName: string;
}

export default Teams;
