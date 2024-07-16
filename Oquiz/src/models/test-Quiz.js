require('dotenv').config();
const {Quiz, Question, User, Answer, Tag} = require ('./');
const sequelize = require('./sequelize');
const {Op} = require('sequelize');
const {EOL} = require('node:os');

async function testQuiz(){

  // Récupération avec filtre simple
  const quizzes = await Quiz.findAll({
    where: {
      title: 'Linux - I'
    }
  });

  // Récupération avec opérateur particulier
  const quizzes2 = await Quiz.findAll({
    where: {
      [Op.or]: [              // Op.neq === 'OR'  != <> 
        {title: 'Linux - I'},
        {title: 'Linux - II'}
      ]
    },
    // Ajoute les question qui sont associé a ces quiz.
    // IL va utiliser la dcélcariot des assiciations faites dans le fichier index.js de models

    // Si on ne souhaite inclure q'un autre model, on peut le fournir directement en tant que valeur
    // include: Question 
    // Si on veut/doit inclure plusieurs modèles on peut utiliser un tableau
    include: [

      // On peut inclure un model san préciser de chose supplémentaire de façon simple
      'author',
      // Ou de façon explicite
      /*
      {
        model: User
      },
      */
      {
        model: Question,
        include: [Answer, 'goodAnswer']
      },
      Tag
    ],
  });

  // On peut si on le souhaite récupérer pour chaque quiz l'ensemble des questions de ce quiz, mais il faudra en l'état faire autant de requeête que de quiz différents
  /*for(const quiz of quizzes2){
    const questions = await Question.findAll({where: {quiz_id : quiz.id}});
    console.log(quiz.title);
    for(const question of questions){
      console.log(question.description);
    }
  }*/

  //console.log(quizzes2);
  for(const quiz of quizzes2){
    console.log(quiz.title);
    console.log(`${quiz.Tags.map((tag) => tag.name)}`);
    console.log(quiz.author.fullname);
    for(const question of quiz.Questions){
      console.log(question.description);
    }
  }

  // Comme régler le problème, permettre à sequelize de faire des jointures.

  //console.log(quizzes2);
  sequelize.close();
}

testQuiz();

