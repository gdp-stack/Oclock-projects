// 3 - récupération de la définition de la classe Level
const { Quiz, Tag, User } = require("../models/index");

const mainController = {
  async renderHomePage(_, res) {
    const quizs = await Quiz.findAll({
      include: [
        {
          model: User,
          as: "author",
          attributes: ["lastname", "firstname"],
        },
        {
          model: Tag,
          attributes: ["name"],
        },
      ],
      order: [['title', 'ASC']], // Tri ascendant par le titre des questions
    });
    res.render("home", { quizs });
  },
};

module.exports = mainController;
