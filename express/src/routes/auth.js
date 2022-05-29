module.exports = (app) => {
  const auth = require("../controllers/auth");

  app.post("/auth/signup", auth.signup);
  app.post("/auth/login", auth.login);
};
