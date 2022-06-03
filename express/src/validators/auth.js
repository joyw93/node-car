const status = require("../../config/response/auth");
const { response } = require("../../config/response/format");
const regexEmail = require("regex-email");


exports.signup = (user) => {
  // 빈 값 검사
  if (!user.email) return response(status.SIGNUP_EMAIL_EMPTY);
  if (!user.name) return response(status.SIGNUP_NAME_EMPTY);
  if (!user.password) return response(status.SIGNUP_PASSWORD_EMPTY);
  // 길이 검사
  if (user.email.length > 30) return response(status.SIGNUP_EMAIL_LENGTH);
  // 이메일 형식 검사
  if (!regexEmail.test(user.email)) return response(status.SIGNUP_EMAIL_TYPE_ERROR);
};

exports.login = (user) => {
  // 빈 값 검사
  if (!user.email) return response(status.LOGIN_EMAIL_EMPTY);
  if (!user.password) return response(status.LOGIN_PASSWORD_EMPTY);
  // 길이 검사
  if (user.email.length > 30) return response(status.LOGIN_EMAIL_LENGTH);
  // 이메일 형식 검사
  if (!regexEmail.test(user.email)) return response(status.LOGIN_EMAIL_TYPE_ERROR);
};

