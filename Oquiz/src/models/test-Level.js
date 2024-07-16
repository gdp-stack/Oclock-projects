require('dotenv').config();
// Si aucun fichier n'est préciser dans le require d'un répoertoire, par défaut node essayera de require un fichier index.js
const {Level, Question, Quiz, Answer} = require ('./');
//const {Level} = require ('./index');
const {EOL} = require('node:os');

async function testLevel(){

  // 3 - Utilisation du modèle
  
  // Récupération d'un level par son id

  // Exercice : Récupérer en même temps que le level les questions qui on ce level, ainsi que le quiz dans lesquels apparaissent ces questions.
  const level1 = await Level.findByPk(1, {
    include: {
      model: Question,
      include: [Quiz, Answer, 'goodAnswer']
    }
  });

  console.log(level1.name);
  console.log(level1.Questions.map(question => `${question.description} : ${question.Quiz.title}`).join(EOL));

  /*
  // console.log(level1);
  // permet d'avoir un affichage plus concis
  console.log(level1.toJSON());
  

  // création d'un nouveau level (approche 1 - avec build puis save):
  const newLevel = Level.build({ name: 'Intermédiaire plus' });
  await newLevel.save();

  // création d'un nouveau level (approche 2 - avec create : build + save intégré):
  const newLevel2 = await Level.create({ name: 'Intermédiaire moins' });

  // mise à jour d'un level
  newLevel2.name = 'Intermédiaire -';
  await newLevel2.save();

  // suppression d'un level
  await newLevel2.destroy();

  // Récupération de tous les levels
  const levels = await Level.findAll();
  
  // Lorsque l'on execute un script dans le ternimal on peut utiliser les boucles synchrones, cela n'aura pas d'incidence sur les performances
  for (const level of levels){
    console.log(level.toJSON());
  }

  // Par contre s'il on doit utiliser une boucle au sein d'une applciation web qui doit répondre à des requête HTTP en parallèle. Il est mieux d'utiliser les boucles asynchrnore (forEach, map, …) qui ne sont pas bloquantes et et ne forceront pas une utilisateur à attendre que la boucle d'un autre utilisateur soit terminée.
  /*
  levels.forEach((level, index) => {
    console.log(level.toJSON());
  });
  */
  
}

testLevel();
