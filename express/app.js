const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config();
const authRouter = require("./routes/auth");
const { sequelize, User } = require("./models");
const passportConfig = require("./passport");
const url =
  process.env.NODE_ENV === "production"
    ? "http://15.164.45.134:80"
    : "http://localhost:800";

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
  app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: 'http://localhost:800',
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
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.get("/", (req, res, next) => {
  console.log(req.isAuthenticated())
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
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(process.env.PORT);
  console.log("http://127.0.0.1:3080");
});
