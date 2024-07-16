const dataMapper = require("../dataMapper");

const shopController = {
  shopPage: async (req, res) => {
    try {
      const cart =
        req.session.cart && req.session.cart.length > 0
          ? await dataMapper.getCoffeesInCart(req.session.cart)
          : [];
      res.render("shop", { cart });
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  addToCart: async (req, res) => {
    try {
      req.session.cart
        ? req.session.cart.push(req.params.id)
        : (req.session.cart = [req.params.id]);
      res.redirect(`/article/${req.params.id}`);
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  deleteFromCart: async (req, res) => {
    try {
      req.session.cart = req.session.cart.filter(
        (coffee) => Number(coffee) !== Number(req.params.id)
      );
      res.redirect(`/panier`);
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
};

module.exports = shopController;
