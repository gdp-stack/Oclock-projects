const dataMapper = require("../dataMapper");

const bookmarksController = {
  favoritesList: [3, 6],
  // méthode pour afficher les favoris
  bookmarksPage: async (request, response) => {
    const favoritesListObjects = await dataMapper.getFavoritesFigurine(
      bookmarksController.favoritesListx
    );
    response.render("favoris", { favoritesListObjects });
  },
  // méthode pour ajouter une figurine dans les favoris
  bookmarksFigurineAdd: async (request, response) => {
    bookmarksController.favoritesList.push(Number(request.params.id));
    //implementer un traitement si une figurine deja existance, est-ce qu'on ajoute notion
    // de quantité à coté de la figurine ou on l'ajoute à nouveau plus bas
    //(si oui, dans ce cas gérer le traitement de l'existence dans la liste de favoris avec un include)
    //datamapper
    const favoritesListObjects = await dataMapper.getFavoritesFigurine(
      bookmarksController.favoritesList
    );
    response.render("favoris", { favoritesListObjects });
  },
  // méthode pour delete une figurine dans les favoris
  bookmarksFigurineDelete: async (request, response) => {
    const favoriteToDelete = bookmarksController.favoritesList.find(
      (favorite) => Number(favorite) === Number(request.params.id)
    );
    bookmarksController.favoritesList =
      bookmarksController.favoritesList.filter(
        (favorite) => Number(favorite) !== Number(favoriteToDelete)
      );
    const favoritesListObjects = await dataMapper.getFavoritesFigurine(
      bookmarksController.favoritesList
    );
    response.render("favoris", { favoritesListObjects });
  },
};

module.exports = bookmarksController;
