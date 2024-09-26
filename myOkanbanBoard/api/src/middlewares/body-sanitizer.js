import sanitizeHtml from "sanitize-html";

export const bodySanitizerMiddleware = (req, res, next) => {
  Object.keys(req.body).forEach((key) => {
    if (typeof req.body[key] === "string") {
      req.body[key] = sanitizeHtml(req.body[key]);
    }
  });

  next();
};
