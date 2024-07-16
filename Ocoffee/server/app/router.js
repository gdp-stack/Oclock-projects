const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const catalogController = require("./controllers/catalogController");
const contactController = require("./controllers/contactController");
const shopController = require("./controllers/shopController");
const articleController = require("./controllers/articleController");
const userController = require("./controllers/userController");
const adminController = require("./controllers/adminController");

//Page d'accueil
router.get("/", mainController.homePage);

//Routes d'inscription et authentification
router.get("/connexion", userController.connectPage);
router.get("/inscription", userController.registration);
router.post("/inscription", userController.registration);
router.get("/authentification", userController.registration);
router.post("/authentification", userController.authentificator);

//Routes d'accès admin
router.get("/admin", adminController.adminPage);
router.get("/admin-article", adminController.adminArticlePage);
router.get("/admin-contact", adminController.adminContactPage);

//Routes fonctionnalites admin
router.get("/admin-article/ajout", adminController.adminAddArticlePage);
router.post("/admin-article/ajout", adminController.adminAddArticle);
router.get("/article/:id/modification", adminController.adminUpdateArticlePage);
router.post("/article/:id/modification", adminController.adminUpdateArticle);
router.get("/article/:id/suppression", adminController.adminDeleteArticle);

//Routes catalogue et articles
router.get("/catalogue", catalogController.catalogPage);
router.get("/article/:id", articleController.articlePage);

//Routes de formulaire de contact
router.get("/contact", contactController.contactPage);
router.post("/contact", contactController.getContactForm);
router.get("/contacted", contactController.contactedPage);

//Routes de gestion du panier
router.get("/panier", shopController.shopPage);
router.get("/panier/:id", shopController.addToCart);
router.get("/panier/supprimer/:id", shopController.deleteFromCart);

//A VENIR - Routes de gestion de la commande et paiement

//Route à propos
router.get("/a-propos", mainController.aboutPage);

module.exports = router;
