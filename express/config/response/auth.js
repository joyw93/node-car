module.exports = {
  // Response Success
  SIGNUP_SUCCESS: {
    isSuccess: true,
    code: 2001,
    message: "회원가입 성공",
  },

  LOGIN_SUCCESS: {
    isSuccess: true,
    code: 2002,
    message: "로그인 성공",
  },

  LOGOUT_SUCCESS: {
    isSuccess: true,
    code: 2003,
    message: "로그아웃 성공",
  },

  
  //Request Error
  SIGNUP_EMAIL_EMPTY: {
    isSuccess: false,
    code: 4001,
    message: "이메일을 입력해주세요",
  },
  SIGNUP_EMAIL_LENGTH: {
    isSuccess: false,
    code: 4002,
    message: "이메일은 30자리 미만으로 입력해주세요.",
  },
  SIGNUP_EMAIL_TYPE_ERROR: {
    isSuccess: false,
    code: 4003,
    message: "이메일을 형식을 정확하게 입력해주세요.",
  },
  SIGNUP_PASSWORD_EMPTY: {
    isSuccess: false,
    code: 4004,
    message: "비밀번호를 입력 해주세요.",
  },
  SIGNUP_PASSWORD_LENGTH: {
    isSuccess: false,
    code: 4005,
    message: "비밀번호는 6~20자리를 입력해주세요.",
  },
  SIGNUP_NAME_EMPTY: {
    isSuccess: false,
    code: 4006,
    message: "이름을 입력 해주세요.",
  },
  SIGNUP_NAME_LENGTH: {
    isSuccess: false,
    code: 4007,
    message: "이름은 최대 20자리를 입력해주세요.",
  },

  LOGIN_EMAIL_EMPTY: {
    isSuccess: false,
    code: 4008,
    message: "이메일을 입력해주세요",
  },
  LOGIN_EMAIL_LENGTH: {
    isSuccess: false,
    code: 4009,
    message: "이메일은 30자리 미만으로 입력해주세요.",
  },
  LOGIN_EMAIL_TYPE_ERROR: {
    isSuccess: false,
    code: 4010,
    message: "이메일을 형식을 정확하게 입력해주세요.",
  },
  LOGIN_PASSWORD_EMPTY: {
    isSuccess: false,
    code: 4011,
    message: "비밀번호를 입력 해주세요.",
  },

  USER_USERID_EMPTY: {
    isSuccess: false,
    code: 4012,
    message: "userId를 입력해주세요.",
  },
  USER_USERID_NOT_EXIST: {
    isSuccess: false,
    code: 4013,
    message: "해당 회원이 존재하지 않습니다.",
  },
  LOGIN_USER_NOT_EXIST: {
    isSuccess: false,
    code: 4014,
    message: "해당 이메일을 가진 회원이 존재하지 않습니다.",
  },
  USER_ID_NOT_MATCH: {
    isSuccess: false,
    code: 4015,
    message: "유저 아이디 값을 확인해주세요",
  },
  USER_NICKNAME_EMPTY: {
    isSuccess: false,
    code: 4016,
    message: "변경할 닉네임 값을 입력해주세요",
  },

  USER_STATUS_EMPTY: {
    isSuccess: false,
    code: 4017,
    message: "회원 상태값을 입력해주세요",
  },

  // Response error
  SIGNUP_REDUNDANT_EMAIL: {
    isSuccess: false,
    code: 5001,
    message: "중복된 이메일입니다.",
  },


  LOGIN_EMAIL_WRONG: {
    isSuccess: false,
    code: 5003,
    message: "아이디가 잘못 되었습니다.",
  },
  LOGIN_PASSWORD_WRONG: {
    isSuccess: false,
    code: 5004,
    message: "비밀번호가 잘못 되었습니다.",
  },
  LOGIN_INACTIVE_ACCOUNT: {
    isSuccess: false,
    code: 5005,
    message: "비활성화 된 계정입니다. 고객센터에 문의해주세요.",
  },
  LOGIN_WITHDRAWAL_ACCOUNT: {
    isSuccess: false,
    code: 5006,
    message: "탈퇴 된 계정입니다. 고객센터에 문의해주세요.",
  },

  // Common Error
  DB_ERROR: { isSuccess: false, code: 5000, message: "데이터 베이스 에러" },
  SERVER_ERROR: { isSuccess: false, code: 5001, message: "서버 에러" },
};
