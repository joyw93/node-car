const authService = require("../services/auth");
const status = require("../../config/responseStatus");
const { response } = require("../../config/responseFormat");
const regexEmail = require("regex-email");


exports.signup = async (req, res) => {
  const userDTO = req.body; // {email, name, password}

  // 유효성 검사
  if (!userDTO.email) return res.send(response(status.SIGNUP_EMAIL_EMPTY));
  if (!userDTO.name) return res.send(response(status.SIGNUP_NAME_EMPTY));
  if (!userDTO.password) return res.send(response(status.SIGNUP_PASSWORD_EMPTY));
  if (userDTO.email.length > 30) return res.send(response(status.SIGNUP_EMAIL_LENGTH));
  if (!regexEmail.test(userDTO.email)) return res.send(response(status.SIGNUP_EMAIL_TYPE_ERROR));

  // 유저등록 요청
  const signupResponse = await authService.createUser(userDTO);

  return res.send(signupResponse);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 유효성 검사
  if (!email) return res.send(response(status.LOGIN_EMAIL_EMPTY));
  if (!password) return res.send(response(status.LOGIN_PASSWORD_EMPTY));
  if (email.length > 30) return res.send(response(status.LOGIN_EMAIL_LENGTH));
  if (!regexEmail.test(email)) return res.send(response(status.LOGIN_EMAIL_TYPE_ERROR));

  // 로그인 요청
  await authService.loginUser(req, res, next);
};

exports.logout = async (req, res) => {

  // 로그아웃
  const logoutResponse = await authService.logoutUser(req, res);
  return res.send(logoutResponse)
};
