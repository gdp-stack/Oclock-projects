const { Scrypt } = require('../auth/Scrypt');
const emailValidator = require('email-validator');
const { User, Role } = require('../models');

const userController = {
  index: (req, res) => {
    res.render('register');
  },

  register: async (req, res) => {
    try {
      const { firstname, lastname, email, password, passwordConfirm } =
        req.body;
      // !! votre code à partir d'ici
      if (password !== passwordConfirm) {
        return res.render('register', {
          error: 'Mot de passe différent lors de la confirmation.',
        });
      }

      // verifier l'email avec le package npm email-validator
      if (emailValidator.validate(email)) {
        const user = await User.findOne({
          where: {
            email: email,
          },
        });
        if (user === null || email !== user.email) {
          const hashedPassword = Scrypt.hash(password);
          const fullname = firstname + ' ' + lastname;
          console.log(fullname);

          //on creer l'instance
          const currentUser = await User.create({
            name: fullname,
            email: email,
            password: hashedPassword,
            role_id: 1,
          });
          console.log('Utilisateur créée en BDD.');
          // !! ne pas modifier cette ligne
          return res.render('login', {
            message: 'Vous pouvez maintenant vous connecter !',
          });
        }
        return res.render('register', {
          error: 'Un compte est déjà enregistré sur cet email !',
        });
      }
      // verifier si password correspond à password confirm

      // hash password

      // attribuer un rôle ici, le role customer.

      // sauvegarder user
    } catch (error) {
      console.log(error);
      res.render('register', { error: error.message });
    }
  },

  show: async (req, res) => {
    res.render('dashboard/dashboard');
  },
};

module.exports = userController;
