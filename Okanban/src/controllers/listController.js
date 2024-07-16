const { List } = require("../models/index");

const listController = {
  findAllLists: async (req, res) => {
    const lists = await List.findAll();
    lists.forEach((list) => console.log(list.toJSON()));
  },
  findOneList: async (req, res) => {
    const list = await List.findByPk(req.params.id);
    console.log(list.toJSON());
  },
  createOneList: async (req, res) => {
    const list = await List.create(req.body);
    console.log(list.toJSON());
  },
  modifyOneList: async (req, res) => {
    const list = await List.update(req.body, {
      where: {
        id: Number(req.params.id),
      },
    });
  },
  deleteOneList: async (req, res) => {
    const list = await List.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
  },
};

module.exports = listController;
