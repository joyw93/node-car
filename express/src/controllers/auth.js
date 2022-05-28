const authService = require("../services/auth");
const status = require("../../config/responseStatus");
const { response, errResponse } = require("../../config/responseFormat");
const regexEmail = require("regex-email");


exports.signup = async (req, res) => {
  const userDTO = req.body; // {email, name, password}

  // 유효성 검사
  if (!userDTO.email)
    return res.send(response(status.SIGNUP_EMAIL_EMPTY));

  if (!userDTO.name) 
    return res.send(response(status.SIGNUP_NAME_EMPTY));

  if (!userDTO.password)
    return res.send(response(status.SIGNUP_PASSWORD_EMPTY));

  if (userDTO.email.length > 30)
    return res.send(response(status.SIGNUP_EMAIL_LENGTH));

  if (!regexEmail.test(userDTO.email))
    return res.send(response(status.SIGNUP_EMAIL_TYPE_ERROR));

  // 유저등록 요청
  const signUpResponse = await authService.createUser(userDTO);

  return res.send(signUpResponse);
};


exports.login = async (req, res, next) => {
  const userDTO = req.body; // { email, password }

  // 유효성 검사
  if (!userDTO.email)
    return res.send(response(status.LOGIN_EMAIL_EMPTY));

  if (!userDTO.password)
    return res.send(response(status.LOGNIN_PASSWORD_EMPTY));

  if (userDTO.email.length > 30)
    return res.send(response(status.LOGIN_EMAIL_LENGTH));

  if (!regexEmail.test(userDTO.email))
    return res.send(response(status.LOGIN_EMAIL_TYPE_ERROR));

  // 로그인 요청
  const loginResponse = await authService.loginUser(userDTO);

  return res.send(loginResponse);
};
