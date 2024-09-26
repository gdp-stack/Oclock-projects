import sanitizeHtml from "sanitize-html";

export const bodySanitizerMiddleware = (req, res, next) => {
  // L'idée : pour chaque key/valeur du body,
  // si la valeur est une "string", on la passe au html-sanitizer
  
  // Object.keys(req.body); // Pour une carte : ["content", "position", "color", "list_id"]
  Object.keys(req.body).forEach(key => {
    if (typeof req.body[key] === "string") {
      req.body[key] = sanitizeHtml(req.body[key]); 
      //                           ^ la valeur non sanitized
    }
  });

  next();
};
