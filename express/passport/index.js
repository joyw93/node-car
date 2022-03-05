const passport = require("passport");
const local = require("./localStrategy");
const User = require("../models/user");

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      return done(null, user);
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  local();
};
