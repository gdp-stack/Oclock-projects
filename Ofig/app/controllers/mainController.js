const client = require("../database");
const dataMapper = require("../dataMapper");
const notationDisplay = require("../functions");

const mainController = {
  // méthode pour la page d'accueil
  homePage: async (request, response) => {
    try {
      const figurines = await dataMapper.getAllFigurines();
      const reviews = await dataMapper.getAllFigurineReviews(); // Récupérer les avis de la figurine
      response.render("index", { figurines, reviews, notationDisplay });
    } catch (error) {
      response.status(500).send(error);
      client.end();
    }
  },

  articlePage: async (request, response) => {
    try {
      const figurineId = request.params.id; // C'est une seule ID, donc singulier
      const figurine = await dataMapper.getOneFigurine(figurineId);
      const reviews = await dataMapper.getFigurineReviews(figurineId); // Récupérer les avis de la figurine
      response.render("article", { figurine, reviews, notationDisplay });
    } catch (error) {
      response.status(500).send(error);
    }
  },
};

module.exports = mainController;
