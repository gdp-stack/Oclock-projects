const { Category, Product } = require('../models');
const database = require('../database');

const catalogController = {
  index: async (req, res) => {
    res.render('index');
  },

  productsList: async (req, res) => {
    try {
      // todo, ici il faudra les vrais produits et catégories de la db
      const products = await Product.findAll();
      const categories = await Category.findAll();
      res.render('shop', {
        categories,
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  },

  category: async (req, res) => {
    // todo, il faut récupérer la catégorie en fonction de l'id présent dans l'url et la passer à la vue
    const categoryId = req.params.id;
    const products = await Product.findAll({
      where: {
        category_id: categoryId,
      },
      include: {
        model: Category,
        as: 'category',
        attributes: ['name'],
      },
    });
    res.render('category', { products });
  },

  product: async (req, res) => {
    // todo, récupérer le produit demandé en base de données.
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    res.render('product', { product });
  },

  cart: (req, res) => {
    res.render('cart');
  },
};

module.exports = catalogController;
