import { Router } from "express";
import * as listController from "./controllers/listController.js";
import * as cardController from "./controllers/cardController.js";
import * as tagController from "./controllers/tagController.js";
import { controllerWrapper as cw } from "./utils/controllerWrapper.js";

export const router = Router();

// == Routes des lists ==
router.get("/lists", cw(listController.getAllLists));
router.get("/lists/:id", cw(listController.getOneList));
router.post("/lists", cw(listController.createList));
router.patch("/lists/:id", cw(listController.updateList));
router.delete("/lists/:id", listController.deleteList);

// == Routes des cartes ==
router.get("/cards", cw(cardController.getAllCards));
router.get("/cards/:id", cw(cardController.getOneCard));
router.post("/cards", cw(cardController.createCard));
router.patch("/cards/:id", cw(cardController.updateCard));
router.delete("/cards/:id", cw(cardController.deleteCard));

router.get("/lists/:id/cards", cw(cardController.getAllCardsOfList)); // Au choix, dans cardController ou listController

// == Routes des tags ==
router.get("/tags", cw(tagController.getAllTags));
router.get("/tags/:id", cw(tagController.getOneTag));
router.post("/tags", cw(tagController.createTag));
router.patch("/tags/:id", cw(tagController.updateTag));
router.delete("/tags/:id", cw(tagController.deleteTag));
router.put("/cards/:cardId/tags/:tagId", cw(tagController.assignTagToCard));
router.delete("/cards/:cardId/tags/:tagId", cw(tagController.removeTagFromCard));


// Middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
