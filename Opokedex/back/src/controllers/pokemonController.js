const prisma = require("../models/prismaClient");

const pokemonController = {
  getPokemons: async function (req, res) {
    try {
      const response = await prisma.pokemon.findMany({
        include: {
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
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  getOnePokemon: async function (req, res) {
    try {
      const response = await prisma.pokemon.findUnique({
        where: {
          id: Number(req.params.id),
        },
        include: {
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
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  createPokemon: async function (req, res) {
    try {
      const response = await prisma.pokemon.create({
        data: {
          name: req.body.name,
          hp: Number(req.body.hp),
          atk: Number(req.body.atk),
          def: Number(req.body.def),
          atk_spe: Number(req.body.atk_spe),
          def_spe: Number(req.body.def_spe),
          speed: Number(req.body.speed),
        },
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  deletePokemon: async function (req, res) {
    try {
      const response = await prisma.pokemon.delete({
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
  updatePokemon: async function (req, res) {
    try {
      const response = await prisma.pokemon.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name: req.body.name,
          hp: Number(req.body.hp),
          atk: Number(req.body.atk),
          def: Number(req.body.def),
          atk_spe: Number(req.body.atk_spe),
          def_spe: Number(req.body.def_spe),
          speed: Number(req.body.speed),
        },
      });
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
};

module.exports = pokemonController;
