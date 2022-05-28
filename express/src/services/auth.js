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

exports.loginUser = async (user) => {
  try {
    passport.authenticate("local", (authError, user, info) => {
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (info) {
        return res.status(401).send(info.message);
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        return res.json(user);
      });
    });
    return response(status.SUCCESS);
  } catch (err) {
    return errResponse(status.DB_ERROR);
  }
};
