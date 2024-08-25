const database = require("../models/sequelize");

const mainController = {
  homePage: (req, res) => {
    res.send("Heyyyyy");
  },
};

module.exports = mainController;
