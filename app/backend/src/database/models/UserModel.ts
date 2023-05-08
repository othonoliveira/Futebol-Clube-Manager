import { INTEGER, STRING } from 'sequelize';
import db from '.';
import Users from '../classes/Users';

Users.init(
  {
    id: {
      primaryKey: true,
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    password: {
      allowNull: false,
      type: STRING,
    },
    email: {
      allowNull: false,
      type: STRING,
    },
    role: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    modelName: 'users',
    timestamps: false,
    underscored: true,
    sequelize: db,
  },
);

export default Users;
