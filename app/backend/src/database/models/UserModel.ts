import { INTEGER, STRING } from 'sequelize';
import db from '.';
import Users from '../classes/Users';

Users.init(
  {
    id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    role: {
      type: STRING,
      allowNull: false,
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