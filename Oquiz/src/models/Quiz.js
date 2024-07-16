const { DataTypes, Model } = require("sequelize");
const sequelize = require("./sequelize");

class Quiz extends Model {}

Quiz.init(
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "quiz",
  }
);

module.exports = Quiz;
