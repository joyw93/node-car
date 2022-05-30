const request = require("supertest");
const { sequelize } = require("../../../src/models");
const app = require("../../../src/app");
const status = require("../../../config/response/auth");
const { response, errResponse } = require("../../../config/response/format");
const { describe } = require("../../../src/models/user");
const { test } = require("regex-email");

// DB연결
beforeAll(async () => {
  await sequelize.sync();
});

/* control layer */

// 유효성 검사
describe("POST", () => {
  test("empty email", (done) => {
    request(app)
      .post("/auth/login")
      .send({ password: "test123" })
      .expect(response(status.LOGIN_EMAIL_EMPTY), done);
  });
});

describe("POST", () => {
  test("empty password", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "test@naver.com" })
      .expect(response(status.LOGIN_PASSWORD_EMPTY), done);
  });
});

describe("POST", () => {
  test("이메일 길이 30이상", (done) => {
    request(app)
      .post("/auth/login")
      .send({
        email: "t111112222233333444445555566666@naver.com",
        password: "test1234",
      })
      .expect(response(status.LOGIN_EMAIL_LENGTH), done);
  });
});

describe("POST", () => {
  test("유효하지 않은 이메일양식(@생략)", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "testnaver.com", password: "test1234" })
      .expect(response(status.LOGIN_EMAIL_TYPE_ERROR), done);
  });
});

describe("POST", () => {
  test("유효하지 않은 이메일양식(.com생략)", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "test@navercom", password: "test1234" })
      .expect(response(status.LOGIN_EMAIL_TYPE_ERROR), done);
  });
});

/* service layer */

describe("POST", () => {
  test("유저생성", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", password: "test1234" }, done);
  });
});

describe("POST", () => {
  test("정상 로그인", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "test@naver.com", password: "test1234" })
      .expect(response(status.LOGIN_SUCCESS), done);
  });
});

describe("POST", () => {
  test("존재하지 않는 유저 로그인", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "test@daum.net", password: "test1234" })
      .expect(response(status.LOGIN_USER_NOT_EXIST), done);
  });
});

describe("POST", () => {
  test("비밀번호 불일치", (done) => {
    request(app)
      .post("auth/login")
      .send({ email: "test@naver.com", password: "wrongpassword" })
      .expect(response(status.LOGIN_PASSWORD_WRONG), done);
  });
});

// DB 초기화
afterAll(async () => {
  await sequelize.sync({ force: true });
});
