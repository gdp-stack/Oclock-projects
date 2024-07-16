const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Project extends Model {}

Project.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "projects",
  }
);

module.exports = Project;
