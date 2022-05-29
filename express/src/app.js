require("dotenv").config();

/* import middlewares */
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const hpp = require("hpp");
const app = express();

/* load routers */
const carRouter = require("../routes/car");
const authRouter = require("./routes/auth");

const isProd = process.env.NODE_ENV === "production";
const passportConfig = require("../passport");
passportConfig();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: ["http://nodecar.co.kr", "http://127.0.0.1:800"],
    credentials: true,
  })
);

if (isProd) {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
  app.disable("x-powered-by");
} else {
  app.use(morgan("dev"));
}

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
  console.log(req.isAuthenticated());
  next();
});

authRouter(app);
app.use("/car", carRouter);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
