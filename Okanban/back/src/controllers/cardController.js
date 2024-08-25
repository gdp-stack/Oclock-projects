const { Card, Label } = require("../models/index");

const cardController = {
  findAllCards: async (req, res) => {
    const cards = await Card.findAll();
    cards.forEach((card) => console.log(card.toJSON()));
  },
  findOneCard: async (req, res) => {
    const card = await Card.findByPk(req.params.id, {
      include: {
        model: Label,
      },
    });
    console.log(card.toJSON());
  },
  createOneCard: async (req, res) => {
    const card = await Card.create(req.body);
    console.log(card.toJSON());
  },
  modifyOneCard: async (req, res) => {
    const card = await Card.update(req.body, {
      where: {
        id: Number(req.params.id),
      },
    });
  },
  deleteOneCard: async (req, res) => {
    const card = await Card.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
  },
  findAllCardsFromList: async (req, res) => {
    const cards = await Card.findAll({
      include: {
        model: Label,
      },
      where: {
        list_id: Number(req.params.id),
      },
    });
    cards.forEach((card) => console.log(card.toJSON()));
  },
};

module.exports = cardController;
