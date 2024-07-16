const dataMapper = require("../dataMapper");
const database = require("../database");

const userController = {
  connectPage: (req, res) => {
    try {
      res.render("connection");
    } catch (error) {
      {
        res.status(500).send(error);
        database.end();
      }
    }
  },
  registration: async (req, res) => {
    res.locals.errorMessage = "";
    res.locals.confirmationMessage = "";
    const existingUser = await dataMapper.getUser(
      req.body.login,
      req.body.password
    );
    if (existingUser === undefined) {
      const newUser = await dataMapper.createUser(
        req.body.login,
        req.body.password
      );
      res.locals.confirmationMessage =
        "Le compte a été créée, vous pouvez vous connecter.";
      console.log("Création du compte effectuée !");
    } else {
      res.locals.errorMessage =
        "Echec de la création du compte. Le nom d'utilisateur utilisé existe déjà.";
    }
    res.render("connection");
  },
  authentificator: async (req, res) => {
    res.locals.errorMessage = "";
    const authentification = await dataMapper.getUser(
      req.body.login,
      req.body.password
    );
    if (authentification !== undefined) {
      req.session.login = req.body.login;
      req.session.role = authentification.role;
      console.log("Connexion au compte approuvée !");
      res.redirect("/");
    } else {
      res.locals.errorMessage =
        "Echec de la connexion au compte. Le nom d'utilisateur ou le mot de passe est érroné.";
      res.render("connection");
    }
  },
};

module.exports = userController;
