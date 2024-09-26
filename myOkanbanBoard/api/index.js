// Load environment variables
import "dotenv/config";

// Import dependencies
import express from "express";
import cors from "cors";
import { router } from "./src/router.js";
import { bodySanitizerMiddleware } from "./src/middlewares/body-sanitizer.js";

// Create app
const app = express();

// Authorize CORS requests 
app.use(cors(process.env.ALLOWED_DOMAINS || "*")); // * = tous les domaines (pour nous faciliter la vie sur la saison future, mais en pratique, on devrait limiter l'accès à notre API uniquement au front qui va nous appeler !)

// Disable x-powered-by Express header // => ne pas leak des informations sur notre stack technique
app.disable('x-powered-by');

// Add body parser
app.use(express.urlencoded({ extended: true })); // Parser les bodies de type "application/www-form-urlencoded"
app.use(express.json()); // Parser les bodies de type "application/json"

// Filter out XSS injection from body data
app.use(bodySanitizerMiddleware);

// Configure routes
app.use("/api", router);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
