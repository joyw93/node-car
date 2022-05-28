const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const passport = require("passport");
const helmet = require("helmet");
const hpp = require("hpp");
const isProd = process.env.NODE_ENV === "production";

dotenv.config();
//const authRouter = require("./routes/auth");
const carRouter = require("./routes/car");

const authRouter = require("./src/routes/auth");

const { sequelize } = require("./src/models");
const passportConfig = require("./passport");
const frontUrl =
  process.env.NODE_ENV === "production"
    ? "http://nodecar.co.kr"
    : "http://127.0.0.1:800";

const app = express();
passportConfig();

app.set("port", process.env.PORT || 3080);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
  app.disable("x-powered-by");
} else {
  app.use(morgan("dev"));
}
app.use(
  cors({
    origin: frontUrl,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: isProd && ".nodecar.co.kr",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  next();
});

//app.use("/auth", authRouter);

authRouter(app);
app.use("/car", carRouter);

app.get("/", (req, res, next) => {
  res.send("hi express");
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.send("error");
});

app.listen(app.get("port"), () => {
  console.log(process.env.PORT);
  console.log("http://localhost:3080");
});

module.exports = app;