import Joi from "joi";
import { Tag, Card } from "../models/index.js";


export async function getAllTags(req, res) {
  const tags = await Tag.findAll();
  return res.json(tags);
}

export async function getOneTag(req, res) {
  const tagId = parseInt(req.params.id);
  if (! Number.isInteger(tagId)) {
    return res.status(404).json({ error: "Tag not found." });
  }

  const tag = await Tag.findByPk(tagId);
  if (! tag) {
    return res.status(404).json({ error: "Tag not found." });
  }
  
  res.json(tag);
}

export async function deleteTag(req, res) {
  const tagId = parseInt(req.params.id);
  if (! Number.isInteger(tagId)) {
    return res.status(404).json({ error: "Tag not found." });
  }

  const tag = await Tag.findByPk(tagId);
  if (! tag) {
    return res.status(404).json({ error: "Tag not found." });
  }

  await tag.destroy();

  res.status(204).end();
}

export async function createTag(req, res) {
  const createTagSchema = Joi.object({
    name: Joi.string().min(1).required(),
    color: getHexadecimalColorSchema()
  });
  
  const { error } = createTagSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  // On vérifie s'il n'existe pas déjà un tag avec le même nom, auquel cas peut renvoyer une 409 (Conflit)
  const isTagNameAlreadyTaken = !! await Tag.count({ where: { name: req.body.name }}); // 0 (false) ou 1 (true)
  if (isTagNameAlreadyTaken) {
    return res.status(409).json({ error: "The provided tag name is already taken." });
  }

  const { name, color } = req.body;
  const createdTag = await Tag.create({ name, color });

  res.status(201).json(createdTag);
}

export async function updateTag(req, res) {
  const tagId = parseInt(req.params.id);
  if (! Number.isInteger(tagId)) {
    return res.status(404).json({ error: "Tag not found." });
  }

  const updateTagSchema = Joi.object({
    name: Joi.string().min(1),
    color: getHexadecimalColorSchema()
  }).min(1).message("Missing body parameters. Provide at least 'name' or 'color' property.");


  const { error } = updateTagSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  
  const tag = await Tag.findByPk(tagId);
  if (! tag) {
    return res.status(404).json({ error: "Tag not found." });
  }
  
  const { name, color } = req.body;
  const updatedTag = await tag.update({
    name: name || tag.name,
    color: color || tag.color
  });

  res.json(updatedTag);
}

export async function assignTagToCard(req, res) {
  const tagId = parseInt(req.params.tagId);
  if (! Number.isInteger(tagId)) {
    return res.status(404).json({ error: "Tag not found." });
  }

  const cardId = parseInt(req.params.cardId);
  if (! Number.isInteger(cardId)) {
    return res.status(404).json({ error: "Card not found." });
  }

  const tag = await Tag.findByPk(tagId);
  if (! tag) {
    return res.status(404).json({ error: "Tag not found." });
  }

  const card = await Card.findByPk(cardId);
  if (! card) {
    return res.status(404).json({ error: "Card not found." });
  }

  await card.addTag(tag);

  // Techniquement : 204 + res.end()
  // MAIS PRATIQUE : on renvoie la carte à jour pour vérification
  const updatedCard = await Card.findByPk(cardId, { include: ["tags"] });
  res.status(201).json(updatedCard);
}

export async function removeTagFromCard(req, res) {
  const tagId = parseInt(req.params.tagId);
  if (! Number.isInteger(tagId)) {
    return res.status(404).json({ error: "Tag not found." });
  }

  const cardId = parseInt(req.params.cardId);
  if (! Number.isInteger(cardId)) {
    return res.status(404).json({ error: "Card not found." });
  }

  const tag = await Tag.findByPk(tagId);
  if (! tag) {
    return res.status(404).json({ error: "Tag not found." });
  }

  const card = await Card.findByPk(cardId);
  if (! card) {
    return res.status(404).json({ error: "Card not found." });
  }

  await card.removeTag(tag);

  // Techniquement : 204 + res.end()
  // MAIS PRATIQUE : on renvoie la carte à jour pour vérification
  const updatedCard = await Card.findByPk(cardId, { include: ["tags"] });
  res.status(200).json(updatedCard);
}


function getHexadecimalColorSchema() {
  // Fonction utilitaire pour ne pas avoir à se répéter
  return Joi
    .string()
    .pattern(new RegExp('^#([0-9a-fA-F]{3}){1,2}$'))
    .message("\"color\" should be a valid hexadecimal code."); 
}
