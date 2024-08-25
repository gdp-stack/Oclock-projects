const prisma = require("../models/prismaClient");

const teamController = {
  getTeams: async function (req, res) {
    try {
      const response = await prisma.team.findMany({
        include: {
          team_pokemon: {
            select: {
              pokemon: {
                select: {
                  name: true,
                  id: true,
                  pokemon_type: {
                    select: {
                      type: {
                        select: {
                          name: true,
                          color: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  getOneTeam: async function (req, res) {
    try {
      const response = await prisma.team.findUnique({
        where: {
          id: Number(req.params.id),
        },
        include: {
          team_pokemon: {
            select: {
              pokemon: {
                select: {
                  name: true,
                  id: true,
                  pokemon_type: {
                    select: {
                      type: {
                        select: {
                          name: true,
                          color: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  createTeam: async function (req, res) {
    try {
      const response = await prisma.team.create({
        data: {
          name: req.body.name,
          description: req.body.description,
        },
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  deleteTeam: async function (req, res) {
    try {
      // Suppression des enregistrements de la table de jointure
      await prisma.teamPokemon.deleteMany({
        where: {
          team_id: Number(req.params.id),
        },
      });

      // Suppression de l'entrée principale
      const response = await prisma.team.delete({
        where: {
          id: Number(req.params.id),
        },
      });

      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  updateTeam: async function (req, res) {
    try {
      const response = await prisma.team.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name: req.body.name,
          description: req.body.description,
        },
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  addPokemonToTeam: async function (req, res) {
    try {
      const response = await prisma.teamPokemon.create({
        data: {
          pokemon_id: Number(req.params.pokemon_id),
          team_id: Number(req.body.team_id),
        },
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  deletePokemonFromTeam: async function (req, res) {
    try {
      const response = await prisma.teamPokemon.deleteMany({
        where: {
          pokemon_id: Number(req.body.pokemon_id),
          team_id: Number(req.params.team_id),
        },
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
};

module.exports = teamController;
