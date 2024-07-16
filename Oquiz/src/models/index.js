const Answer = require('./Answer');
const Level = require('./Level');
const Question = require('./Question');
const Quiz = require('./Quiz');
const Tag = require('./Tag');
const User = require('./User');

// Un "Level" à plusieurs "Question" 1N
Level.hasMany(Question);
// Dans l'autre sens on peut aussi dire qu'une "Question" appartient à un "Level" N1 (Reciproque d'association)
Question.belongsTo(Level);

Quiz.hasMany(Question);
// IL n'est pas forcément nécessaire de mettre en place toutes les associations, on le fera en fonction du besoin de l'application.
// Dans notre application de quiz, on ira chercher les questions d'un quiz, mais jamais le quiz d'une question.
Question.belongsTo(Quiz);

User.hasMany(Quiz);
Quiz.belongsTo(User, {as: 'author', foreignKey: 'user_id'});

Question.hasMany(Answer);
// On peut donner un alias à une association afin de la différencier d'une autre, en l'occurence, ici, la précédente.
// Ici, Sequelize ne peut pas deviner le nom de la clé étrangère car on a une association oneToOne dont la récupération est inversé.
// C'est a dire qu'on part du model Question en lui expliquant qu'il a une bonne réponse. Donc il s'attend (techniquement) à avoir une clé étrangère answer_id sur question. Alors qu'en faite la clé étrangère est du côté de Answer et s'apelle "question_id"
Question.hasOne(Answer, {
  as: 'goodAnswer',
  // Donc on précise la clé étrangère dans les options d'association
  foreignKey: 'question_id'
});
Answer.belongsTo(Question);

// Pour déclarer une association ManyToMany on utilise la méthode belongsToMany
// Quand on utilise la méthode belongsToMany on doit toujours préciser le nom de la table qui sert de pont pour l'association. A travers quoi je vais récupérer l'association.
Quiz.belongsToMany(Tag, {through: 'quiz_has_tag'});
Tag.belongsToMany(Quiz, {through: 'quiz_has_tag'});

module.exports = {
  Answer,
  Level,
  Question,
  Quiz,
  Tag,
  User,
};
