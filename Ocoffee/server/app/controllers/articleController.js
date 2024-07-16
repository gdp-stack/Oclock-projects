const dataMapper = require("../dataMapper");

const articleController = {
  articlePage: async (req, res) => {
    try {
      const coffee = await dataMapper.getOneCoffee(req.params.id);
      res.render("article", { coffee });
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
};

module.exports = articleController;
