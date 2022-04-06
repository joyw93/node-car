const passport = require("passport");
const local = require("./localStrategy");
const User = require("../models/user");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("deserialr");
    try {
      const user = await User.findOne({ where: { id } });
      console.log("deserializeUser");
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  });

  local();
};
