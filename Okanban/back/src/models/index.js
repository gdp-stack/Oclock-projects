const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const Card = require("./Card");
const List = require("./List");
const Label = require("./Label");
const Project = require("./Project");
const Card_Label = require("./Card_Label");

Card.belongsTo(List, { foreignKey: "list_id" });
List.hasMany(Card, { foreignKey: "list_id" });

List.belongsTo(Project, { foreignKey: "project_id" });
Project.hasMany(List, { foreignKey: "project_id" });

Label.belongsToMany(Card, {
  through: "Card_Label",
  foreignKey: "label_id",
  otherKey: "card_id",
});
Card.belongsToMany(Label, {
  through: "Card_Label",
  foreignKey: "card_id",
  otherKey: "label_id",
});

module.exports = {
  Card,
  List,
  Project,
  Label,
  Card_Label,
};
