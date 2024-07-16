// Toujours commencer par importer les variables d'environnement !
require("dotenv").config();

const express = require("express");

const session = require("express-session");

const path = require("path");

// on importe le router
const router = require("./app/router");

// un peu de config
const PORT = process.env.PORT || 3000;

const app = express();

app.set("views", "./app/views");
app.set("view engine", "ejs");

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static(path.join(__dirname, "integration")));

// Crééer une session et son identifiant
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "Guess it!",
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // ça fait une heure
    },
  })
);

// routage !
app.use(router);

app.use((req, res) => {
  res.status(404).render("404");
});

// on lance le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
