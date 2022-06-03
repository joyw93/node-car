const request = require("supertest");
const { sequelize } = require("../../../src/models");
const app = require("../../../src/app");
const status = require("../../../config/response/auth");
const { response, errResponse } = require("../../../config/response/format");

// DB연결
beforeAll(async () => {
  await sequelize.sync();
});

/* control layer */

// 유효성 검사
describe("Signup", () => {
  test("empty email", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ name: "tester", password: "test123" })
      .expect(response(status.SIGNUP_EMAIL_EMPTY), done);
  });
});

describe("Signup", () => {
  test("empty name", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", password: "test1234" })
      .expect(response(status.SIGNUP_NAME_EMPTY), done);
  });
});

describe("Signup", () => {
  test("empty password", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", name: "tester" })
      .expect(response(status.SIGNUP_PASSWORD_EMPTY), done);
  });
});

describe("Signup", () => {
  test("이메일 길이 30이상", (done) => {
    request(app)
      .post("/auth/signup")
      .send({
        email: "t111112222233333444445555566666@naver.com",
        name: "tester",
        password: "test1234",
      })
      .expect(response(status.SIGNUP_EMAIL_LENGTH), done);
  });
});

describe("Signup", () => {
  test("유효하지 않은 이메일양식( @ 생략 )", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "testnaver.com", name: "tester", password: "test1234" })
      .expect(response(status.SIGNUP_EMAIL_TYPE_ERROR), done);
  });
});

describe("Signup", () => {
  test("유효하지 않은 이메일양식( . 생략 )", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@navercom", name: "tester", password: "test1234" })
      .expect(response(status.SIGNUP_EMAIL_TYPE_ERROR), done);
  });
});

/* service layer */

describe("Signup", () => {
  test("정상요청", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", name: "tester", password: "test1234" })
      .expect(response(status.SIGNUP_SUCCESS), done);
  });
});

describe("Signup", () => {
  test("중복이메일 가입요청 거부", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", name: "tester", password: "test1234" })
      .expect(response(status.SIGNUP_REDUNDANT_EMAIL), done);
  });
});

afterAll(async () => {
  await sequelize.sync({ force: true });
});