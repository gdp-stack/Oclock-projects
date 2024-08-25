const prisma = require("../models/prismaClient");

const typeController = {
  getTypes: async function (req, res) {
    try {
      const response = await prisma.type.findMany();
      return res.json(response);
    } catch (error) {
      console.error("Erreur du requetage : " + error);
      return res.status(400).send("Erreur 400: Mauvaise Requête");
    }
  },
  getOneType: async function (req, res) {
    try {
      const response = await prisma.type.findUnique({
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
  createType: async function (req, res) {
    try {
      const response = await prisma.type.create({
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
  deleteType: async function (req, res) {
    try {
      const response = await prisma.type.delete({
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
  updateType: async function (req, res) {
    try {
      const response = await prisma.type.update({
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

module.exports = typeController;
