import { Card, List, Tag } from "./associations.js";
import { sequelize } from "./dbClientSequelize.js";

// == List ==
const list = await List.findOne({ include: "cards" });
console.log(list.toJSON());

// == Card ==
const card = await Card.findOne({ include: ["list", "tags"] });
console.log(card.toJSON());

// == Tag ==
const tag = await Tag.findOne({ include: "cards" });
console.log(tag.toJSON());

// == Fermer le tunnel de connexion Sequelize pour que le script nous rende automatiquement la main
await sequelize.close();

