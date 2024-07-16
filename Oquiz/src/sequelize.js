const { Sequelize } = require("sequelize");

// Création  d'une instance Sequelize connectée à notre base de données
const sequelize = new Sequelize(process.env.DB_URI, {
  define: {
    underscored: true,
  },
});

module.exports = sequelize;
