const authService = require("../services/auth");
const validator = require("../validators/auth");


exports.signup = async (req, res) => {
  const signupUser = req.body;

  // 유효성 검사
  const unvalidMessage = validator.signup(signupUser);
  if (unvalidMessage) return res.send(unvalidMessage);

  // 유저등록 요청
  const signupResponse = await authService.createUser(signupUser);
  return res.send(signupResponse);
};

exports.login = async (req, res, next) => {
  const loginUser = req.body;

  // 유효성 검사
  const unvalidMessage = validator.login(loginUser);
  if (unvalidMessage) return res.status(400).send(unvalidMessage);

  // 로그인 요청
  await authService.loginUser(req, res, next);
};

exports.logout = async (req, res) => {

  // 로그아웃 요청
  const logoutResponse = await authService.logoutUser(req, res);
  return res.send(logoutResponse);
};
