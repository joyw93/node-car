require("dotenv").config();

/* import middlewares */
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const hpp = require("hpp");
const app = express();

/* load routers */
const carRouter = require("./routes/car");
const authRouter = require("./routes/auth");

const isProd = process.env.NODE_ENV === "production";
const passportConfig = require("../config/passport");

passportConfig();

if (isProd) {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
  app.disable("x-powered-by");
} else {
  app.use(morgan("dev"));
}
app.use(
  cors({
    origin: ["http://nodecar.co.kr", "http://127.0.0.1:800"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
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

authRouter(app);
carRouter(app);

module.exports = app;
