const { User } = require("../models");
const passport = require("passport");
const bcrypt = require("bcrypt");
const status = require("../../config/responseStatus");
const { response, errResponse } = require("../../config/responseFormat");

exports.createUser = async (user) => {
  try {
    // 이메일 중복 확인
    const userRow = await User.findOne({ where: { email: user.email } });
    if (userRow) return response(status.SIGNUP_REDUNDANT_EMAIL);

    // 비밀번호 hashing
    const hashedPassword = await bcrypt.hash(user.password, 12);

    // 유저 등록
    await User.create({
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });
    return response(status.SUCCESS);
  } catch (err) {
    return errResponse(status.DB_ERROR);
  }
};

exports.loginUser = async (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.log(authError);
      return res.send(response(status.SERVER_ERROR));
    }

    if (info) return res.send(info.message);

    return req.login(user, (loginError) => {
      if (loginError) {
        console.log(loginError);
        return res.send(response(status.SERVER_ERROR));
      }

      return res.send(response(status.SUCCESS, user.id));
    });
  })(req, res, next);
};
