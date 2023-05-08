import { INTEGER,
  STRING } from 'sequelize';
import Teams from '../classes/Teams';
import db from '.';

Teams.init(
  {
    id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    teamName: {
      field: 'team_name',
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'teams',
    timestamps: false,
    underscored: true,
  },
);

export default Teams;
