import { Model, DataTypes } from "sequelize";

import { sequelize } from "./dbClientSequelize.js";

export class List extends Model {}

List.init(
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: "list",
  }
);
