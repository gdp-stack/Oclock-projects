import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbClientSequelize.js";

export class Tag extends Model {}

Tag.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING(7),
    defaultValue: "#ffffff"
  }
}, {
  sequelize,
  tableName: "tag"
});

// TOP-LEVEL await permis en ESM
// const tags = await Tag.findAll();
// console.log(tags);
