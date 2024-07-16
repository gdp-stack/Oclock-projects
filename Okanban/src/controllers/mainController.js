const database = require("../models/sequelize");

const mainController = {
  homePage: (req, res) => {
    res.send("Heyyyy BG");
  },
};

module.exports = mainController;
