const request = require("supertest") // 1번
const express = require("express")
 
// 라우터
const app = express()
app.get("/user", (req, res) => res.json({ name: "alice" }))
app.listen(3080) 

request(app) // 2번
  .get("/user") // 3번
  .expect(200, { name: "alice" }) // 4번