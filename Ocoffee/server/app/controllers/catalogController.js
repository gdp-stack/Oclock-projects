const dataMapper = require("../dataMapper");

const catalogController = {
  catalogPage: async (req, res) => {
    try {
      const coffees = await dataMapper.getAllCoffees();
      res.render("catalog", { coffees });
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
};

module.exports = catalogController;
