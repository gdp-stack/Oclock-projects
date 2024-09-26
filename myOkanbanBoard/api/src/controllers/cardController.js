import Joi from "joi";
import { Card, List } from "../models/index.js";

export async function createCard(req, res) {
  const schema = Joi.object({
    content: Joi.string().required(),
    position: Joi.number().integer().min(1),
    color: getHexadecimalColorSchema(),
    list_id: Joi.number().integer().min(1).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const { content, position, color, list_id } = req.body;

  const list = await List.findByPk(list_id);
  if (!list) {
    return res
      .status(404)
      .json({
        error:
          "Liste non trouvée. Veuillez vérifier la propriété 'list_id' fournie.",
      });
  }

  const createdCard = await Card.create({ content, position, color, list_id });
  res.status(201).json(createdCard);
}

export async function getAllCards(req, res) {
  const cards = await Card.findAll({ include: "tags" });
  res.json(cards);
}

export async function getOneCard(req, res) {
  const { error } = Joi.number().integer().greater(0).validate(req.params.id);
  if (error) {
    return res
      .status(404)
      .json({
        error: `Carte non trouvée. Vérifiez l'ID fourni. ${error.message}`,
      });
  }

  const card = await Card.findByPk(req.params.id, { include: "tags" });

  if (!card) {
    return res.status(404).json({ error: "Carte non trouvée." });
  }

  res.json(card);
}

export async function updateCard(req, res) {
  const cardId = parseInt(req.params.id);

  if (!Number.isInteger(cardId)) {
    return res.status(404).json({ error: `Carte non trouvée` });
  }

  const updateCardSchema = Joi.object({
    content: Joi.string().min(1),
    position: Joi.number().integer().min(1),
    list_id: Joi.number().integer().min(1),
    color: getHexadecimalColorSchema(),
  })
    .min(1)
    .message(
      "Paramètres manquants. Fournissez au moins 'content', 'position', 'list_id' ou 'color'."
    );

  const { error } = updateCardSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const { content, position, list_id, color } = req.body;

  const card = await Card.findByPk(cardId);

  if (!card) {
    return res.status(404).json({ error: `Carte non trouvée` });
  }

  if (list_id) {
    const list = await List.findByPk(list_id);
    if (!list) {
      return res.status(404).json({ error: `Liste non trouvée` });
    }
  }

  const updatedCard = await card.update({
    content,
    position,
    color,
    list_id,
  });

  res.json(updatedCard);
}

export async function deleteCard(req, res) {
  const cardId = parseInt(req.params.id);

  if (!Number.isInteger(cardId)) {
    return res.status(404).json({ error: "Carte non trouvée" });
  }

  const card = await Card.findByPk(cardId);

  if (!card) {
    return res.status(404).json({ error: "Carte non trouvée" });
  }

  await card.destroy();
  res.status(204).end();
}

export async function getAllCardsOfList(req, res) {
  const listId = parseInt(req.params.id);
  if (isNaN(listId)) {
    return res.status(404).json({ error: "listId invalide." });
  }

  const list = await List.findByPk(listId);
  if (!list) {
    return res.status(404).json({ error: "Liste non trouvée." });
  }

  const cards = await Card.findAll({ where: { list_id: listId } });
  res.json(cards);
}

function getHexadecimalColorSchema() {
  return Joi.string()
    .pattern(new RegExp("^#([0-9a-fA-F]{3}){1,2}$"))
    .message('"color" doit être un code hexadécimal valide.');
}
