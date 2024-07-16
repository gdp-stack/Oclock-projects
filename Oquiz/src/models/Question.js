const { DataTypes, Model } = require ('sequelize');
const sequelize = require ('./sequelize');

class Question extends Model {}

Question.init(
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    anecdote: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    wiki: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'question',
  },
);

module.exports = Question;