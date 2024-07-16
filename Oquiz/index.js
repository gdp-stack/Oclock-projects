// Load environment variables
require("dotenv").config();

// Dependencies
const express = require("express");
const middlewares = require("./src/middlewares");
const router = require("./src/router");

// Create Express application
const app = express();

// Setup view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Setup public folder
app.use(express.static("public"));

// Setup router
app.use(router);

// Setup error middlewares
app.use(middlewares.notFoundMiddleware);

// Bootstrap app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
