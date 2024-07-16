const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");
const cardController = require("../controllers/cardController");
const projectController = require("../controllers/projectController");
const labelController = require("../controllers/labelController");
const mainController = require("../controllers/mainController");

router.get("/", mainController.homePage);

router.get("/lists", listController.findAllLists);
router.get("/lists/:id", listController.findOneList);
router.post("/lists/", listController.createOneList);
router.patch("/lists/:id", listController.modifyOneList);
router.delete("/lists/:id", listController.deleteOneList);

router.get("/cards", cardController.findAllCards);
router.get("/cards/:id", cardController.findOneCard);
router.post("/cards/", cardController.createOneCard);
router.patch("/cards/:id", cardController.modifyOneCard);
router.delete("/cards/:id", cardController.deleteOneCard);

router.get("/lists/:id/cards", cardController.findAllCardsFromList);

router.get("/labels", labelController.findAllLabels);
router.get("/labels/:id", labelController.findOneLabel);
router.post("/labels/", labelController.createOneLabel);
router.patch("/labels/:id", labelController.modifyOneLabel);
router.delete("/labels/:id", labelController.deleteOneLabel);

router.put(
  "/cards/:card_id/labels/:label_id",
  labelController.createLabelCardAssociation
);
router.delete(
  "/cards/:card_id/labels/:label_id",
  labelController.deleteLabelCardAssociation
);

router.get("/projects", projectController.findAllProjects);
router.get("/projects/:id", projectController.findOneProject);
router.post("/projects/", projectController.createOneProject);
router.patch("/projects/:id", projectController.modifyOneProject);
router.delete("/projects/:id", projectController.deleteOneProject);

module.exports = router;
