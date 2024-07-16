const { Quiz, Tag, User, Question, Level, Answer } = require("../models/index");
const { format } = require("date-fns");

const quizController = {
  async renderQuizPage(req, res) {
    const quiz = await Quiz.findByPk(Number(req.params.id), {
      include: [
        {
          model: Tag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "author",
          attributes: ["firstname", "lastname"],
        },
        {
          model: Question,
          include: [
            {
              model: Level,
              attributes: ["name"],
            },
            {
              model: Answer,
            },
          ],
        },
      ],
    });

    // Formater la date de création
    const formattedCreatedAt = format(new Date(quiz.createdAt), "dd/MM/yyyy");

    res.render("quiz", { quiz, formattedCreatedAt });
  },
};

module.exports = quizController;
