module.exports = function (app) {
  const auth = require("./authController");

  app.post("/auth/signup", auth.signup);
};
