const request = require("supertest");
const { sequelize } = require("../../../../src/models");
const app = require("../../../../src/app");
const status = require("../../../../config/responseStatus");
const { response, errResponse } = require("../../../../config/responseFormat");

// DB연결
beforeAll(async () => {
  await sequelize.sync();
});

/* control layer */

// 유효성 검사
describe("POST /login", () => {
  test("empty email", (done) => {
    request(app)
      .post("/auth/login")
      .send({ password: "test123" })
      .expect(response(status.LOGIN_EMAIL_EMPTY), done);
  });
});

describe("POST /login", () => {
  test("empty password", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "test@naver.com" })
      .expect(response(status.LOGIN_PASSWORD_EMPTY), done);
  });
});

describe("POST /login", () => {
  test("이메일 길이 30이상", (done) => {
    request(app)
      .post("/auth/login")
      .send({
        email: "t111112222233333444445555566666@naver.com",
        name: "tester",
        password: "test1234",
      })
      .expect(response(status.LOGIN_EMAIL_LENGTH), done);
  });
});

describe("POST /login", () => {
  test("유효하지 않은 이메일양식(@생략)", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "testnaver.com", name: "tester", password: "test1234" })
      .expect(response(status.LOGIN_EMAIL_TYPE_ERROR), done);
  });
});

describe("POST /signup", () => {
  test("유효하지 않은 이메일양식(.com생략)", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@navercom", name: "tester", password: "test1234" })
      .expect(response(status.LOGIN_EMAIL_TYPE_ERROR), done);
  });
});

/* service layer */

describe("POST /login", () => {
  test("정상요청", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "test@naver.com", name: "tester", password: "test1234" })
      .expect(response(status.SUCCESS), done);
  });
});

describe("POST /login", () => {
  test("중복된 이메일", (done) => {
    request(app)
      .post("/auth/login")
      .send({ email: "test@naver.com", name: "tester", password: "test1234" })
      .expect(response(status.SIGNUP_REDUNDANT_EMAIL), done);
  });
});

afterAll(async () => {
  await sequelize.sync({ force: true });
});