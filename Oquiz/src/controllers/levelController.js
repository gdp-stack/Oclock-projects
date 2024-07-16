const Level = require("../models/Level");

const levelController = {
  async renderLevelsPage(req, res) {
    const levels = await Level.findAll();

    let message = req.query.message;

    res.render("levels", { levels, message });
  },

  async deleteLevelAction(req, res) {
    const levelId = parseInt(req.params.id, 10);
    const level = await Level.findByPk(levelId);

    let message = "";

    try {
      if (level) {
        await level.destroy();
        message = "difficulté supprimée";
      } else {
        message = "difficulté non existante";
      }
    } catch (error) {
      message = "difficulté impossible à supprimer";
    }

    res.redirect("/levels?message=" + encodeURI(message));
  },
};

module.exports = levelController;

// Fonctionnalité de suppression d'un niveau -  plan d'action
// - une route levels/:id/delete,
// - une méthode de controller deleteLevelAction
// - récupère l'id du level à détruire,
// - récupérer le level à détruire grâce au modèle Sequelize Level (findByPk sur la classe)
// - supprimer l'instance récupérée (destroy sur l'instance)
// - redirection vers la liste des niveaux
// - un élément d'interface permettant à l'utilisateur de demander la suppression
