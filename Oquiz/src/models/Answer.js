const { DataTypes, Model } = require ('sequelize');
const sequelize = require ('./sequelize');

class Answer extends Model {}

Answer.init(
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'answer',
  },
);

module.exports = Answer;