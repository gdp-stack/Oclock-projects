import Joi from "joi";
import sanitizeHtml from "sanitize-html";
import { List, sequelize } from "../models/index.js";

export async function getAllLists(req, res) {
  try { // Pour la posterité, on garde ce try-catch

    // Récupérer toutes les listes en BDD
    const lists = await List.findAll({
      order: [
        ["position", "ASC"],
        ["created_at", "DESC"]
      ],
      include: { association: "cards", include: "tags" } // Avec ces includes, on renvoie toute la BDD => mauvaise pratique car bcp de data sur le réseau. Avantage : faciliter notre travail en frontend plus tard
    });
  
    // Renvoyer au format JSON
    res.json(lists);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unexpected server error. Please try again later." });
  }
}

export async function createList(req, res) {

  // Récupérer les données de la liste à créé fournies par l'utilisateur
  // console.log(req.body);
  let { title, position } = req.body;
  title = sanitizeHtml(title); // Ici, on sanitize l'input de l'utilisateur, pour se prémunir des injections XSS (démo !) // Mieux : le faire de manière globale sur toute notre app !

  // Analyser les données du body pour vérifier que tout est en règle

  // - Vérifier que le title (obligatoire !) est présent et est une string
  if (! title || typeof title !== "string") {
    res.status(400).json({ error: "Property 'title' should be a non empty string." });
    return; // On oublie pas le return pour arrêter le reste de la fonction
  }

  // - Si le client nous fourni la "position", vérifier que cette position est un nombre entier supérieur ou égal à 1
  if ((position !== undefined) && ! iStrictlyPositiveInteger(position)) {
    return res.status(400).json({ error: "Property 'position' should be a positive integer when provided." });
  }

  // Créer la nouvelle liste en BDD
  const createdList = await List.create({
    title: title, 
    position: position // si position est "undefined", notre ORM Sequelize mettra la valeur par défaut, ie 1
  });

  // Répondre au client avec les bonnes infos (cf. la spécification !)
  res.status(201).json(createdList);
}

function iStrictlyPositiveInteger(value) {
  if (typeof value !== "number") { return false; }
  if (!Number.isInteger(value)) { return false; }
  if (value <= 0) { return false; }
  return true;
}

export async function getOneList(req, res) {
  // Récupérer l'ID de la liste demandée et le parser
  const listId = parseInt(req.params.id);

  // Valider l'input
  if (isNaN(listId)) {
    return res.status(404).json({ error: "List not found. Please verify the provided ID." });
  }

  // Peut-on écrire ça ?  ==> attentions aux injections SQL qui peuvent être présente notamment si notre ORM n'est pas à jour !
  // const list = await List.findByPk(req.params.id);

  // Récupérer la liste en BDD
  const list = await List.findByPk(listId);

  // Si elle n'existe pas => 404
  if (! list) {
    return res.status(404).json({ error: "List not found. Please verify the provided ID." });
  }

  // Renvoie en JSON au client
  res.json(list);
}

// Pour info, à titre indicatif
export async function getOneListInsecure(req, res) {
  const listId = req.params.id; // "1; DROP TABLE list; --"

  // Equivalent de db.query() avec le module "pg"
  const [, result] = await sequelize.query(`SELECT * FROM list WHERE id = ${listId}`); // Contre productif, autant utilise List.findByPk, mais pour l'extension de l'injection SQL profitons de cette possibilité
  //                                  ^ SELECT * FROM list WHERE id = 1; DROP TABLE list; --
  
  // Pour éviter le soucis avec pg : 
  // ====> soit notre ORM
  //       - const list = await List.findByPk(listId); 
  // ====> soit les requêtes paramétrées / requêtes préparées 
  //       - const [, result] = await sequelize.query("SELECT * FROM list WHERE id = $1", [listId]);

  const list = result.rows[0];

  if (! list) { return res.status(404).json({ error: "List not found. Please verify the provided ID." }); }
  res.json(list);
}

export async function updateList(req, res) {
  // console.log(req.body); // { title, position }
  
  // Validation du BODY :
  // - title : string non vide
  // - position : entier, positif
  // - au moins 1 de ces 2 champs doit être présent
  
  // Valider le body ==> Pas en vanilla JS, outil : Joi
  // ==> On définie ce à quoi le body que nous envoie le client doit ressembler
  // ==> On valide nos body, mais plus à la main, avec un outil pratique !
  const schema = Joi.object({
    title: Joi.string().min(1), // min(1) : LORSQUE FOURNI, le nouveau titre doit avoir au moins 1 caractère
    position: Joi.number().integer().min(1) // min(1) : LORS FOURNIE, la position doit être supérieur à 1
  }).min(1).message("Invalid body: provide at least 'title' or 'position' property."); 

  const { error } = schema.validate(req.body); // Si error est non null, alors cela signifie que le body ne passe pas la validation
  if (error) {
    return res.status(400).json({ error: error.message }); // Le message d'erreur est généré automatiquement par Joi
  }

  // Récupérer l'id de la liste à update
  const listId = parseInt(req.params.id);

  // Valider l'ID de la liste
  if (isNaN(listId)) {
    return res.status(404).json({ error: "List not found. Please verify the provided ID." });
  }

  // Récupérer la liste en BDD
  const list = await List.findByPk(listId);

  // Si elle n'existe pas => 404
  if (! list) {
    return res.status(404).json({ error: "List not found. Please verify the provided ID." });
  }

  // Update la liste
  if (req.body.title) {
    list.title = req.body.title;
  }
  if (req.body.position) {
    list.position = req.body.position;
  }
  await list.save(); // Bonne nouvelle, sequelize gère automatiquement l'update du champs `updated_at`

  // Renvoyer la liste updated au client
  res.json(list);
}

export async function deleteList(req, res) {
  // Récupérer l'ID de la liste à supprimer
  const listId = parseInt(req.params.id);

  // Vérifier que l'ID est valide
  if (isNaN(listId)) {
    return res.status(404).json({ error: "List not found. Please verify the provided ID." });
  }

  // Récupérer la liste à supprimer en BDD
  const list = await List.findByPk(listId);

  // Si elle n'existe pas => 404
  if (! list) {
    return res.status(404).json({ error: "List not found. Please verify the provided ID." });
  }

  // On supprime la liste
  await list.destroy(); // await pour attendre que la BDD confirme la bonne suppression de l'enregistrement

  // Renvoie une 204 (No content)
  res.status(204).end(); // .end() pour répondre à une requête sans y mettre de body
}

