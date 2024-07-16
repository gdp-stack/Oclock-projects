const { Router } = require("express");
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController");
const quizController = require("./controllers/quizController");
const tagController = require("./controllers/tagController");

const router = new Router();

router.get("/", mainController.renderHomePage);
router.get("/quiz/:id", quizController.renderQuizPage);

router.get("/levels", levelController.renderLevelsPage);
router.get("/levels/:id/delete", levelController.deleteLevelAction);

router.get("/sujets", tagController.renderTagPage);

module.exports = router;
