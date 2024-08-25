const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");
const teamController = require("../controllers/teamController");
const typeController = require("../controllers/typeController");

//------Route Create, Update, Read, Delete des Pokemons-----//
//Route de récupération de tous les pokemons
router.get("/pokemons", pokemonController.getPokemons);
//Route de récupération d'un pokemon
router.get("/pokemons/:id", pokemonController.getOnePokemon);
//Route de création d'un pokemon
router.post("/pokemons", pokemonController.createPokemon);
//Route de mise à jour d'un pokemon
router.patch("/pokemons/:id", pokemonController.updatePokemon);
//Route de suppression d'un pokemon
router.delete("/pokemons/:id", pokemonController.deletePokemon);

//------Route Create, Update, Read, Delete des Teams-----//
//Route de récupération de toute les Teams
router.get("/teams", teamController.getTeams);
//Route de récupération d'une team
router.get("/teams/:id", teamController.getOneTeam);
//Route de création d'une team
router.post("/teams", teamController.createTeam);
//Route de mise à jour d'une team
router.patch("/teams/:id", teamController.updateTeam);
//Route de suppression d'une team
router.delete("/teams/:id", teamController.deleteTeam);
//Route d'ajout d'un pokemon à une team
router.post(
  "/pokemons/:pokemon_id/team-ajout",
  teamController.addPokemonToTeam
);
//Route de suppression d'un pokemon d'une team
router.delete(
  "/teams/:team_id/team-suppression",
  teamController.deletePokemonFromTeam
);

//------Route Create, Update, Read, Delete des Types-----//
//Route de récupération de tous les types
router.get("/types", typeController.getTypes);
//Route de récupération d'un type
router.get("/types/:id", typeController.getOneType);
//Route de création d'un type
router.post("/types", typeController.createType);
//Route de mise à jour d'un type
router.patch("/types/:id", typeController.updateType);
//Route de suppression d'un type
router.delete("/types/:id", typeController.deleteType);

module.exports = router;
