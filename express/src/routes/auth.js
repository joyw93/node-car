module.exports = (app) => {
  const controller = require("../controllers/auth");

  app.post("/auth/signup", controller.signup);
  app.post("/auth/login", controller.login);
  app.get("/auth/logout", controller.logout);
};
