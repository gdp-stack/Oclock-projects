import Joi from "joi";
import sanitizeHtml from "sanitize-html";
import { List, sequelize } from "../models/index.js";

export async function getAllLists(req, res) {
  try {
    const lists = await List.findAll({
      order: [
        ["position", "ASC"],
        ["created_at", "DESC"],
      ],
      include: { association: "cards", include: "tags" },
    });

    res.json(lists);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "Erreur serveur inattendue. Veuillez réessayer plus tard.",
      });
  }
}

export async function createList(req, res) {
  let { title, position } = req.body;
  title = sanitizeHtml(title);

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({
        error:
          "La propriété 'title' doit être une chaîne de caractères non vide.",
      });
  }

  if (position !== undefined && !iStrictlyPositiveInteger(position)) {
    return res
      .status(400)
      .json({
        error:
          "La propriété 'position' doit être un entier positif lorsqu'elle est fournie.",
      });
  }

  const createdList = await List.create({
    title: title,
    position: position,
  });

  res.status(201).json(createdList);
}

function iStrictlyPositiveInteger(value) {
  if (typeof value !== "number") return false;
  if (!Number.isInteger(value)) return false;
  if (value <= 0) return false;
  return true;
}

export async function getOneList(req, res) {
  const listId = parseInt(req.params.id);

  if (isNaN(listId)) {
    return res
      .status(404)
      .json({ error: "Liste non trouvée. Veuillez vérifier l'ID fourni." });
  }

  const list = await List.findByPk(listId);

  if (!list) {
    return res
      .status(404)
      .json({ error: "Liste non trouvée. Veuillez vérifier l'ID fourni." });
  }

  res.json(list);
}

export async function getOneListInsecure(req, res) {
  const listId = req.params.id;

  const [, result] = await sequelize.query(
    `SELECT * FROM list WHERE id = ${listId}`
  );

  const list = result.rows[0];

  if (!list) {
    return res
      .status(404)
      .json({ error: "Liste non trouvée. Veuillez vérifier l'ID fourni." });
  }
  res.json(list);
}

export async function updateList(req, res) {
  const schema = Joi.object({
    title: Joi.string().min(1),
    position: Joi.number().integer().min(1),
  })
    .min(1)
    .message(
      "Corps de la requête invalide : fournissez au moins 'title' ou 'position'."
    );

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const listId = parseInt(req.params.id);

  if (isNaN(listId)) {
    return res
      .status(404)
      .json({ error: "Liste non trouvée. Veuillez vérifier l'ID fourni." });
  }

  const list = await List.findByPk(listId);

  if (!list) {
    return res
      .status(404)
      .json({ error: "Liste non trouvée. Veuillez vérifier l'ID fourni." });
  }

  if (req.body.title) {
    list.title = req.body.title;
  }
  if (req.body.position) {
    list.position = req.body.position;
  }
  await list.save();

  res.json(list);
}

export async function deleteList(req, res) {
  const listId = parseInt(req.params.id);

  if (isNaN(listId)) {
    return res
      .status(404)
      .json({ error: "Liste non trouvée. Veuillez vérifier l'ID fourni." });
  }

  const list = await List.findByPk(listId);

  if (!list) {
    return res
      .status(404)
      .json({ error: "Liste non trouvée. Veuillez vérifier l'ID fourni." });
  }

  await list.destroy();

  res.status(204).end();
}
