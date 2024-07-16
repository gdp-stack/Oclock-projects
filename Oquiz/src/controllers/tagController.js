// 3 - récupération de la définition de la classe Level
const { Tag, Quiz } = require("../models/index");

const tagController = {
  async renderTagPage(_, res) {
    const tags = await Tag.findAll({
      include: {
        model: Quiz,
      },
    });
    res.render("tags", { tags });
  },
};

module.exports = tagController;
