const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Label extends Model {}

Label.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "labels",
  }
);

module.exports = Label;
