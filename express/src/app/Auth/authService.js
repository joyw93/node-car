const { User } = require("../../../models");
const bcrypt = require("bcrypt");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

exports.createUser = async (user) => {
  try {
    // 이메일 중복 확인
    const userRow = await User.findOne({ where: { email: user.email } });
    if (userRow) return response(baseResponse.SIGNUP_REDUNDANT_EMAIL);

    // 비밀번호 hashing
    const hashedPassword = await bcrypt.hash(user.password, 12);

    // 유저 등록
    await User.create({
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });

    return response(baseResponse.SUCCESS);

    
  } catch (err) {
    return errResponse(baseResponse.DB_ERROR);
  }
};
