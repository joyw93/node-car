const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../../src/models/user");
const status = require("../response/auth");
const { response } = require("../response/format");

module.exports = () => {
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, {
                message: response(status.LOGIN_PASSWORD_WRONG),
              });
            }
          } else {
            done(null, false, { message: response(status.LOGIN_USER_NOT_EXIST) });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};