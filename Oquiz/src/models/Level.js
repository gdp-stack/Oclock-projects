const { DataTypes, Model } = require ('sequelize');
const sequelize = require ('./sequelize');

// 2 - Définition d'un modèle :
// On définit principalement les champs de la table, leur type et leurs contraintes
class Level extends Model {}

Level.init(
  {
    // Sequelize s'attend à avoir :
    // - une colonne id,
    // - des colonnes created_at et updated_at

    // Définition des attributs du modèle
    name: {
      type: DataTypes.TEXT,
      allowNull: false,// === NOT NULL
    },
  },
  {
    // autres option du modèle
    sequelize, // instance de sequelize connectée à al BDD
    tableName: 'level', // nom de la table
  },
);

module.exports = Level;