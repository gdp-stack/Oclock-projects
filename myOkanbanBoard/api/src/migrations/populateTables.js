import { Card, List, Tag, sequelize } from "../models/index.js";

console.log("🚧 Ajout de listes de test...");
const shoppingList  = await List.create({ title: "Liste des courses", position: 1 });
const studentsList  = await List.create({ title: "Liste des apprennants", position: 3 });
const birthdaysList = await List.create({ title: "Liste des anniversaires", position: 2 });

console.log("🚧 Ajout de cartes de test...");
const coffeeCard    = await Card.create({ content: "Café", color: "#5c3715", list_id: shoppingList.id });
await Card.create({ content: "Thé", color: "#0d3d0f", list_id: shoppingList.id });
const reblochonCard = await Card.create({ content: "Reblochon savoyard", list_id: shoppingList.id});

const momBirthday   = await Card.create({ content: "Maman le 01/01/1970", position: 1, list_id: birthdaysList.id });
await Card.create({ content: "Mamie le 01/01/1940", position: 2, list_id: birthdaysList.id });

await Card.create({ content: "John Doe", position: 1, list_id: studentsList.id });

console.log("🚧 Ajout de tags de test...");
const urgentTag = await Tag.create({ name: "Urgent", color: "#FF0000"});
const ecoTag    = await Tag.create({ name: "Eco-responsable", color: "#00FF00"});

console.log("🚧 Ajout de tags sur nos cartes...");
await coffeeCard.addTag(urgentTag);
await coffeeCard.addTag(ecoTag);
await momBirthday.addTag(urgentTag);
await reblochonCard.addTag(urgentTag);


console.log("✅ Migration OK ! Fermeture de la base..."); // On ferme le tunnel de connexion pour que le script s'arrête bien
await sequelize.close();
