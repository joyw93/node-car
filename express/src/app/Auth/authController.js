const authService = require("../../app/Auth/authService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

const regexEmail = require("regex-email");

exports.signup = async (req, res) => {
  const userDTO = req.body; // {email, name, password}

  // 유효성 검사
  if (!userDTO.email) return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));
  if (!userDTO.name) return res.send(response(baseResponse.SIGNUP_NAME_EMPTY));
  if (!userDTO.password) return res.send(response(baseResponse.SIGNUP_PASSWORD_EMPTY));

  if (userDTO.email.length > 30)
    return res.send(response(baseResponse.SIGNUP_EMAIL_LENGTH));

  if (!regexEmail.test(userDTO.email))
    return res.send(response(baseResponse.SIGNUP_EMAIL_ERROR_TYPE));

  // 유저등록 요청
  const signUpResponse = await authService.createUser(userDTO);

  return res.send(signUpResponse);
};
