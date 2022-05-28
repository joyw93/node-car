module.exports = (app) => {
  const auth = require("../controllers/auth");

  app.get("/auth/test", (req, res) => {
    res.send("hi");
  });
  app.post("/auth/signup", auth.signup);
};
