const express = require("express");
const session = require("express-session");
const app = express();
const router = require("./src/routers/router");

// * Nous sert à obtenir req.body, doit se placer avant les routes
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: "anomad",
    cookie: {
      secure: false,
    },
  })
);

app.use(express.static("public"));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${process.env.PORT} !`);
});
