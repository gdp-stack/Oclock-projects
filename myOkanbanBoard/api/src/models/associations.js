import { Card } from "./Card.js";
import { List } from "./List.js";
import { Tag } from "./Tag.js";

// List <-> Card (One-to-Many)
List.hasMany(Card, {
  foreignKey: "list_id",
  as: "cards",
});
Card.belongsTo(List, {
  foreignKey: "list_id",
  as: "list",
});

// Card <-> Tag
Card.belongsToMany(Tag, {
  through: "card_has_tag",
  as: "tags",
  foreignKey: "card_id",
});
Tag.belongsToMany(Card, {
  through: "card_has_tag",
  as: "cards",
  foreignKey: "tag_id",
});

export { Card, List, Tag };
