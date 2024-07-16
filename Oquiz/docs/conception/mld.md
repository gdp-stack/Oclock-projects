# MLD

## Règle 1

- Toutes les entités deviennent une table,
- Tous les attributs deviennent des colonnes
- Une contrainte d'unicité est ajoutée sur le discriminant

Difficulté (<u>code difficulté</u>, libelle)

Question (code question, titre, anecdote)

Réponse (code réponse, libelle)

Catégorie (code catégorie, libellé)

Quiz (code quiz, titre, description)

Utilisateur (code utilisateur, nom, prénom, email, mot de passe)

## Règle 2

Pour les associations avec une cardinalité max à 1 :

- on ajoute dans la table du côté du 1 une clé étrangère

Difficulté (<u>code difficulté</u>, libelle)

Question (<u>code question</u>, titre, anecdote, #code difficulté, #code quiz, #code réponse)

Réponse (<u>code réponse</u>, libelle, #code question)

Catégorie (<u>code catégorie</u>, libellé)

Quiz (<u>code quiz</u>, titre, description, #code utilisateur)

Utilisateur (<u>code utilisateur</u>, nom, prénom, email, mot de passe)

## Règle 3

Difficulté (<u>code difficulté</u>, libelle)

Question (<u>code question</u>, titre, anecdote, #code difficulté, #code quiz, #code réponse)

Réponse (<u>code réponse</u>, libelle, #code question)

Catégorie (<u>code catégorie</u>, libellé)

Quiz (<u>code quiz</u>, titre, description, #code utilisateur)

Appartenir (#code quiz, #code catégorie)

Utilisateur (<u>code utilisateur</u>, nom, prénom, email, mot de passe)