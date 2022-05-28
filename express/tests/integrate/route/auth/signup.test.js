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
describe("POST /signup", () => {
  test("empty email", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ name: "조용원", password: "test123" })
      .expect(response(status.SIGNUP_EMAIL_EMPTY), done);
  });
});

describe("POST /signup", () => {
  test("empty name", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", password: "test1234" })
      .expect(response(status.SIGNUP_NAME_EMPTY), done);
  });
});

describe("POST /signup", () => {
  test("empty password", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", name: "tester" })
      .expect(response(status.SIGNUP_PASSWORD_EMPTY), done);
  });
});

describe("POST /signup", () => {
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

describe("POST /signup", () => {
  test("유효하지 않은 이메일양식(@생략)", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "testnaver.com", name: "tester", password: "test1234" })
      .expect(response(status.SIGNUP_EMAIL_TYPE_ERROR), done);
  });
});

describe("POST /signup", () => {
  test("유효하지 않은 이메일양식(.com생략)", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@navercom", name: "tester", password: "test1234" })
      .expect(response(status.SIGNUP_EMAIL_TYPE_ERROR), done);
  });
});

/* service layer */

describe("POST /signup", () => {
  test("정상요청", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", name: "tester", password: "test1234" })
      .expect(response(status.SUCCESS), done);
  });
});

describe("POST /signup", () => {
  test("중복된 이메일", (done) => {
    request(app)
      .post("/auth/signup")
      .send({ email: "test@naver.com", name: "tester", password: "test1234" })
      .expect(response(status.SIGNUP_REDUNDANT_EMAIL), done);
  });
});

afterAll(async () => {
  await sequelize.sync({ force: true });
});