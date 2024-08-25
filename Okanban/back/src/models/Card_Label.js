const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Card_Label extends Model {}

Card_Label.init(
  {
    card_id: {
      type: DataTypes.STRING,
      unique: true,
    },
    label_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "card_labels",
  }
);

module.exports = Card_Label;
