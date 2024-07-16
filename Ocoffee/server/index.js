const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();

const router = require("./app/router");

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "coffeeshop",
    saveUninitialized: true,
    resave: true,
    cookie: {
      secure: false,
      maxAge: 60000, //cookie de 1h
    },
  })
);

app.use((req, res, next) => {
  res.locals.currentSession = req.session;
  next();
});

app.use(router);

app.use((req, res) => {
  res.status(404).render("404");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur : http://localhost:${PORT}`);
});
