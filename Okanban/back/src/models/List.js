const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class List extends Model {}

List.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "lists",
  }
);

module.exports = List;
