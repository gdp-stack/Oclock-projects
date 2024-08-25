const express = require("express");
const session = require("express-session");
const cors = require("cors");
const router = require("./src/routers/router");

const app = express();

//Récuppère req.body au format json lors d'une requête
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Autorise tous les domaines extérieurs à accéder à l'API
app.use(cors());

app.use(
  session({
    saveUninitialized: true,
    secret: "site pokedex de gdp-stack",
    resave: true,
    cookie: {
      secure: false,
    },
  })
);

//Chemin d'accès aux asset fixé au folder public
app.use(express.static("public"));

//Routing de l'application
app.use(router);

//Renvoie de page erreur 404
//ICI

//Definition du port d'écoute du serveur
app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${process.env.PORT} !`);
});
