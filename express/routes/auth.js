const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { email, name, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.send("이미 존재하는 이메일입니다.");
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      name,
      email,
      password: hash,
    });
    return res.send("signup success");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", (req, res, next) => {
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
  })(req, res, next);
});

router.post("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy(); // 선택사항
  return res.status(200).send("로그아웃 되었습니다.");
});

module.exports = router;
