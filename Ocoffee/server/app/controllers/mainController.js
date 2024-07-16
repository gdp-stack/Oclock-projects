const dataMapper = require("../dataMapper");

const mainController = {
  homePage: async (req, res) => {
    try {
      const newCoffees = await dataMapper.getNewCoffees();
      res.render("index", { newCoffees });
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  aboutPage: (req, res) => {
    try {
      res.render("about");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
};

module.exports = mainController;
