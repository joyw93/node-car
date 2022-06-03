const service = require("../services/auth");
const validator = require("../validators/auth");


exports.signup = async (req, res) => {
  const signupUser = req.body;

  // 유효성 검사
  const invalidMessage = validator.signup(signupUser);
  if (invalidMessage) return res.send(invalidMessage);

  // 유저등록 요청
  const signupResponse = await service.createUser(signupUser);
  return res.send(signupResponse);
};

exports.login = async (req, res, next) => {
  const loginUser = req.body;

  // 유효성 검사
  const invalidMessage = validator.login(loginUser);
  if (invalidMessage) return res.send(invalidMessage);

  // 로그인 요청
  await service.loginUser(req, res, next);
};

exports.logout = async (req, res) => {

  // 로그아웃 요청
  const logoutResponse = await service.logoutUser(req, res);
  return res.send(logoutResponse);
};
