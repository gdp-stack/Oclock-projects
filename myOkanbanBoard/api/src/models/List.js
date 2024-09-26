import { Model, DataTypes } from "sequelize"; // Module NPM

import { sequelize } from "./dbClientSequelize.js"; // Module local

export class List extends Model {}

List.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: "list"
});

// Test rapide
// List.findAll(); // => SELECT "title", "position" FROM "list"    // Note : également toujours le created_at, updated_at et l'id


