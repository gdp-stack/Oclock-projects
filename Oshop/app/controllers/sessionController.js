const { Scrypt } = require('../auth/Scrypt');
const { User, Role } = require('../models');

const sessionController = {
  index: (req, res) => {
    res.render('login');
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // !! Votre code à partir d'ici

      const user = await User.findOne({
        where: {
          email: email,
        },
        include: {
          model: Role,
          as: 'role',
        },
      });

      if (!user || !Scrypt.compare(password, user.password)) {
        return res.render('login', {
          error: 'Utilisateur ou mot de passe incorrect',
        });
      } else {
        req.session.user = user;
        delete req.session.user.password;
        console.log('Utilisateur connecté !');
      }
      // On récupère user avec le role
      // Est-ce que l'utilisateur existe en BDD ?
      // Sélectionner user avec email et inclure le role, si on ne le trouve pas :
      //      on envoie un message d'erreur dans un objet:  {error: "Utilisateur ou mot de passe incorrect"} et on render `login` en lui passant l'erreur
      // Sinon on continue.

      // Le mot de passe est il correct ?
      // On compare le mots de passe du formulaire avec celui de l'utilisateur
      //      Si le mot de passe est incorrect : on envoie un message d'erreur dans un objet:  {error: "Utilisateur ou mot de passe incorrect"} et on render `login` en lui passant l'erreur

      // On ajoute user a la session

      // On enlève le mot de passe de la session.

      // !! Ne pas modifier cette ligne
      return res.redirect('/');
    } catch (e) {
      console.error(e.message);
      res.status(500).send('Server Error');
    }
  },

  logout: (req, res) => {
    // !! Votre code ici
    delete req.session.user;
    res.redirect('/');
  },
};

module.exports = sessionController;
