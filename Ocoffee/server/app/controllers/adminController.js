const dataMapper = require("../dataMapper");
const database = require("../database");

const adminController = {
  adminPage: async (req, res) => {
    try {
      if (req.session.role !== "admin") {
        res.redirect("/");
      }
      res.render("./admin/admin");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  adminArticlePage: async (req, res) => {
    try {
      if (req.session.role !== "admin") {
        res.redirect("/");
      }
      const coffees = await dataMapper.getAllCoffees();
      res.render("./admin/adminArticle", { coffees });
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  adminContactPage: async (req, res) => {
    try {
      if (req.session.role !== "admin") {
        res.redirect("/");
      }
      const messages = await dataMapper.getAllMessages();
      res.render("./admin/adminContact", { messages });
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  adminAddArticle: async (req, res) => {
    try {
      if (req.session.role !== "admin") {
        res.redirect("/");
      }
      req.body.available = adminController.transformToBolean(
        req.body.available
      );
      req.body.new_product = adminController.transformToBolean(
        req.body.new_product
      );
      await dataMapper.addOneCoffee(req.body);
      console.log("Nouvel article créée !");
      res.redirect("/admin-article");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  adminAddArticlePage: async (req, res) => {
    try {
      if (req.session.role !== "admin") {
        res.redirect("/");
      }
      res.render("./admin/adminArticleAdd");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  adminDeleteArticle: async (req, res) => {
    try {
      if (req.session.role !== "admin") {
        res.redirect("/");
      }
      await dataMapper.deleteOneCoffee(req.params.id);
      console.log("Article supprimé !");
      res.redirect("/admin-article");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  adminUpdateArticle: async (req, res) => {
    try {
      if (req.session.role !== "admin") {
        res.redirect("/");
      }
      req.body.available = adminController.transformToBolean(
        req.body.available
      );
      req.body.new_product = adminController.transformToBolean(
        req.body.new_product
      );
      req.body.id = req.params.id;
      console.log(req.body);
      await dataMapper.updateOneCoffee(req.body);
      console.log("Article modifié !");
      res.redirect("/admin-article");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  adminUpdateArticlePage: async (req, res) => {
    try {
      const coffee = await dataMapper.getOneCoffee(req.params.id);
      res.render("./admin/adminArticleUpdate", { coffee });
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  transformToBolean: (data) => {
    if (data === "on") {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = adminController;
