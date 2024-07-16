const dataMapper = require("../dataMapper");

const contactController = {
  contactPage: async (req, res) => {
    try {
      res.render("contact");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  contactedPage: async (req, res) => {
    try {
      res.render("contacted");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  getContactForm: async (req, res) => {
    try {
      await dataMapper.addNewMessage(req.body);
      console.log("Message envoyé !");
      res.redirect("/contacted");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
};

module.exports = contactController;
