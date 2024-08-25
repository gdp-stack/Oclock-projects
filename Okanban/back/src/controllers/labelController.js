const { Label, Card_Label } = require("../models/index");

const labelController = {
  findAllLabels: async (req, res) => {
    const labels = await Label.findAll();
    labels.forEach((label) => console.log(label.toJSON()));
  },
  findOneLabel: async (req, res) => {
    const label = await Label.findByPk(req.params.id);
    console.log(label.toJSON());
  },
  createOneLabel: async (req, res) => {
    const label = await Label.create(req.body);
    console.log(label.toJSON());
  },
  modifyOneLabel: async (req, res) => {
    const label = await Label.update(req.body, {
      where: {
        id: Number(req.params.id),
      },
    });
  },
  deleteOneLabel: async (req, res) => {
    const label = await Label.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
  },
  createLabelCardAssociation: async (req, res) => {
    const newAssociation = {
      card_id: Number(req.params.card_id),
      label_id: Number(req.params.label_id),
    };
    const label = await Card_Label.create(newAssociation);
    console.log(label.toJSON());
  },
  deleteLabelCardAssociation: async (req, res) => {
    const existingAssociation = {
      card_id: Number(req.params.card_id),
      label_id: Number(req.params.label_id),
    };
    const label = await Card_Label.destroy({
      where: {
        card_id: Number(req.params.card_id),
        label_id: Number(req.params.label_id),
      },
    });
  },
};

module.exports = labelController;
