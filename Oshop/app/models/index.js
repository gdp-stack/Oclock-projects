const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Role = require('./Role');

// Un produit peut avoir une catétorie
// Une catégorie peut avoir des produits
// Associer les catégories aux produits (as products)
// Associer les produits aux catégories (as category)

Role.hasMany(User, {
  foreignKey: 'role_id',
  as: 'users',
});

User.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'role',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'products',
});

module.exports = { User, Category, Product, Role };
