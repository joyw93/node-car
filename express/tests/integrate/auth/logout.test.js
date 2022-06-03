const request = require("supertest");
const { sequelize } = require("../../../src/models");
const app = require("../../../src/app");
const status = require("../../../config/response/auth");
const { response, errResponse } = require("../../../config/response/format");

// DB연결
beforeAll(async () => {
  await sequelize.sync();
});


/* service layer */

describe("Logout", () => {
  // 유저 생성
  const agent = request.agent(app);
  beforeEach((done) => {
    agent
      .post("/auth/signup")
      .send({ email: "test@naver.com", name: "tester", password: "test1234" })
      .end(done);
  });
  test("로그아웃", (done) => {
    request(app)
      .get("/auth/logout")
      .send()
      .expect(response(status.LOGOUT_SUCCESS), done);
  });
});


// DB 초기화
afterAll(async () => {
  await sequelize.sync({ force: true });
});
