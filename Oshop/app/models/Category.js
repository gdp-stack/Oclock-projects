const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'categories',
  }
);
/***
 * Voici les champs nécessaires pour le Model
 * name string
 * tableName: 'categories',
 */

module.exports = Category;
